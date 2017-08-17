/*
 * client.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Client-side logic for a w3d app.
 */

'use strict';

module.exports = function (w3d) {
  w3d.reset();

  switch (window.location.pathname) {
    case '/':
      w3d.importTemplate('index');
      break;

    default:
      w3d.importTemplate('404');
      break;
  }
};
