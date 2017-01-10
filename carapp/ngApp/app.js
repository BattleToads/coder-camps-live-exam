var carapp;
(function (carapp) {
    angular.module('carapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(carapp || (carapp = {}));
