import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  test("Should return the age given.", () => {
    const earth = new AgeCalculator(15)
    expect(earth.age).toEqual(15);
  });
});