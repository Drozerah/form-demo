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
const initCharacterCounter = name => {

    document.addEventListener('DOMContentLoaded', () => {

        if(document.getElementById(name)){

            const elem = document.getElementById(name)
            return  M.CharacterCounter.init(elem)
        }
    })
}

/**
 * Check if all inputs/texterea are valid then activate/disable the submit button
 * 
 * - if an input or the textarea is not valid then disable the form submit button
 * - else if all elements are valid then activate the submit button
 * - we use the MutationObserver interface to observe the form class mutations
 * 
 * @doc https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
 * 
 * @param string the attribute name value
 */
const validateForm = name => {
    
    const form = document.forms[name]
    const btn = form.submit
    const validateElems = document.getElementsByClassName("validate")

    // convert inputs collection to a type array
    const array = Array.from(validateElems)

    // push textarea into the array
    array.push(form.textarea)

    /**
     * MUTATION OBSERVER
     */

    // Select the node that will be observed for mutations
    const targetNode = form

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true }

    // Callback function to execute when mutations are observed
    const callback = mutationsList => {

        for(let mutation of mutationsList) {

            if(mutation.target.name && mutation.target.name.match(/^(name|email|age|textarea)$/)){
        
                // console.log( // ~~DEV-DEBUG
                //     `=> ${mutationsID}
                //     => new mutation\n
                //     => target : ${mutation.target}
                //     => target.name : ${mutation.target.name}
                //     => target.name.classList : ${mutation.target.classList.value}
                //     => areValid ? ${array.every( elem => elem.classList[1] != "invalid")}`
                // )

                if(array.every( elem => elem.classList[1] != "invalid")){

                    btn.disabled = false // true condition => the submit is not disabled
                }else{ //false

                    btn.disabled = true // else, the submit is disabled
                }
            }           
        }
    }

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback)

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config)
}

/**
 * 
 * Textarea events management
 * 
 * - switch textarea icon color according to text length
 * - switch textarea icon color according to validity
 * - show/hide error message
 * 
 * @param string the HTML markup id selector
 * 
 * @author Drozerah https://github.com/Drozerah
 */
const validateFormMessage = name => {

    const textarea = document.forms[name].textarea
    const colorRed = '#F44336'
    const primaryColor = '#00e0a5'
    const icon = document.getElementById('textarea-icon')
    const errorElm = document.getElementById('textarea-error')
    const errorMsg = "You have reached the maximum number of characters!"
    
    textarea.addEventListener("input", e => {

        const target = e.target
        const maxLength = target.dataset.length
        const currentLength = target.value.length

        if (currentLength > maxLength) {
            errorElm.innerText = errorMsg
            errorElm.style.display = 'inline' // show
            icon.style.color = colorRed // red
        }else{
            errorElm.style.display = 'none' // hide
            errorElm.innerText = "" // empty text
            icon.style.color = primaryColor // primary color
        }
    })
  
    textarea.addEventListener('focus', e => {
            
        if(e.target.classList[1]){ // has class invalid
            icon.style.color = colorRed // red 
        }else{
            icon.style.color = primaryColor // primary color  
        }
    })

    textarea.addEventListener('blur', e => {

        if(e.target.classList[1]){ // has class invalid
            icon.style.color = colorRed // red color 
        }else{
            icon.style.color = 'inherit' // default color
        } 
    })
}

/**
 * Form Submission 
 * 
 * - disable enter key on form except textarea
 * - ask confirmation befor submission
 * - reset the form after submission 
 * 
 * @params string the attribute name value
 * @author Drozerah https://github.com/Drozerah
 */
const submitForm = name => {

    const form = document.forms[name]

    /**
     * Disable Enter Key On Form except Textarea
     */
    form.addEventListener('keypress', (event) => {

        if (event.which == 13 && event.target.nodeName  != "TEXTAREA") {
            event.preventDefault()
            return false
        }
    })

    /**
     * Form Submission 
     */
    form.addEventListener('submit', (event) => {

        event.preventDefault()

// console.log('===========')
// console.log(form.elements)
// console.log('===========')

        /**
         * CONFIRMATION
         */

        confirm("Confirmation?")

        /** 
         * WORKING WITH FORM DATA
        */

// const result = `
// name: ${form.elements.name.name}\n
// value: ${form.elements.name.value}`

// alert(result)

//         // form data object
//         const formData = new FormData(form)
//         // get all form elements
//         console.log(form.elements)
//         // get first form element
//         console.log(form.elements[0])
//         // get first form element value
//         console.log(`value: ${form.elements[0].value}`)
//         // get first form element name
//         console.log(`name attribut: ${form.elements[0].id}`)
//         console.log(`name attribut: ${form.elements[0].name}`)

//         // FormData.append()
//         // appends a new value onto an existing key inside
//         // @{mdn} https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
//         formData.append(form.elements[0].name, form.elements[0].value)

//         // FormData.get()
//         // returns the first value associated with a given key from within a FormData object
//         // @{mdn} https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
//         console.log(formData.get(form.elements[0].name))

//         // FormData.entries()
//         // going through all key/value pairs contained in the object
//         // @{mdn} https://developer.mozilla.org/fr/docs/Web/API/FormData/entries 
//         for(var pair of formData.entries()) {
//             console.log(pair[0]+ ', '+ pair[1]); 
//         }


        /**
         * FORM RESET
        */

        // remove focus state on any input fields
        const inputs = document.querySelectorAll('input')
        inputs.forEach( input => input.blur())

        // resize textarea height
        form.textarea.style.height = "21px"
    
        // remove existing Character Counter inner Text
        const counterEl = form.textarea.M_CharacterCounter.counterEl
        counterEl.innerText = ""
        
        // reset the form
        form.reset()
    })   
}

/**
 * Modules export
 */
export { 
    initSelect,
    initCharacterCounter,
    validateForm,
    validateFormMessage,
    submitForm
}
