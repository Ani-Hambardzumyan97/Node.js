var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(res.type);
  res.send('respond with a resource');
});
/* POST users listing. */
router.post('/', function(req, res, next) {
  console.log(res.type);
  res.send('Time: ', Date.now());
});
/* PUT users listing. */
router.put('/', function(req, res, next) {
  console.log(res.type);
  res.send('Time: ', Date.now());
});
/* DELETE users listing. */
router.delete('/', function(req, res, next) {
  console.log(res.type);
  res.send('Time: ', Date.now());
});

module.exports = router;
