module.exports = function(ngModule) {
    ngModule.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'index.html'
            })
    })
};