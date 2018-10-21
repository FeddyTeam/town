const typography = require('postcss-typography') 
const lincoln = require('typography-theme-lincoln')

module.exports = {
    plugins: [
        require('postcss-preset-env'),
        require('autoprefixer'),
        typography(lincoln),
    ],
    
}
