export default class AgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = earthAge / .24;;
  }
}
