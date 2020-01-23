const { describe, expect } = require("pretzel-test")
const { addNumbers } = require("../src/addNumbers")

describe('addNumbers')
  .before(() => {
    // before
  })
  .beforeEach(() => {
    // before each
  })
  .after(() => {
    // after
  })
  .afterEach(() => {
    // after each
  })
  .it('should add positive numbers correctly', () => {
    const expected = 10;
    const result = addNumbers(2, 8)
    expect(result).toEqual(expected)
  })
  .it('should add negative numbers correctly', () => {
    const expected = -10;
    const result = addNumbers(-2, -8)
    expect(result).toEqual(expected)
  })
  .it('should add positive and negative numbers correctly', () => {
    // A delberately failing test, as the expectation is incorrect
    const expected = 20;
    const result = addNumbers(10, -8)
    expect(result).toEqual(expected)
  })