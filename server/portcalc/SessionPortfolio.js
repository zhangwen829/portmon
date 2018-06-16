const {PortfolioData} = require('../db/models');
const {RandomWalkPriceFetcher} = require('./PriceFetcher');

class SessionSecurity {
  set id(id) { this._id = id; }
  get id() { return this._id; }

  set ticker(ticker) { this._ticker = ticker; }
  get ticker() { return this._ticker; }

  set position(position) { this._position = position; }
  get position() { return this._position; }

  set lastPrice(lastPrice) { this._lastPrice = lastPrice; }
  get lastPrice() { return this._lastPrice; }
}

class SessionPortfolio {
  /**
   * @constructor
   *
   * @private
   * @param {number} portfolioId.
   * @param {PriceFetcher} priceFetcher.
   * @param {array} sessionSecurities.
   */
  constructor(portfolioId, priceFetcher, sessionSecurities) {
    this.portfolioId = portfolioId;
    this.priceFetcher = priceFetcher;
    this.sessionSecurities = sessionSecurities;
    this.lastPublished = [];
  }

  /**
   * Creates a portfolio via its portfolio id.
   *
   * @param {number} portfolioId the portfolio id of the to be created
   * portfolio.
   * @return {SessionPortfolio} the created portfolio.
   */
  static async create(portfolioId) {
    const portfolioData =
        await PortfolioData.listPortfolioDataByPortfolioMetadataId(portfolioId);
    const sessionSecurities = portfolioData.map(d => {
      var s = new SessionSecurity();
      s.id = d.securityId;
      s.ticker = d.security.ticker;
      s.position = d.position;
      return s;
    });
    return new SessionPortfolio(
        portfolioId, RandomWalkPriceFetcher.create(), sessionSecurities);
  }

  /**
   * Refresh last prices and do any possible re-calculation.
   */
  refresh() {
    const allTickers = this.sessionSecurities.map(s => s.ticker);
    const allLastPrices = this.sessionSecurities.map(s => s.lastPrice);
    const newLastPrices = this.priceFetcher.fetch(allTickers, allLastPrices);
    this.sessionSecurities.forEach(
        (s, i) => { s.lastPrice = newLastPrices[i]; });
  }

  /**
   * Pubish any change since last refresh.
   * @return {object} contains {@code SessionPorfolio}'s id + any changed field.
   */
  publishDiff() {
    let toBePublished = [];
    if (this.lastPublished.length === 0) {
      toBePublished = this.sessionSecurities.map(s => {
        return {
          id: s.id,
          ticker: s.ticker,
          position: s.position,
          lastPrice: s.lastPrice
        };
      });
    } else {
      this.sessionSecurities.forEach((s, i) => {
        if (s.lastPrice != this.lastPublished[i].lastPrice) {
          toBePublished.push({id: s.id, lastPrice: s.lastPrice});
        }
      });
    }
    this.lastPublished = [];
    this.sessionSecurities.forEach(s => {
      let oneEntry = new SessionSecurity();
      oneEntry.id = s.id;
      oneEntry.ticker = s.ticker;
      oneEntry.position = s.position;
      oneEntry.lastPrice = s.lastPrice;
      this.lastPublished.push(oneEntry);
    });
    return toBePublished;
  }
}

module.exports = SessionPortfolio;