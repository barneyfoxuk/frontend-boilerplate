/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        meta: {
            version: '0.1.0',
            banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://PROJECT_WEBSITE/\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'YOUR_NAME; Licensed MIT */'
        },

        lint: {
            files: ['grunt.js', 'js/app.js', 'js/app/*.js']
        },

        /* Below here is where you edit: */
        concat: {
            lib: {
                src: [
                    'components/lib/jquery/jquery-1.8.2.js'
                ],
                dest: 'js/lib.js'
            },
            polyfills: {
                src: [
                    'components/polyfills/console.log.js'
                    //'components/polyfills/ie7.Array.indexOf.js',
                    //'components/polyfills/jquery.cssHooks.backgroundPosition.js'
                ],
                dest: 'js/polyfills.js'
            },
            ext: {
                src: [

                ],
                dest: 'js/ext.js'
            },
            app: {
                src: [
                    'js/app/*.js'
                ],
                dest: 'js/app.js'
            }
        },
        /* don't edit below here */

        min: {
            lib: {
                src: ['js/lib.js'],
                dest: 'js/lib.min.js'
            },
            polyfills: {
                src: ['js/polyfills.js'],
                dest: 'js/polyfills.min.js'
            },
            ext: {
                src: ['js/ext.js'],
                dest: 'js/ext.min.js'
            },
            app: {
                src: ['js/app.js'],
                dest: 'js/app.min.js'
            }
        },

        compass: {
            dev: {
                src: 'css/scss',
                dest: 'css',
                outputstyle: 'expanded',
                linecomments: true,
                forcecompile: true,
                relativeassets: true
            },
            dist: {
                src: 'css/scss',
                dest: 'css',
                outputstyle: 'compressed',
                linecomments: false,
                forcecompile: true,
                relativeassets: true
            }
        },

        // sass: {
        //     dev: {
        //         files: {
        //             'css/style.css': 'css/sass/style.scss'
        //         }
        //     }
        // },

        watch: {
            js: {
                files: ['grunt.js', 'js/app/**/*js', 'components/**/*js'],
                tasks: 'concat lint'
            },
            compass: {
                files: ['css/**/*.scss'],
                tasks: ['compass:dev']
            }
            /*

            ,
            css: {
                files: ['css/scss/*.scss'],
                tasks: 'scss'
            }
            */
        }

    });

    // Default task.
    grunt.registerTask('default', 'concat lint compass:dev');

    // Build distribution version
    grunt.registerTask('deploy', 'concat lint min compass:dist');


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-compass');

};
