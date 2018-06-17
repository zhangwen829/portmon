const {expect} = require('chai');
import {RandomWalkPriceFetcher} from './PriceFetcher';

describe('test RandomWalkPriceFetcher', () => {
  it('Returns 0.9 * origin price if random < 0.3', () => {
    const fakeRandomGeneratorFunc = () => { return 0.2; };
    const underTest = new RandomWalkPriceFetcher(fakeRandomGeneratorFunc);
    const rets = underTest.fetch([], [100, 200]);
    expect(rets).to.be.an('array').that.to.have.lengthOf(2);
    expect(rets[0]).to.be.equal(90);
    expect(rets[1]).to.be.equal(180);
  });
  it('Returns 1.1 * origin price if random > 0.7', () => {
    const fakeRandomGeneratorFunc = () => { return 0.8; };
    const underTest = new RandomWalkPriceFetcher(fakeRandomGeneratorFunc);
    const rets = underTest.fetch([], [100, 200]);
    expect(rets).to.be.an('array').that.to.have.lengthOf(2);
    expect(rets[0]).to.be.equal(110);
    expect(rets[1]).to.be.equal(220);
  });
  it('Keeps the same if 0.3 < random < 0.7', () => {
    const fakeRandomGeneratorFunc = () => { return 0.5; };
    const underTest = new RandomWalkPriceFetcher(fakeRandomGeneratorFunc);
    const rets = underTest.fetch([], [100, 200]);
    expect(rets).to.be.an('array').that.to.have.lengthOf(2);
    expect(rets[0]).to.be.equal(100);
    expect(rets[1]).to.be.equal(200);
  });
});