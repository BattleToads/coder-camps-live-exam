var carapp;
(function (carapp) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.$resource = $resource;
                this.CarResource = $resource('/api/cars/:id');
            }
            CarService.prototype.saveCar = function (car) {
                return this.CarResource.save(car).$promise;
            };
            CarService.prototype.getCars = function () {
                return this.CarResource.query();
            };
            CarService.prototype.deleteCar = function (id) {
                return this.CarResource.delete({ id: id }).$promise;
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('carapp').service('carService', CarService);
    })(Services = carapp.Services || (carapp.Services = {}));
})(carapp || (carapp = {}));
