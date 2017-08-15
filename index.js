/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * A sample server setup for the Livre project.
 * Reads configuration from the file './config/default.json'.
 */

'use strict';

const path = require('path');

var config = require('config').get('config');

config.themesDirectory = config.themesDirectory ||
  path.join(__dirname, 'node_modules');

require('livre-server')(config);

