// Minify JS files
module.exports = {
    // Libraries (jQuery, Zepto, etc.)
    lib: {
        options: {
            sourceMap: true,
        },
        src: [
            'components/jquery/jquery.js'
        ],
        dest: 'js/lib.js'
    },


    // Extensions (Backbone Marionette, jQuery Mobile)
    ext: {
        options: {
            sourceMap: true,
        },
        src: [
            'components/jquery-cookie/jquery.cookie.js'
        ],
        dest: 'js/ext.js'
    },


    // Polyfills (Console, ES5, ES6, etc.)
    polyfills: {
        options: {
            sourceMap: true,
        },
        src: [
            'components/es5-shim/es5-sham.js',
        ],
        dest: 'js/polyfills.js'
    },


    // Application (Views, Models, Routers, etc.)
    app: {
        options: {
            sourceMap: true,
        },
        src: [
            'js/app/*.js'
        ],
        dest: 'js/app.js'
    }
};
