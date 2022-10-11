const express = require('express');
const tourControllers = require('../controller/tour.controller');


const router = express.Router();


router
    .route('/')
    .get(tourControllers.getTourData)
    .post(tourControllers.addedTourData)

router
    .route('/trending')
    .get(tourControllers.tourViewsTrend)

router
    .route('/cheapest')
    .get(tourControllers.cheapestLeastPrice)

router
    .route('/:id')
    .get(tourControllers.tourDataById)
    .patch(tourControllers.tourUpdateById)

    
module.exports = router;