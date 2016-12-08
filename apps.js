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



var query = connection.query('insert into useraccts set ?', reg , function (err, result){
if(err){
  console.error(err);
  return;
}
console.error(result);

});

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
db = rows
usid = rows.length;
  }
 

});


 res.render('');

   }
  
});





app.listen(8080)