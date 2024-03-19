const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const champController = require('../controllers/champion.controllers');

router.get('/',isAuth, champController.get_root);
router.post('/champion',isAuth, champController.post_champion);
router.get('/champion/:champion_id', isAuth, champController.get_root);
router.get('/create', isAuth, champController.get_create);


module.exports = router;
