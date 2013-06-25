var App=App||{};App.Misc=function(){var a=function(){},b=function(){};return{init:b,publicMethod:a}}();var App=App||{};App.settings={aSetting:!0},App.init=function(){var a={all:[App.Misc],index:[]},b=$("body").attr("data-page"),c=a.all;a[b]&&(c=c.concat(a[b])),$.each(c,function(a,b){b.init.call()})},$(function(){App.init()});
/*
//@ sourceMappingURL=app.map
*/