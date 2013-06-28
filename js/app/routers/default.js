Application.Router.Default = Backbone.Router.extend({
    routes: {
        "": "index"
    },


    index: function() {
        var body = new Application.View.Body();
    }
});