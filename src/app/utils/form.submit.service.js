/**
 * Return an alert when the form is submitted 
 * 
 * Note: this function disable the form default behavour in the browser
 * 
 * @returns javascript alert prompt
 * 
 */
const submit = () => {

    return document.getElementById('survey-form').addEventListener('submit', (e) => {

        e.preventDefault()
        alert('Submited !')
        document.getElementById("survey-form").reset();

    }, false)

}

export { submit }
