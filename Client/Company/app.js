(function() {


    angular.module('ih-app', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'cp.ngConfirm']);

    // configuring the routing
    function config($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'homeVm'
            })
            .when('/myProfile', {
                templateUrl: '/myProfile/myProfile.view.html',
                controller: 'myProfileCtrl',
                controllerAs: 'myProfileVm'
            })
            .when('/addNew', {
                templateUrl: '/addNewInternship/addNewInternship.view.html',
                controller: 'addNewCtrl',
                controllerAs: 'addNewVm'
            })
            .when('/reviewInternships', {
                templateUrl: 'reviewInternships/reviewInternships.view.html',
                controller: 'reviewCtrl',
                controllerAs: 'reviewVm'
            })
            .when('/reviewInternships/:internshipId', {
                templateUrl: '/internshipDetails/internshipDetails.view.html',
                controller: 'internshipDetailsCtrl',
                controllerAs: 'detailsVm'
            })
            .otherwise({ redirectTo: '/' });

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);


    }

    angular
        .module('ih-app')
        .config(['$routeProvider', '$locationProvider', config]);


})();