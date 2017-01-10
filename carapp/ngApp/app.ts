namespace carapp {

    angular.module('carapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: carapp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('Add', {
                url: '/addCar',
                templateUrl: '/ngApp/views/addCar.html',
                controller: carapp.Controllers.AddCarController,
                controllerAs: 'vm'
            })
            .state('Edit', {
                url: '/editCar/:id',
                templateUrl: '/ngApp/views/editCar.html',
                controller: carapp.Controllers.EditCarController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
