// Copy files
module.exports = {
    jsLib: {
        files: [
            {
                expand: false,
                src: ['lib.map'],
                dest: 'js/lib.map',
                filter: 'isFile'
            }
        ]
    },

    jsExt: {
        files: [
            {
                expand: false,
                src: ['ext.map'],
                dest: 'js/ext.map',
                filter: 'isFile'
            }
        ]
    },

    jsPolyfills: {
        files: [
            {
                expand: false,
                src: ['polyfills.map'],
                dest: 'js/polyfills.map',
                filter: 'isFile'
            }
        ]
    },


    jsApp: {
        files: [
            {
                expand: false,
                src: ['app.map'],
                dest: 'js/app.map',
                filter: 'isFile'
            }
        ]
    }
};
