const expect = require('chai').expect;
const useFakeTimers = require('sinon').useFakeTimers;

let clock;

describe('Tests', () => {

  beforeEach(() => {
    clock = useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('should console log after seconds given', () => {
    const seconds = 2 * 1000;
    let timedout = false;

    setTimeout(() => {
      timedout = true;
    }, seconds);

    clock.tick(seconds);

    expect(timedout).to.be.true;
  });

});

