/**
 * Capitalize the first letter of a given string
 * 
 * - note: we use the ES6 destructuring assignment and the spread/rest operator
 * 
 * @exemple drozerah => Drozerah
 * 
 * @param string - the input string
 * @returns the capitalized string
 */

const capitalize = (string) => {

    const [firstLetter, ...rest] = string

    return [firstLetter.toUpperCase(), ...rest].join('')
}

/**
 * Modules export
 */

export{ capitalize }