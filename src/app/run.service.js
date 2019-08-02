/**
 * MODULES
 */
import { submit } from './utils/form.submit.service.js'
import { initCharacterCounter } from './utils/init.characterCounter.service'
import { initSelect } from './utils/init.select.service.js'
/**
 * Run the application
 */
const run = () => {

    submit()
    initSelect()
    initCharacterCounter()

}

export { run }