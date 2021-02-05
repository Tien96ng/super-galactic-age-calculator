export default class AgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = parseFloat((earthAge / .24).toFixed(2));
    this.venusAge = parseFloat((earthAge / .62).toFixed(2));
    this.marsAge = parseFloat((earthAge / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((earthAge / 11.68).toFixed(2));
  }
}
