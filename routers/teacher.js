let express = require('express')
let router = express.Router()
let models = require('../models')

// router.get('/', (req,res) => {
//   teachersModels.
// })

router.get('/', function(req, res, next) {
  models.Teacher.findAll().then(function(Teacher) {
    res.render('teacher',{dataTeachers:Teacher});
  });
});

module.exports = router
