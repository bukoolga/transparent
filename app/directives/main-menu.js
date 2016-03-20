module.exports = function(ngModule) {
    ngModule.directive('mainMenu', function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/main-menu.html'
        };
    });
};