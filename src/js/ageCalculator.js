export default class AgeCalculator {
  constructor(earthAge, country, activityLevel, incomeClass) {
    this.earthAge = earthAge;
    this.mercuryAge = this.calculatePlanetAge(this.earthAge, .24);
    this.venusAge = this.calculatePlanetAge(this.earthAge, .62);
    this.marsAge = this.calculatePlanetAge(this.earthAge, 1.88);
    this.jupiterAge = this.calculatePlanetAge(this.earthAge, 11.68);
    this.userInfo = new Map(
      [
        ["country", country],
        ["activityLevel", activityLevel],
        ["incomeClass", incomeClass]
      ]
    );
    this.planetLifeExpectancyArr = [
      {
        planet: "earth",
        avgLifeExpectancy: this.lifeExpectancy(1),
        yearsLeftToLive: 0
      },
      {
        planet: "mercury",
        avgLifeExpectancy: this.lifeExpectancy(.24),
        yearsLeftToLive: 0
      },
      {
        planet: "venus",
        avgLifeExpectancy: this.lifeExpectancy(.62),
        yearsLeftToLive: 0
      },
      {
        planet: "mars",
        avgLifeExpectancy: this.lifeExpectancy(1.88),
        yearsLeftToLive: 0
      },
      {
        planet: "jupiter",
        avgLifeExpectancy: this.lifeExpectancy(11.68),
        yearsLeftToLive: 0
      }
    ];
  }

  calculatePlanetAge(planetAge, multiplier) {
    return parseFloat((planetAge/ multiplier).toFixed(2));
  }

  lifeExpectancy(multipler) {
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
    return this.calculatePlanetAge(avgLifeExpectancy, multipler);
  }

  yearsOnEachPlanet() {
    let yearsOnEachPlanetArr = []
    let ages = [this.earthAge, this.mercuryAge, this.venusAge, this.marsAge, this.jupiterAge];
    for(let i = 0; i < this.planetLifeExpectancyArr.length; i++) {
      yearsOnEachPlanetArr.push(parseFloat((this.planetLifeExpectancyArr[i].avgLifeExpectancy - ages[i]).toFixed(2)));
    }
    return yearsOnEachPlanetArr;
  }
}
