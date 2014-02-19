// Watch files for changes
module.exports = {
    // Libraries (jQuery, Zepto, etc.)
    jsLib: {
        files: [
            'components/lib/*.js',
            'components/lib/**/*.js'
        ],
        tasks: [
            'uglify:lib',
            'copy:lib',
            'clean:lib'
        ]
    },

    // Extensions (Backbone Marionette, jQuery Mobile)
    jsExt: {
        files: [
            'components/ext/*.js',
            'components/ext/**/*.js'
        ],
        tasks: [
            'uglify:ext',
            'copy:ext',
            'clean:ext'
        ]
    },

    // Polyfills (Console, ES5, ES6, etc.)
    jsPolyfills: {
        files: [
            'components/polyfills/*.js',
            'components/polyfills/**/*.js'
        ],
        tasks: [
            'uglify:polyfills',
            'copy:polyfills',
            'clean:polyfills'
        ]
    },


    // Application (Views, Models, Routers, etc.)
    jsApp: {
        files: [
            'js/app/**/*.js'
        ],
        tasks: [
            'jshint',
            'uglify:app',
            'copy:app',
            'clean:app'
        ]
    },


    // CSS Files
    cssLib: {
        files: [
            'components/lib/*.css',
            'components/lib/**/*.css',
            'components/lib/**/**/*.css',

            'components/ext/*.css',
            'components/ext/**/*.css',
            'components/ext/**/**/*.css'
        ],
        tasks: ['concat:cssLib'],
        options: {
            livereload: true
        }
    },


    // Compass files
    cssApp: {
        files: ['css/**/*.scss'],
        tasks: ['compass:dev'],
        options: {
            nospawn: true,
            livereload: true
        }
    },


    // Images (jpeg, png, etc.)
    imageApp: {
        files: [
            'img/*.png',
            'img/*.jpg',
            'img/*.jpeg'
        ],
        tasks: [
            'imagemin:all'
        ]
    }
};
