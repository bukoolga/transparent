module.exports = function(ngModule) {
    ngModule.directive('siteHeader', function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/site-header.html'
        };
    });
};