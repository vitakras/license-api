const express = require('express');
const debug = require('debug')('app');


const app = express();

app.get('/', (req, res) => res.send('hello world'));

const port = process.env.PORT || 3000;


app.listen(port, () => {
  debug(`listening on port ${port}`);
});
