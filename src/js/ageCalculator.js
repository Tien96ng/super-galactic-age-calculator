export default class AgeCalculator {
  constructor(earthAge, country, activityLevel, incomeClass) {
    this.earthAge = earthAge;
    this.mercuryAge = this.calculatePlanetAge(.24);
    this.venusAge = this.calculatePlanetAge(.62);
    this.marsAge = this.calculatePlanetAge(1.88);
    this.jupiterAge = this.calculatePlanetAge(11.68);
    this.userInfo = new Map(
      [
        ["country", country],
        ["activityLevel", activityLevel],
        ["incomeClass", incomeClass]
      ]
    );
  }

  calculatePlanetAge(multiplier) {
    return parseFloat((this.earthAge / multiplier).toFixed(2));
  }

  lifeExpectancy() {
    let avgLifeExpectancy = 70;
    let firstWorldCountries = 
      [
        "Belgium", "Canada", "Denmark",
        "France",	"Germany", "Greece",
        "Iceland", "Italy", "Luxembourg",
        "Netherlands", "Norway", "Portugal",
        "Spain", "Turkey",	"United Kingdom",
        "USA", "Israel", "Japan",
        "South Korea", "Austria", "Ireland",
        "Sweden", "Switzerland"
      ];
    firstWorldCountries.includes(this.userInfo.get("country")) ? avgLifeExpectancy += 5 : avgLifeExpectancy -= 10;
    this.userInfo.get("incomeClass") === "Low" ? avgLifeExpectancy -= 10 : avgLifeExpectancy += 5;
    switch(this.userInfo.get("activityLevel")) {
      case 10: avgLifeExpectancy++;
      case 9: avgLifeExpectancy++;
      case 8: avgLifeExpectancy++;
      case 7: avgLifeExpectancy++;
      default: break;
    }
    return avgLifeExpectancy;
  }
}
