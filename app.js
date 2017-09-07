let express = require('express');
let bodyParser = require('body-parser');
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
//--------------------------------------------------------
let index = require ('./routers/index.js')
let teacher = require('./routers/teacher.js')
let subject = require ('./routers/subject.js')
let student = require ('./routers/student.js')
//--------------------------------------------------------
app.use('/', index)
app.use('/teacher', teacher)
app.use('/subject', subject)
app.use('/student', student)
// app.get('/', function(req, res) {
//   res.send('tes')
// })

app.listen(3000, function(){
  console.log('Run... Run... Run...');
})
