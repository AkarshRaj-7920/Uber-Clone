const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../Controller/ride.controller')
const authMiddleware = require('../Middleware/auth.middleware')

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid Vehicle Type'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup point'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination point'),
    rideController.getFare
)

module.exports = router;
