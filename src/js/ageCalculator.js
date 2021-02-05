export default class AgeCalculator {
  constructor(earthAge, country, activityLevel, incomeClass) {
    this.earthAge = earthAge;
    this.mercuryAge = parseFloat((earthAge / .24).toFixed(2));
    this.venusAge = parseFloat((earthAge / .62).toFixed(2));
    this.marsAge = parseFloat((earthAge / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((earthAge / 11.68).toFixed(2));
    this.userInfo = new Map(
      [
        ["country", country],
        ["activityLevel", activityLevel],
        ["incomeClass", incomeClass]
      ]
    );
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
