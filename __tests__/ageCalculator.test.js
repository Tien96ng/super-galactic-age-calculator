import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  let person;

  beforeAll(() => {
    person = new AgeCalculator(15, "USA", 10, "Male", "Low");
  });

  afterAll(() => {
    return person;
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

  test("Should return map of user's information entered.", () => {
    expect(person.userInfo.get("country")).toEqual("USA");
    expect(person.userInfo.get("activityLevel")).toEqual(10);
    expect(person.userInfo.get("gender")).toEqual("Male");
    expect(person.userInfo.get("incomeClass")).toEqual("Low");
  });

  test("Should return life expectancy depending if they live in a first world country or not.", () => {
    const personLivingInThirdWorld = new AgeCalculator(15, "Vietnam", 10, "Male", "Low");
    expect(person.lifeExpectancy()).toEqual(79);
    expect(personLivingInThirdWorld.lifeExpectancy()).toEqual(64);
  });

  test("Should the person's life expectancy depending on their country, activity levels, gender, and income class.", () => {
    expect(person.lifeExpectancy()).toEqual(79);
  });
});