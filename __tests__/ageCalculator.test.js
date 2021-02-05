import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  let person;

  beforeEach(() => {
    person = new AgeCalculator(15);
  });

  test("Should return the age given earth age.", () => {
    expect(person.earthAge).toEqual(15);
  });
});