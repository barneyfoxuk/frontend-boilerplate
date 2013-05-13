var App =  App || {};

App.Misc = (function () {

    var privateMethod = function() {
        //do something private
    };

    var publicMethod = function() {
        //do something publicly accessable
    };

    var init = function() {
        //initiate the module
    };

    return {
        init:init,
        publicMethod: publicMethod
    };

}());
var App = App || {};


App.settings = {
    aSetting: true
};


App.init = function() {

    var router = {
        all:        [
            //module methods to run everytime
            App.Misc
        ],
        index:      [
            //module methods to run on page "index"
        ]
    };


    /* you shouldn't need to edit the code bolow */

    var currentPage = $('body').attr('data-page');

    var modules = router.all;

    if(router[currentPage])
        modules = modules.concat(router[currentPage]);

    $.each(modules, function(i,n) {
        n.init.call();
    });


};


$(function() {
    App.init();
});
