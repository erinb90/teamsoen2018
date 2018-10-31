const express = require('express');

const app = express();

const MongoClient = require('mongodb').MongoClient;

var db;

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
});

const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
