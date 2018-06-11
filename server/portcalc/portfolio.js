class SecurityPosition {
  set ticker(ticker) { this._ticker = ticker; }
  get ticker() { return this._ticker; }

  set position(position) { this._position = position; }
  get position() { return this._position; }

  set lastPrice(lastPrice) { this._lastPrice = lastPrice; }
  get lastPrice() { return this._lastPrice; }
}

class Portfolio {
  constructor(portfolioId) {
    this.portfolioId = portfolioId;
    this.positions = new Array();
  }

  loadPortfolio() {}

  refreshLastPrice() {
    this.positions.forEach(
        position => {

        });
  }
}