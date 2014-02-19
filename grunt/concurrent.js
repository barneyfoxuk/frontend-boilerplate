// Run tasks concurrently
module.exports = {
    default: [
        'js',
        'css',
        'img'
    ],

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
