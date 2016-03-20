var angular = require('angular');
var material = require('angular-material');
var ngModule = angular.module('trappedAngular', [
    'ngMaterial'
]);
ngModule.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('indigo');
});

require('./directives')(ngModule);
require('./controllers')(ngModule);