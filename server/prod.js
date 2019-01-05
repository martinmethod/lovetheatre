//====================================================|
// PRODUCTION SERVER


//--------------------------| Import

const path = require('path');
const opn = require('opn');
const express = require('express');
const chalk = require('chalk');
const pkg = require('../package.json');


//--------------------------| Define

const app = express();
const publicPath = path.join(__dirname, '..', 'client/dist');
const port = pkg.ports.prod;
const browser = process.platform === 'win32' ? 'Chrome' : '/Applications/Google Chrome.app';


//--------------------------| Config

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


//--------------------------| Initialize

app.listen(port, () => {
  console.log(chalk.green('Server is up!'));

  opn(`http://localhost:${port}`, {
    app: browser
  });
});
