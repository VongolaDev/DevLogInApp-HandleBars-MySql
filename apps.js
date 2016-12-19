var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mysql  = require('mysql');
 var db;
var obj;
var usid;
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
 
   var connection = mysql.createConnection({

  host:'localhost',
  user: 'root',
  password: '',
  database:'accounts'
});
connection.connect();
 
connection.query("SELECT * FROM useraccts", function(err, rows, fields) {
  if (!!err)
  {
    console.log(err);
  }
  else
  {
db = rows;
usid = rows.length;

  }
 

});


app.get('/', function (req, res) {
    res.render('index');


});

app.get('/i', function (req, res) {
    res.render('index');


});

app.get('/home', function (req, res) {
    res.render('home');


});



app.get('/dashboard',function(req,res) {
	res.render('dashboard');
});



app.get('/db',function(req,res) {

  res.send(JSON.stringify(db));
});

//////////////////////////////////
app.get('/reg',function(req,res) {
  res.render('reg');
});
app.post('/reg',function(req,res) {
  



var id = usid;
var username = req.body.username;
var password = req.body.password;
var cpassword = req.body.cpassword;
var reg = {
  id : id+1,
  username : username,
  password : password
}


if(cpassword === password && password.length >= 8)
{
var connection = mysql.createConnection({


  host:'localhost',
  user: 'root',
  password: '',
  database:'accounts'
});
connection.connect();



connection.query('insert into useraccts set ?', reg , function (err, result){
if(err){
  console.error(err);
  return;
}
console.error(result);

});

 
connection.query("SELECT * FROM useraccts", function(err, rows, fields) {
  if (!!err)
  {
    console.log(err);
  }
  else
  {
db = rows
console.log(db);  
usid = rows.length;
  }
 

});


 res.render('');

   }
  
});



app.get('/do',function(req,res) {
  res.render('do');
});
app.post('/do',function(req,res) {



var tobechanged = req.body.pos;
var userval = req.body.userval;
var passval = req.body.passval;
var proc = req.body.process;

var connection = mysql.createConnection({

  host:'localhost',
  user: 'root',
  password: '',
  database:'accounts'
});
connection.connect();


if( proc === 'update')
{



connection.query('UPDATE useraccts SET id = ?, username = ?, password = ? WHERE username = ?', [1, userval,passval, tobechanged], function(err, results) {
  // ...
});





}

else if( proc === "delete")
{


connection.query('DELETE from useraccts WHERE username = ?', tobechanged, function(err, results) {
  // ...  
});


 



}

else if( proc === 'register')
{

var id = "1";
var username = req.body.adduserval;
var password = req.body.addpassval;
var cpassword = req.body.addcpassval;
var reg = {
  id : id+1,
  username : username,
  password : password
}


if(cpassword === password && password.length >= 8)
{
var connection = mysql.createConnection({


  host:'localhost',
  user: 'root',
  password: '',
  database:'accounts'
});
connection.connect();



connection.query('insert into useraccts set ?', reg , function (err, result){
if(err){
  console.error(err);
  return;
}
console.error(result);

});



 

   }
}

connection.query("SELECT * FROM useraccts", function(err, rows, fields) {
  if (!!err)
  {
    console.log(err);
  }
  else
  {
db = rows

console.log(db);

  }
 

});



res.redirect('Dashboard');





  });










app.listen(8080)