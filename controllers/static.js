var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../js'))
router.use(express.static(__dirname + '/../layouts'))

router.get('/', function (req, res) {

  var path = require('path');
  res.sendFile(path.resolve(__dirname +'/../layouts/app.html'));
})

module.exports = router