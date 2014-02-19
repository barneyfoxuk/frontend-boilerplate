// Compile SCSS files with Compass
module.exports = {
    cssApp: {
        options: {
            sassDir: 'css/scss',
            cssDir: 'css',
            debugInfo: true,
            noLineComments: true
        }
    },
    cssAppDist: {
        options: {
            sassDir: 'css/scss',
            cssDir: 'css',
            environment: 'production'
        }
    }
};
