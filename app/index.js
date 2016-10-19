var angular = require('angular');
var material = require('angular-material');
var route = require('angular-ui-router');
var ngModule = angular.module('transparent', [
    'ngMaterial',
    'ui.router'
]);
ngModule.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('indigo');
});

require('./directives')(ngModule);
require('./controllers')(ngModule);
require('./routes')(ngModule);