var SkeletonApp = SkeletonApp || {};


SkeletonApp.settings = {
    aSetting: true
};


SkeletonApp.init = function() {

        SkeletonApp.ExampleModule.init();

};


$(function() {
    SkeletonApp.init();
});

var SkeletonApp =  SkeletonApp || {};

SkeletonApp.ExampleModule = (function () {

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