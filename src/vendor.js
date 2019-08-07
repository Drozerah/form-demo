/**
 * 3rd party libraries import
 */
/**
 * Materialize.js Components
 */

// Materialize global import
// import "materialize-css"

// Use Materialize as modular components
// @{link} https://github.com/Dogfalo/materialize/issues/5958#issuecomment-439634071

// Components
import "materialize-css/js/cash"

// import "materialize-css/js/component"
import "./app/materialize-hacks/js/component" //~~ HACK

import "materialize-css/js/global"
import "materialize-css/js/anime.min.js"

// import "materialize-css/js/modal"
import "./app/materialize-hacks/js/modal" //~~ HACK

import "materialize-css/js/waves"
import "materialize-css/js/forms"

// import "materialize-css/js/select"
import "./app/materialize-hacks/js/select" //~~ HACK

// import "materialize-css/js/dropdown"
import "./app/materialize-hacks/js/dropdown" //~~ HACK

// import "materialize-css/js/autocomplete"
// import "materialize-css/js/buttons"
// import "materialize-css/js/cards"
// import "materialize-css/js/carousel"

// import "materialize-css/js/characterCounter"
import "./app/materialize-hacks/js/characterCounter" //~~ HACK

// import "materialize-css/js/chips"
// import "materialize-css/js/collapsible"
// import "materialize-css/js/datepicker"
// import "materialize-css/js/materialbox"
// import "materialize-css/js/parallax"
// import "materialize-css/js/pushpin"
// import "materialize-css/js/range"
// import "materialize-css/js/scrollspy"
// import "materialize-css/js/sidenav"
// import "materialize-css/js/slider"
// import "materialize-css/js/tabs"
// import "materialize-css/js/tapTarget"
// import "materialize-css/js/timepicker"
// import "materialize-css/js/toasts"
// import "materialize-css/js/tooltip"


// Webpack Dependency Management (import all components from directory)
//      context module API  
// @{doc} https://webpack.js.org/guides/dependency-management/#context-module-api
// @{link} https://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
// function importAll (r) {
//     r.keys().forEach(r)
//     clg(r)
//   }
// importAll(require.context('materialize-css/js/', true, /\.js$/));