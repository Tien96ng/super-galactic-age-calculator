import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  test("Should return the age given.", () => {
    const sam = new AgeCalculator(15)
    expect(sam.earthAge).toEqual(15);
  });
});