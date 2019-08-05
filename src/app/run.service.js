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
    formService.validateForm("form")
    formService.validateFormMessage("form")
    formService.submitForm("form")
}

export { run }