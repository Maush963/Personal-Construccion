const express = require('express');
const router = express.Router();
const champController = require('../controllers/champion.controllers');

router.get('/', champController.get_root);
router.post('/champion', champController.post_champion);
router.get('/create', champController.get_create);


module.exports = router;