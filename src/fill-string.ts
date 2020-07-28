/**
 *  @author Hugo Andrés Escobar Ciceri
 *  @version 1.0.0
 *  Fill String, is a function to create a new String with specific size.
 *  If the String size is less than specific size the function will return a String filled
 *  with a comodin character.
 */

/**
 * @param prevText {prevText} Actual Text with older size
 * @param comodin {comodin} Character to fill the string
 * @param options {options} maxSize:number, position: 'START' | 'END'
 */
class FillString {
  constructor() {}

  fill(
    prevText: string = '',
    comodin: string = '',
    options: { maxSize: number; position: string } = {
      maxSize: prevText.length,
      position: 'START',
    }
  ) {
    if (prevText.length < options.maxSize) {
      const newString = comodin.repeat(options.maxSize - prevText.length);
      switch (options.position) {
        case 'START':
          return newString.concat(prevText);
        case 'END':
          return prevText.concat(newString);
        default:
          break;
      }
    } else {
      return prevText;
    }
  }
}

export default FillString;
