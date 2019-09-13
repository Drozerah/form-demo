# Form Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f28dc73-6504-4674-9452-1559084ca72f/deploy-status)](https://app.netlify.com/sites/form-demo/deploys)

> The "Form Demo" page is my work for the "Build a Survey Form" challenge for the freeCodeCamp responsive web design certification

![form demo image](https://raw.githubusercontent.com/Drozerah/freeCodeCamp-work/master/Responsive_Web_Design_Certification/Responsive_Web_Design_Projects/Build_a_Servey_Form/img/form-demo.png)

- Standards:
    - JavaScript ES6
    - HTML5 
    - CSS 3 
        - Responsive Web Design
            - Media Queries
        - Grid Layout
        - FlexBox
        - Compilation
            - autoprefixer
            - postcss
            - purgecss
    - SCSS
        - Transpilation
            - Sasslib
- Bundler:
    - Webpack 4
        - more about the basic [Webpack configuration I've created](https://github.com/Drozerah/webpack-4-configuration) and utilized for this project
- 3rd party libraries import:
    - Materialize CSS 
        - only JS and SCSS components required for this project are included into the final bundle 
        - the bundle size is optimized with purgecss according to a white list filter
    - [Materialize Alerts SCSS component](https://github.com/Drozerah/materialize-css-alerts)
        - a Materialize-css add-on that I've coded for this project 
- Deployement: 
    - netlify
    - https://form-demo.netlify.com
                            
- Software: 
    - VScode
    - Node.js
    - Git