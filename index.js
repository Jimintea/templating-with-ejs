const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index',{'title':title});
});

///soccer
app.get('/soccer', (req, res) => {
  var title = 'Our Soccer Page';
  res.render('pages/soccer',{'title':title});
});

app.get('/basketball', (req, res) => {
  var title = 'Our Basketball Page';
  res.render('pages/basketball',{'title':title});
});

app.get('/football', (req, res) => {
  var title = 'Our Football Page';
  res.render('pages/football',{'title':title});
});

app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});
