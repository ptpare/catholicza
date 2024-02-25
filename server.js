const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();

// Use cors middleware and allow all origins
app.use(cors());

app.get('/proxy', (req, res) => {
  // Take the url from the query params
  const url = req.query.url;

  // Send a request to the original url
  request(url).pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port', process.env.PORT || 3000);
});
