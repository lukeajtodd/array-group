import Utils from './Utils'
import NumberUtils from './NumberUtils'

class ArrayUtils extends Utils {

  /**
   * Verify that the passed array is an array using `Array.isArray`.
   *
   * @param arr Array to verify is an array
   * @param message Error response upon failure
   */
  static isArray<T>(
    arr: Array<T>,
    message: string = 'Argument is not an array'
  ): void {
    if (!Array.isArray(arr)) {
      Utils.handleError(message)
    }
  }

  /**
   * Verify that the passed array has at least one element.
   *
   * @param arr Array to verify has elements
   */
  static hasElements<T>(
    arr: Array<T>,
    message: string = 'Array must have elements (a length greater than 0).'
  ): void {
    if (arr.length < 1) {
      Utils.handleError(message)
    }
  }

  groupArrayElements<T>(
    arr: Array<T>,
    numberOfSegments: number
  ): void | Array<Array<T>> {

    /**
     * Check for any invalid arguments
     */
    ArrayUtils.isArray<T>(arr, 'First parameter must be an array.')
    ArrayUtils.hasElements(arr)
    NumberUtils.isNumber(numberOfSegments)
    NumberUtils.isPositive(numberOfSegments)

    if (numberOfSegments > arr.length) {
      Utils.handleError('Cannot split array into more segments than elements.')
    }

    let inner: T[] = []

    const innerLength = Math.round(arr.length / numberOfSegments)

    const result: Array<Array<T>> = arr.reduce((
      built: Array<Array<T>>,
      element: T
    ) => {

      if (inner.length < innerLength) {
        inner.push(element)
      }

      if (inner.length === innerLength) {
        built.push(inner)
        inner = []
      }

      return built
    }, [])

    // Clean up of any remainder
    if (inner.length) {
      result.push(inner)
    }

    return result
  }
}

export { ArrayUtils }
export default ArrayUtils