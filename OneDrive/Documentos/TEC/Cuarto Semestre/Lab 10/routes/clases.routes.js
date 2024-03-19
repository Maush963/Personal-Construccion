const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/canView');
const canCreate = require('../util/canCreate');

const champController = require('../controllers/champion.controllers');

router.get('/',isAuth, canView, canCreate, champController.get_root);
router.post('/champion',isAuth, champController.post_champion);
router.get('/champion/:champion_id', isAuth, canView, champController.get_root);
router.get('/create', isAuth, canCreate, champController.get_create);


module.exports = router;
