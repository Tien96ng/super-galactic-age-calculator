export default class AgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = parseFloat((earthAge / .24).toFixed(2));
    this.venusAge;
  }
}
