namespace carapp.Services {
      export class CarService {
        public CarResource;

        public saveCar(car) {
          return this.CarResource.save(car).$promise;
        }

        public getCars() {
          return this.CarResource.query();
        }

        public deleteCar(id) {
          return this.CarResource.delete({id: id}).$promise;
        }

        constructor(
          private $resource
        )
        {
          this.CarResource = $resource('/api/cars/:id');
        }
      }

      angular.module('carapp').service('carService', CarService);
    }
