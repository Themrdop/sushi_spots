const express = require('express');
const {getAndFormatTopSushiSpots} = require('./helper');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/getTopSushiSpots', async function (req, res) {
    
  let result = await getAndFormatTopSushiSpots();

  res.send(result);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});