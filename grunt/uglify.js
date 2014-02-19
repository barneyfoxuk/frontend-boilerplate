// Minify JS files
module.exports = {
    // Libraries (jQuery, Zepto, etc.)
    lib: {
        options: {
            sourceMap: 'lib.map',
            sourceMapRoot: '/'
        },
        src: [
            'components/jquery/jquery.js'
        ],
        dest: 'js/lib.js'
    },


    // Extensions (Backbone Marionette, jQuery Mobile)
    ext: {
        options: {
            sourceMap: 'ext.map',
            sourceMapRoot: '/'
        },
        src: [

        ],
        dest: 'js/ext.js'
    },


    // Polyfills (Console, ES5, ES6, etc.)
    polyfills: {
        options: {
            sourceMap: 'polyfills.map',
            sourceMapRoot: '/'
        },
        src: [
            'components/es5-shim/es5-sham.js',
        ],
        dest: 'js/polyfills.js'
    },


    // Application (Views, Models, Routers, etc.)
    app: {
        options: {
            sourceMap: 'app.map',
            sourceMapRoot: '/'
        },
        src: [
            'js/app/*.js'
        ],
        dest: 'js/app.js'
    }
};
