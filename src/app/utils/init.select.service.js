/**
 * Materialize select Initialization
 * 
 * Initialize all Materialize <select></select> elements
 * 
 * @doc https://materializecss.com/select.html
 * 
 * @returns select instance
 * 
 */
const initSelect = () => {

    return document.addEventListener('DOMContentLoaded', () => {
        const elems = document.querySelectorAll('select')
        const options = {/* ... */}
        // var instances = M.FormSelect.init(elems)
        return M.FormSelect.init(elems, options)
    })

}

export { initSelect }
