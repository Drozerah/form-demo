/**
 * Materialize Character Counter Initialization
 * 
 * Initialize the Character Counter for the element
 * textarea <textarea id="textarea"></textarea>
 * 
 * @{issue} https://github.com/Dogfalo/materialize/issues/5730#issuecomment-377773535
 * 
 * @doc https://materializecss.com/text-inputs.html#character-counter
 * 
 * @returns Character Counter instance
 * 
 */
const initCharacterCounter = () => {
    
    return document.addEventListener('DOMContentLoaded', () => {

        const elem = document.getElementById('textarea')
        return  M.CharacterCounter.init(elem)

    })

}

export { initCharacterCounter }
