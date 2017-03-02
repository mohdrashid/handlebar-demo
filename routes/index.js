var express = require('express');
var router = express.Router();
//A counter
var num=0;

router.get('/count', function(req, res, next) {
  res.render('countview', { title: 'Counter', count:num++});
});

var arrayVal=[1,2,3];
var tutorialsVal=[{language:'Node.JS',tutor:'Tutor 1'},{language:'JavaScript',tutor:'Tutor 1'},{language:'Android',tutor:'Tutor 2'}];
router.get('/loop', function(req, res, next) {
  res.render('loopview', { title: 'Looping',tutorials:tutorialsVal,array:arrayVal});
  num++;
});


router.get('/condition', function(req, res, next) {
  res.render('conditionview', { title: 'Condition',condition1:true,condition2:false});
  num++;
});

var user={id:1,name:"DroidHat"};
router.get('/js', function(req, res, next) {
  res.render('jsview', { title: 'JavaScript Variable',data:user,string:"Testing"});
  num++;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexview', { title: 'DroidHat'});
  num++;
});




module.exports = router;
