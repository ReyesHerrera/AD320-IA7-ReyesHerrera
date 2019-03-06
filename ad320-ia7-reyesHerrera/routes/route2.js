var express = require('express');
var router = express.Router();
var colors = require('../colors.json');

router.get('/:color', function(req, res, next){
  for (var colors in colors.colors){
    if(colors.colors[color].color == req.params.color.toLowerCase()){
      res.send(colors.colors[color]);
    }
  }
  res.status(404).sent('Error 404: color was not found');
});

router.get('/all', function(req, res, next) {
  res.send(colors.colors);
});
module.exports = router;
