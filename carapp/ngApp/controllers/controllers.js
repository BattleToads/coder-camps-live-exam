var carapp;
(function (carapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(carService, $window, $state, $location) {
                this.carService = carService;
                this.$window = $window;
                this.$state = $state;
                this.$location = $location;
                this.cars = this.carService.getCars();
            }
            HomeController.prototype.deleteCar = function (id) {
                var _this = this;
                this.carService.deleteCar(id).then(function () {
                    _this.$window.location.reload();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddCarController = (function () {
            function AddCarController(carService, $state) {
                this.carService = carService;
                this.$state = $state;
            }
            AddCarController.prototype.addCar = function () {
                var _this = this;
                this.carService.saveCar(this.car).then(function () {
                    _this.$state.go('Home');
                });
            };
            return AddCarController;
        }());
        Controllers.AddCarController = AddCarController;
        var EditCarController = (function () {
            function EditCarController(carService, $state, $stateParams) {
                this.carService = carService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                if ($stateParams) {
                    this.id = $stateParams['id'];
                }
            }
            EditCarController.prototype.editCar = function () {
                var _this = this;
                this.car._id = this.id;
                this.carService.saveCar(this.car).then(function () {
                    _this.$state.go('Home');
                });
            };
            return EditCarController;
        }());
        Controllers.EditCarController = EditCarController;
    })(Controllers = carapp.Controllers || (carapp.Controllers = {}));
})(carapp || (carapp = {}));
