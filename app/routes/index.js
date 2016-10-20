module.exports = function(ngModule) {
    ngModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html'
            })
            .state('account', {
                url: '/account',
                templateUrl: '../views/account.html'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: '../views/settings.html'
            });
    })
};