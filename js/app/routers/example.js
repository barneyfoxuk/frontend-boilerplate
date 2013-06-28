Application.Router.Example = Backbone.Router.extend({
    routes: {
        "example": "example"
    },


    example: function() {
        var widget = new Application.View.Widget();

        widget.on('widget:action', function(){
            console.log('widget action called, call another view');
        });
    }
});