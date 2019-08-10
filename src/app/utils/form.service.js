/**
 * MODULES
 */

import * as filters from './filters.service.js'

/**
 * Materialize Components Initialization
 */
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
 * Materialize Modal Initialization
 * 
 * - Initialize all Materialize Modals elements
 * 
 * @doc https://materializecss.com/modals.html
 * 
 * @returns new FormSelect instance
 * 
 * @author Drozerah https://github.com/Drozerah
 */
const initModal = () => {

    document.addEventListener('DOMContentLoaded', () => {

        const elems = document.querySelectorAll('.modal')

        const options = {
            dismissible: false, // Allow modal to be dismissed by keyboard or overlay click
            preventScrolling: true // Prevent page from scrolling while modal is open
        }

        // var instances = M.FormSelect.init(elems)
        return M.Modal.init(elems, options)
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

    // get the form element
    const form = document.forms[name]

    // Disable Enter Key On Form Except Textarea
    form.addEventListener('keypress', (event) => {

        if (event.which == 13 && event.target.nodeName  != "TEXTAREA") {
            event.preventDefault()
            return false
        }
    })

    /**
     * FORM SUBMISSION EVENT
     */
    form.addEventListener('submit', (event) => {

        event.preventDefault()

        /** 
         * WORKING WITH FORM DATA
        */

        // capitalize name input
        form.elements.name.value = filters.capitalize(form.elements.name.value)

        /* FormData Object */

        // create new formData Object
        const formData = new FormData(form)

        // create HTML ul element that will show the form user data 
        const modalUserFormData = () => {

            // modal user content element
            const markup = document.getElementById('modal-user-form-data')
            const array = []

            // loop through the formData Object and create li HTML markup dynamically
            for(let [key, value] of formData.entries()) {

                // array.push(`<li>${key}: ${value}</li>`)
                // push structured markup content to the array
                array.push(`<li>${key}: ${value === null || value === undefined || value == `` ? `none` : value}</li>`)
            }
            // create ul HTML markup then inject structured markup content from iteration
            const ul = `<ul>${array.map( elem => elem ).join('')}</ul>`
            // append user data to the modal user content element
            markup.innerHTML = ul 
        }

        /**
         * ASK FOR CONFIRMATION WITH MODAL
         */

        // get modal element
        const modal1 = document.getElementById('modal1')
        // get modal plugin instance for modal1
        const modal1Instance = M.Modal.getInstance(modal1)

        /* MODAL METHODS OPEN & CLOSE */

        // OPEN MODAL 
        modal1Instance.open(
            // lauch callback when modal1 is opened
            modalOpenCallback() // Hoisting
        )

        // callback when modal1 is opened
        function modalOpenCallback(){ 

            console.warn(`modal ${modal1Instance.id} is opened!`) 
            
            // Show user data into modal1
            modalUserFormData()
            
            /** MODAL EVENTS */

            /*** ABORTED CONFIRMATION */

            // get confirmation close btn
            const modal_abort_btn = document.getElementById('modal-abort')

            // CLOSE MODAL
            // modal refuse confirmation button click event
            modal_abort_btn.addEventListener('click', (e) => {

                e.preventDefault()

                console.warn('confirmation abortted!')

                // empty user data in modale HTML markup
                document.getElementById('modal-user-form-data').innerHTML = ""
                // close modal1
                modal1Instance.close()

                console.warn(`modal ${modal1Instance.id} is closed!`)
            })

            /** MODAL EVENTS */

            /*** CONFIRMATION CONFIRMED (close modal & add overlay spinner) */

            // get confirmation btn
            const modal_confirm_btn = document.getElementById('modal-confirm')

            // modal accept confirmation button click event
            modal_confirm_btn.addEventListener('click', (e) => {

                e.preventDefault()

                console.warn('confirmation accepted!')

                // close modal1
                modal1Instance.close()

                console.warn(`modal ${modal1Instance.id} is closed!`)

                /* ADD OVERLAY SPINNER TO FORM (prepare AJAX POST request to server)*/ 

                // get main markup
                const main = form.parentNode 
                // add class ajax to it
                main.classList.add('ajax')

                if (main.classList.contains("ajax")) {

                    /**
                     * INJECT SPINNER INTO THE DOM WITHIN A PRELOADER ELEMENT
                     */
                    // create preloader HTML element 
                    const preloader = document.createElement('div')
                    // add class to preloader element
                    preloader.classList = 'preloader'
                    // spinner markup
                    const spinner = `<div class="preloader-wrapper big active"><div class="spinner-layer spinner-red-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>`
                    // add inject spinner to preloader element
                    preloader.innerHTML = spinner
                    // inject preloader into main markup
                    main.appendChild(preloader)

                    console.warn('spinner is on!') 
    
                    /**
                     * SIMULATE REQUEST
                     */
                    // console.warn('simulate AJAX request!')

                    // #
                    // setTimeout(() => {
                    //     // remove class ajax
                    //     main.classList.remove('ajax')
                    //     // hide preloader
                    //     preloader.setAttribute("style", "display: none")
                    //     // remove preloader
                    //     preloader.remove()
                    //     // 
                    //     console.warn('spinner is removed!')
                    // },1500)

                    // #TODO add on submit only
                    // #ISSUE => the append method in not accepted by netlify server
                    // // get date
                    // const date = moment(Date.now()).format('MM-DD-YYYY - h:mm:ss a')
                    // // append date
                    // formData.append("date", date)
                    // // append location
                    // formData.append("posted from", window.location.origin)

                    console.warn('before request!')

                    /**
                     * MAKE FETCH POST REQUEST 
                     */
                   
                    /** CLEAN SPINNER */
                    const cleanSpinnerModal = () => {
                        /**
                         * REMOVE PRELOADER
                        */
                        // remove class ajax
                        main.classList.remove('ajax')
                        // hide preloader
                        preloader.setAttribute("style", "display: none")
                        // remove preloader from the DOM
                        preloader.remove()
                        // 
                        console.warn('spinner is removed!')

                        /**
                         * CLEAN MODAL
                        */
                        // empty user data in modale HTML markup
                        document.getElementById('modal-user-form-data').innerHTML = ""
                        console.warn('modal is empty!')
                    }
                    
                    /** 
                     * HANDLING FEEDBACK ALERT MESSAGES
                     * 
                     * - insert alerts messages into the DOM according tho the fetch() object response success or error
                     * 
                     * @param object the fetch method object response
                     * @returns alert message injected into the DOM
                     */
                    const alertMessage = (res) => {
                        // remove existing alert element
                        if(document.getElementsByClassName('alert')[0]){
                            document.getElementsByClassName('alert')[0].remove()
                        }
                        
                        // create new alert element
                        const alertElem = document.createElement('div')
                        alertElem.classList.add('alert')
                        // add role attribute
                        alertElem.setAttribute('role', 'alert')
                        
                        if (!res.ok) {

                            // add class
                            alertElem.classList.add('alert-danger')
                            
                            // add text content
                            // alertElem.innerText = `ERROR ${res.stack}`
                            alertElem.innerText = `${res}`
                                
                        }
                        else {
                            
                            // add class
                            alertElem.classList.add('alert-success')
                            // add text content
                            alertElem.innerText = `SUCCESS: ${res.ok} - status ${res.status}`
               
                        }
                        // inject .alert-danger into main element as first child
                        const main = document.querySelector('main') // parent element
                        const descriptionChild = main.firstChild // existing first child
                        main.insertBefore(alertElem, descriptionChild) // insert befor first child

                        console.warn('alert message inserted into the DOM!')
                    }

                    /** HANDLING REQUEST ERROR */
                    const handleErrors = (response) => {

                        if (!response.ok) {
                            
                            //** WORKING WITH ERROR RESPONSE */

                            alertMessage(response)

                            console.error(`Request failed!`)
                            throw Error(response.statusText)
                        }
                        return response
                    }
                    

                    /** MAKE REQUEST */
                    fetch(form.getAttribute('action'), {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        body: new URLSearchParams(formData).toString()
                    })
                    .then(handleErrors) /* ERROR */
                    .then( response => { /* SUCCESS */ 

                        console.warn('succes POST request!')

                        alertMessage(response)

                        //* REMOVE PRELOADER & CLEAN MODAL
                        cleanSpinnerModal()

                        /**
                         * CLEAN FORM
                        */
                        // remove focus state on any input fields
                        const inputs = document.querySelectorAll('input')
                        inputs.forEach( input => input.blur() )

                        // resize textarea height to original size
                        form.textarea.style.height = "21px"

                        // remove existing Characters Counter inner Text on textarea
                        const counterEl = form.textarea.M_CharacterCounter.counterEl
                        counterEl.innerText = ""

                        /**
                         * FORM RESET
                        */               
                        // reset the form
                        form.reset()
                        console.warn('The form is reset!')

                    })
                    .catch(error => { /* ERROR */
                        alertMessage(error)
                        console.error(`Error stack: ${error.stack}`)
                        console.warn('request aborted!')
                        //* REMOVE PRELOADER & CLEAN MODAL
                        cleanSpinnerModal()
                    })
                }

            })
        }

    })   
}

/**
 * Modules export
 */
export { 
    initSelect,
    initCharacterCounter,
    initModal,
    validateForm,
    validateFormMessage,
    submitForm
}
