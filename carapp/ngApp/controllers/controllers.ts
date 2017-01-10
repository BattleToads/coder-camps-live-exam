namespace carapp.Controllers {

    export class HomeController {
      public cars;

      public deleteCar(id) {
        this.carService.deleteCar(id).then(() => {
          this.$window.location.reload();
        })
      }
      constructor(
        private carService: carapp.Services.CarService,
        public $window,
        public $state,
        public $location
      )
      {
        this.cars = this.carService.getCars();
      }

    }



    export class AddCarController {
      public car;

      public addCar() {
        this.carService.saveCar(this.car).then(() => {
          this.$state.go('Home');
        })

      }

      constructor(
        private carService: carapp.Services.CarService,
        public $state
      )
      {

      }
    }


    export class EditCarController {
      public car;
      public id;

      public editCar() {
        this.car._id = this.id;
        this.carService.saveCar(this.car).then(() => {
          this.$state.go('Home');
        })
      }
      constructor(
        private carService: carapp.Services.CarService,
        public $state,
        public $stateParams
      )
      {
        if($stateParams) {
          this.id = $stateParams['id'];
        }
      }

    }




}
