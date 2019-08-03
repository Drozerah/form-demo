/**
 * MODULES
 */

import * as formService from './utils/form.service.js'

/**
 * Run the application
 */
const run = () => {

    formService.initSelect()
    formService.initCharacterCounter('textarea')
    formService.toogleIconColor('textarea', 'textarea-icon')
    formService.submitForm('survey-form', true)

}

export { run }