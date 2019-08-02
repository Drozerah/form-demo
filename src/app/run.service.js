/**
 * MODULES
 */
import { submit } from './utils/form.submit.service.js'
import { initSelect } from './utils/init.select.service.js'
/**
 * Run the application
 */
const run = () => {

    submit()
    initSelect()

}

export { run }