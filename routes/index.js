var express = require('express');
var router = express.Router();
var server = require("../controllers/server");
var play = require("../controllers/play");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/server',server.page);
router.get('/play',play.page);

module.exports = router;
