"use strict";
var express = require("express");
var db_1 = require("../db");
var mongodb = require("mongodb");
var router = express.Router();
router.get('/', function (req, res) {
    db_1.default.db.collection('cars').find().toArray().then(function (cars) {
        res.json(cars);
    });
});
router.post('/', function (req, res) {
    var car = req.body;
    car._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection("cars").save(req.body).then(function (newCar) {
        res.json(newCar);
    });
});
router.delete('/:id', function (req, res) {
    var carId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('cars').remove({ _id: carId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
