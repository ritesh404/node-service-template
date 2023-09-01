const express = require("express");

const app = express();

function start(port, fn) {
  app.listen(port, fn);
}

function addMiddleware(fn) {
  app.use(fn);
}

function setGetRoute(route, fn) {
  app.get(route, fn);
}

function setPostRoute(route, fn) {
  app.get(route, fn);
}

function setDeleteRoute(route, fn) {
  app.delete(route, fn);
}

function setPatchRoute(route, fn) {
  app.patch(route, fn);
}

module.exports = {
  start,
  setGetRoute,
  setPostRoute,
  setDeleteRoute,
  setPatchRoute,
  addMiddleware,
};
