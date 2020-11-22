import Utils from './Utils'

class NumberUtils extends Utils {

  /**
   * Verify whether the argument is a number using `typeof`.
   *
   * @param num Number to verify is a number
   * @param message Error response upon failure
   */
  static isNumber(
    num: number,
    message: string = 'Argument is not a number'
  ): void {
    if (typeof num !== 'number') {
      Utils.handleError(message)
    }
  }

  /**
   * Verfy that the argument is positive.
   *
   * @param num Number to verify is positive
   * @param message Error response upon failure
   */
  static isPositive(
    num: number,
    message: string = 'Argument is not positive'
  ): void {
    // Make sure the argument is also a number.
    NumberUtils.isNumber(num)

    if (num < 0) {
      Utils.handleError(message)
    }
  }
}

export { NumberUtils }
export default NumberUtils