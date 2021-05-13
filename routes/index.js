const express = require('express');
const router = express.Router();

// acquiring routers and controllers
const homeController = require('../controllers/home_controller');

// middleware
router.get('/', homeController.getHome);
router.post('/', homeController.submitForm);

module.exports = router;
