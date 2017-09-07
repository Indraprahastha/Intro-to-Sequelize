let express = require('express')
let router = express.Router()
let models = require('../models')

// router.get('/', (req,res) => {
//   teachersModels.
// })

router.get('/', function(req, res, next) {
  models.Subject.findAll().then(function(Subject) {
    res.render('subject',{dataSubjects:Subject});
  });
});

module.exports = router
