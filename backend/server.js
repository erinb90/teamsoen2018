const express = require('express');

const app = express();

const MongoClient = require('mongodb').MongoClient;

var db;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

MongoClient.connect('mongodb://admin:teamsoen18@ds147073.mlab.com:47073/team-soen', (err, client) => {
  if (err) return console.log(err);
  db = client.db('team-soen'); // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000');
  });

  app.get('/api/accounts', (req, res) => {
    var cursor = db.collection('accounts').find().toArray(function(err, results) {
      res.send(results)
    })
  });

  app.get('/api/accounts/:id', (req, res) => {
    let id = req.params.id;
    var cursor = db.collection('accounts').find({userID: id}).toArray(function(err, results) {
      res.send(results)
    })
  });

  app.post('/api/users', async (req, res) => {
    let body = await req.body;
    let username = body.username;
    let password = body.password;
    var cursor = db.collection('users').find({username: username, password: password}).toArray(function(err, results) {
      res.send(results)
    })
  });
});

const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
