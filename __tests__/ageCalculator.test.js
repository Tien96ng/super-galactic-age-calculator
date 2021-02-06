import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  let person;

  beforeAll(() => {
    person = new AgeCalculator(15, "USA", 10, "Low");
  });

  afterAll(() => {
    return person;
  });

  test("Should return the given earth age.", () => {
    expect(person.earthAge).toEqual(15);
  });

  test("Should return the user's age depending on the multipler and base planet age given.", () => {
    expect(person.calculatePlanetAge(person.earthAge, .24)).toEqual(62.5);
    expect(person.calculatePlanetAge(person.earthAge, .62)).toEqual(24.19);
    expect(person.calculatePlanetAge(person.earthAge, 1.88)).toEqual(7.98);
    expect(person.calculatePlanetAge(person.earthAge, 11.68)).toEqual(1.28);
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
    expect(person.userInfo.get("incomeClass")).toEqual("Low");
  });

  test("Should return life expectancy depending if they live in a first world country or not.", () => {
    const personLivingInThirdWorld = new AgeCalculator(15, "Vietnam", 10, "Low");
    expect(person.lifeExpectancy(1)).toEqual(69);
    expect(personLivingInThirdWorld.lifeExpectancy(1)).toEqual(54);
  });

  test("Should return life expectancy depending on their income class, especially if they're low income.", () => {
    const highIncomePerson = new AgeCalculator(15, "USA", 10, "High");
    expect(highIncomePerson.lifeExpectancy(1)).toEqual(84);
    expect(person.lifeExpectancy(1)).toEqual(69);
  });

  test("Should the person's life expectancy depending on their country, activity levels, and income class.", () => {
    expect(person.lifeExpectancy(1)).toEqual(69);
  });

  test("Should return an object with the user's life expectancy on earth, mercury, venus, mars, jupiter.", () => {
    expect(person.planetLifeExpectancyArr[0].avgLifeExpectancy).toEqual(69);
    expect(person.planetLifeExpectancyArr[1].avgLifeExpectancy).toEqual(287.5);
    expect(person.planetLifeExpectancyArr[2].avgLifeExpectancy).toEqual(111.29);
    expect(person.planetLifeExpectancyArr[3].avgLifeExpectancy).toEqual(36.7);
    expect(person.planetLifeExpectancyArr[4].avgLifeExpectancy).toEqual(5.91);
  });

  // test("Should return a positive number if the user is approaching their death, signaling how long they have left to live.", () => {
  //   expect(person.calculateYearsLeft(70, 15)).toEqual(55);
  // });

  // test("Should return a negative number if the user has lived pass their projected average life expectancy.", () => {
  //   expect(person.calculateYearsLeft(70, 71)).toEqual(-1);
  // });

  test("Should return an array of years left to live on each planet or how many years they lives past.", () => {
    expect(person.yearsOnEachPlanet()).toEqual([54, 225, 87.1, 28.72, 4.63]);
  });
});