const express = require('express');
const router = express.Router();
const champController = require('../controllers/champion.controllers');

router.get('/', champController.get_root);

router.get('/create', champController.get_create);

router.get('/champion', champController.post_champion);

                    

module.exports = router;