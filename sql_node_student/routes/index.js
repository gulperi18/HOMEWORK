var express = require('express');
var router = express.Router();
//let fs = require('fs');
const mssql = require('mssql');

const sqlConfig = {
  password: 'it_stud18',
  database: 'student',
 stream: false,
  options: {
    enableArithAbort: true,
    encrypt: false
},
 user: 'it_stud',
  server: 'Localhost'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/register', function(req, res) {
 let n = req.body.userName;
 let a = req.body.userAge;

 //fs.appendFileSync("stud.txt", n + ' ' + a + ' ');
 //fs.writeFileSync("stud.txt", n + ' ' + a); --меняет содерж на 1 раз
 //let StudFromFile = fs.readFileSync("stud.txt", "utf8");
 //let cor = StudFromFile.substring(11, 0);

 mssql.connect(sqlConfig)
  .then((pool) => {
    return pool.request().query('select * from stud',)
  })
  .then((result) => {
    console.log(result.rowsAffected[0])
  })

  res.render('reg.hbs' , {
    par1: n,
    par2: a,
    dbper: datasfrommssql

  });
});



module.exports = router;
