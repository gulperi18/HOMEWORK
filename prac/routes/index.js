var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/regis', function(req, res) {

 let a = req.body.dlina;
 let b = req.body.height;

 let plosh = a * b;
 let perim = (a * 2) + (b * 2);

  res.render('reg', { 
    par1: plosh,
    par2: perim
   });
});

//cd homework
module.exports = router;
