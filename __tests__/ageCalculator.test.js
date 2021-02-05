import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  let person;

  beforeEach(() => {
    person = new AgeCalculator(15);
  });

  test("Should return the given earth age.", () => {
    expect(person.earthAge).toEqual(15);
  });

  test("Should return the given earth age in Mercury years.", () => {
    expect(person.mercuryAge).toEqual(62.5);
  });

  test("Should return the given earth age in Venus years.", () => {
    expect(person.venusAge).toEqual(24.19);
  });

  test("Should return the given earth age in Mars years.", () => {
    expect(person.marsAge).toEqual(7.98);
  });

  test("Should return the given earth age in Jupiter years.", () => {
    expect(person.jupiterAge).toEqual(1.28);
  });
});