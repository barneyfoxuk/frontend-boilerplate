/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        /* Below here is where you edit: */
        uglify: {
            lib: {
                options: {
                    sourceMap: 'js/lib-source-map.js',
                    sourceMapRoot: '/'
                },
                //array of paths to library js files you are using
                src: [
                    'components/lib/jquery/jquery-1.9.1.js'
                ],
                dest: 'js/lib.js'
            },

            polyfills: {
                options: {
                    sourceMap: 'js/polyfills-source-map.js',
                    sourceMapRoot: '/'
                },
                //array of paths to polyfill js files you are using
                src: [
                    'components/polyfills/console.log.js',
                    'components/polyfills/es5-shim.js'
                    //'components/polyfills/jquery.cssHooks.backgroundPosition.js'
                ],
                dest: 'js/polyfills.js'
            },

            ext: {
                options: {
                    sourceMap: 'js/ext-source-map.js',
                    sourceMapRoot: '/'
                },
                //array of paths to extension (i.e. plugins) js files you are using
                src: [
                    'components/ext/jquery/jquery.easing/jquery.easing.js'
                ],
                dest: 'js/ext.js'
            },

            app: {
                options: {
                    sourceMap: 'js/app-source-map.js',
                    sourceMapRoot: '/'
                },
                src: [
                    'js/app/*.js'
                ],
                dest: 'js/app.js'
            }
        },

        /* you shouldn't need to edit below here */
        jshint: {
            all: [
                'Gruntfile.js',
                'js/app/*.js'
            ]
        },


        compass: {
            dev: {
                options: {
                    sassDir: 'css/scss',
                    cssDir: 'css'
                }
            },
            dist: {
                options: {
                    sassDir: 'css/scss',
                    cssDir: 'css',
                    environment: 'production'
                }
            }
        },

        watch: {
            jsComponentsExt: {
                files: [
                    'components/ext/*.js',
                    'components/ext/**/*.js'
                ],
                tasks: ['uglify:ext']
            },
            jsComponentsLib: {
                files: [
                    'components/lib/*.js',
                    'components/lib/**/*.js'
                ],
                tasks: ['uglify:lib']
            },
            jsComponentsPolyfills: {
                files: [
                    'components/polyfills/*.js',
                    'components/polyfills/**/*.js'
                ],
                tasks: ['uglify:polyfills']
            },
            jsApp: {
                files: [
                    'js/app/**/*.js'
                ],
                tasks: ['jshint', 'uglify:app']
            },
            compass: {
                files: ['css/**/*.scss'],
                tasks: ['compass:dev']
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['jshint', 'uglify', 'compass:dev']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
