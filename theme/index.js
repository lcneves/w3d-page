/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Theme for w3d web page.
 */

'use strict';

require('babel-polyfill');

const stylesheets = [
  require('./style/defaults.js'),
  require('./style/theme.js')
];

const resources = require('./load-resources.js')(stylesheets);

const lights = [
  { type: 'ambient' },
  { type: 'directional' }
  //{ type: 'point' }
];

const theme = {
  stylesheets: stylesheets,
  resources: resources,
  lights: lights,
  background: 0xffffff,
  worldWidth: 100,
  hfov: 30,
  nearFarRatio: 0.25
};

const templates = require('./lib/templates.js');

const app = {
  theme: theme,
  templates: templates
};

const w3d = require('w3d')(app);

require('./client.js')(w3d);
