const api = require('./apiconnect.js');
const db = require('../database/index.js');
const express = require('express');
const app = express();
const port = 3000;


// needed to receive 'static' files from client side (js files, images)
app.use(express.static(__dirname + '/../client/public'));
app.use(express.json());

app.get('/parks', (req, res) => {
  db.getAllParks((err, stuff) => {
    if (err) {
      res.send(err);
    } else {
      res.send(stuff);
    }
  });
});

app.get('/description/:parkCode', (req, res) => {
  api.getParkDescription(req.params.parkCode)
  .then(desc => {
    let parsed = JSON.parse(desc);
    res.send(parsed)
  })
  .catch(err => {
    console.log(err);
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})