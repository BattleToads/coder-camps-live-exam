import * as express from 'express';
import databse from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

// getCars
router.get('/', (req, res) => {
  databse.db.collection('cars').find().toArray().then((cars) => {
    res.json(cars);
  })
});

//Add
router.post('/', (req, res) => {
  let car = req.body;
  car._id = new mongodb.ObjectID(req.body._id);
  databse.db.collection("cars").save(req.body).then((newCar) => {
    res.json(newCar);
  })
})

//deleteCar

router.delete('/:id', (req, res) => {
  let carId = new mongodb.ObjectID(req.params['id']);

  databse.db.collection('cars').remove({_id:carId}).then(() => {
    res.sendStatus(200);
  })
})



export default router;
