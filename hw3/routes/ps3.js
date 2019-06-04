var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { title: 'Problem Set 3 Page', context: 'question 2 and 3 are under ./Question2 and ./Question3' });
});

router.get('/Question2', (req, res, next) =>{
    kv_pair = {
      string: "bravo~"
    };

    res.render('ps3', { title: 'Question2 - GET', context: 'kv_pair is ' + JSON.stringify(kv_pair) });
    return kv_pair;
});

router.post('/Question3', (req, res) =>{
    var string = req.string();
    console.log(string);
    obj = {
      string: string,
      length: string.length
    };

    return obj;
});

module.exports = router;
