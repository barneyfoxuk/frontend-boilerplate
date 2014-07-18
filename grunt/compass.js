// Compile SCSS files with Compass
module.exports = {
    cssApp: {
        options: {
            sassDir: 'css/scss',
            cssDir: 'css',
            debugInfo: false,
            noLineComments: true,
            environment: 'production',
            outputStyle: 'compressed'
        }
    }
};
