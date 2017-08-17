/*
 * index.js
 * Node.js entry-point for the w3d webpage server.
 *
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0:
 *   http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

const config = require('config').get('config');
const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug');

// Constant definitions
const PORT = config.port || 80;
const TITLE = 'w3d';
const THEME_DIR = config.themeDirectory || path.join(__dirname, 'theme');
const STATIC_PATH = '/public';
const PUBLIC_DIR = 'public';

const renderOptions = {
  staticPath: STATIC_PATH,
  title: TITLE
};

// Routing begins here
app.use(STATIC_PATH, express.static(path.join(
  THEME_DIR, PUBLIC_DIR
)));

app.get('*', function (req, res) {
  res.render('index', renderOptions);
});

// All set, let's listen!
app.listen(PORT, function () {
  console.log('w3d-page listening on port ' + PORT);
});

