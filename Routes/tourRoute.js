const express = require('express');
const tourRoutes = require('./../controllers/tourController');

const router = express.Router();

// router.param('id', tourRoutes.checkID);

router
  .route('/')
  .get(tourRoutes.getAllTours)
  .post(tourRoutes.checkBody, tourRoutes.createTour);
router
  .route('/:id')
  .get(tourRoutes.getTour)
  .patch(tourRoutes.updateTour)
  .delete(tourRoutes.deleteTour);

module.exports = router;
