class Utils {

  /**
   * Throw an error with a message.
   *
   * @param message Message to append to the error
   */
  static handleError(message: string) {
    throw new Error(message)
  }
}

export { Utils }
export default Utils