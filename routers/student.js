let express = require('express')
let router = express.Router()
let models = require('../models')

// router.get('/', (req,res) => {
//   teachersModels.
// })

router.get('/', function(req, res, next) {
  models.Student.findAll().then(function(Student) {
    res.render('student',{dataStudent:Student});
  });
});

//===================================================== ADD
router.get('/add', function(req, res, next) {
  res.render('student-add');
})
router.post('/add',function (req, res) {
  models.Student.create({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  })
  .then(newUser => {
    res.redirect('/student')
  })
})
//===================================================== getById
router.get('/edit/:id', (req, res) => {
  models.Student.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.render('student-edit', {data:data})
  })
})
router.post('/edit/:id', (req, res) => {
  models.Student.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  },{
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/student')
  })
})
//===================================================== Delete
router.get('/delete/:id', (req, res) => {
  models.Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/student')
  })
})



module.exports = router
