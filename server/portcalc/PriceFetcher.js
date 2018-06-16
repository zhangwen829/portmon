function randomGeneratorFunc() {
  return Math.random();
}
/**
 * A fake price fetcher which get price by random walk last price.
 */
class RandomWalkPriceFetcher {
  constructor(randomGeneratorFunc) {
    this.randomGeneratorFunc = randomGeneratorFunc;
  }

  static create() { return new RandomWalkPriceFetcher(randomGeneratorFunc); }

  fetch(tickers, lastPrices) {
    return lastPrices.map(lastPrice => {
      var n = this.randomGeneratorFunc();
      if (lastPrice === undefined) {
        return Math.floor(n * 200);
      }
      if (n < 0.3) {
        return Math.floor(lastPrice * 0.9);
      } else if (n > 0.7) {
        return Math.floor(lastPrice * 1.1);
      } else {
        return lastPrice;
      }
    });
  }
}

/**
 * A price fetcher which fetch the price from redis.
 */
class RedisPriceFetcher {
  fetch(tickers, lastPrices = []) {}
}

module.exports = {RandomWalkPriceFetcher};