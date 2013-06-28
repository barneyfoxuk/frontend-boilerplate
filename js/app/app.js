var Application = _.extend({
    Collection: {},
    Model: {},
    View: {},
    Router: {}
}, Backbone.Events);



Application.on('initialize', function() {
    // Start history tracking
    Backbone.history.start({
        root: '/',
        pushState: false,
        hashChange: true
    });
});


// Custom initializer
Application.on('initialize', function() {
    // console.log('configure');
});



$(function(){
    Application.trigger('initialize');
});
