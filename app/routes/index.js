module.exports = function(ngModule) {
    ngModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'index.html'
            })
            .state('home.settings', {
                url: '/settings',
                templateUrl: 'views/settings.html'
            });
    })
};