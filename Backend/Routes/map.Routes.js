const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth.middleware');
const mapController = require('../Controller/map.Controller');
const { query } = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapController.getCoordinates
);

module.exports = router;