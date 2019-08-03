/**
 * Materialize Select Initialization
 * 
 * - Initialize all Materialize <select></select> elements
 * 
 * @doc https://materializecss.com/select.html
 * 
 * @returns new FormSelect instance
 * 
 * @author Drozerah https://github.com/Drozerah
 */
const initSelect = () => {

    if(document.querySelector('select')){

        document.addEventListener('DOMContentLoaded', () => {

            const elems = document.querySelectorAll('select')
            const options = {/* ... */}

            // var instances = M.FormSelect.init(elems)
            return M.FormSelect.init(elems, options)
        })
    }

}

/**
 * Materialize Character Counter Initialization
 * 
 * - Initialize the Character Counter for the element
 * textarea <textarea id="textarea"></textarea>
 * 
 * @{issue} https://github.com/Dogfalo/materialize/issues/5730#issuecomment-377773535
 * 
 * @doc https://materializecss.com/text-inputs.html#character-counter
 * 
 * @param string the HTML textarea markup id selector
 * @returns new Character Counter instance
 * 
 * @author Drozerah https://github.com/Drozerah
 */
const initCharacterCounter = id => {

    document.addEventListener('DOMContentLoaded', () => {

        if(document.getElementById(id)){

            const elem = document.getElementById(id)
            return  M.CharacterCounter.init(elem)
        }
    })
}

/**
 * Return an alert when the form is submitted then reset the form
 * 
 * - note: the function currently disable the form's default action
 * 
 * @param string the HTML markup id selector
 * @param boolean reset the form if true
 * @returns JS alert prompt and the form reset
 * 
 * @author Drozerah https://github.com/Drozerah
 */
const submitForm = (id, isReset ) => {

    if(document.getElementById(id)){

        const form = document.getElementById(id)

        form.addEventListener('submit', e => {

            e.preventDefault()

            alert('Submitted !')
            
            if(isReset){
                e.target.reset() // reset after alert   
            }

        }, false)
    }
}

/**
 *  Toogle textarea icon color
 * 
 *  - Change the textarea icon color based on the <textarea></textarea> focus & blur events 
 * 
 * @param string the HTML textarea markup id selector
 * @param string the HTML icon markup id selector
 * 
 * @author Drozerah https://github.com/Drozerah
 */
const toogleIconColor = (id, iconId) => {
    
    if(document.getElementById(id) && document.getElementById(iconId)){

        const elem = document.getElementById(id)
        const icon = document.getElementById(iconId)

        elem.addEventListener('focus', () => {
            icon.style.color = '#00e0a5'   
        })
        elem.addEventListener('blur', () => {
            icon.style.color = 'inherit'   
        })
    }
}

/**
 * Modules export
 */
export { 
    initSelect,
    submitForm,
    initCharacterCounter,
    toogleIconColor
}
