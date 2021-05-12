const express = require('express');
const router = express.Router();

// acquiring controllers
const homeController = require('../controllers/home_controller');

// middleware
router.get('/', homeController.getHome);
router.post('/', homeController.postHome);

module.exports = router;
