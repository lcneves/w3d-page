/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Server configuration for the w3d webpage.
 */

'use strict';

const path = require('path');
const app = require('express')();


const config = require('config').get('config');
const PORT = config.port || 80;

require('livre-server')(config);

