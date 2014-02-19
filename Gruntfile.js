module.exports = function(grunt) {
    // Register default task
    grunt.registerTask('default', [
        'css',
        'js',
        'img'
    ]);


    // CSS
    grunt.registerTask('css', [
        'concurrent:css'
    ]);

    grunt.registerTask('css:app', [
        'compass:cssApp'
    ]);

    grunt.registerTask('css:lib', [
        'cssmin:cssLib'
    ]);


    // JS
    grunt.registerTask('js', [
        'js:lib',
        'js:ext',
        'js:polyfills',
        'js:app'
    ]);

    grunt.registerTask('js:lib', [
        'uglify:lib',
        'copy:jsLib',
        'clean:jsLib'
    ]);

    grunt.registerTask('js:ext', [
        'uglify:ext',
        'copy:jsExt',
        'clean:jsExt'
    ]);

    grunt.registerTask('js:polyfills', [
        'uglify:polyfills',
        'copy:jsPolyfills',
        'clean:jsPolyfills'
    ]);

    grunt.registerTask('js:app', [
        'jshint:app',
        'uglify:app',
        'copy:jsApp',
        'clean:jsApp'
    ]);


    // Images
    grunt.registerTask('img', [
        'imagemin:app'
    ]);



    // Load configuration
    require('load-grunt-config')(grunt);

    // Load tasks
    require('load-grunt-tasks')(grunt);
};
