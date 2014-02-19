// Run tasks concurrently
module.exports = {
    js: [
        'js:lib',
        'js:ext',
        'js:polyfill',
        'js:app'
    ],

    css: [
        'css:app',
        'css:lib'
    ]
};
