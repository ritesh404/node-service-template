import express, { ErrorRequestHandler, RequestHandler } from "express";

const app = express();

function start(port: number, fn: () => void) {
  app.listen(port, fn);
}

function addMiddleware(fn: RequestHandler | ErrorRequestHandler) {
  app.use(fn);
}

function setGetRoute(route: string, fn: RequestHandler) {
  app.get(route, fn);
}

function setPostRoute(route: string, fn: RequestHandler) {
  app.post(route, fn);
}

function setPutRoute(route: string, fn: RequestHandler) {
  app.put(route, fn);
}

function setDeleteRoute(route: string, fn: RequestHandler) {
  app.delete(route, fn);
}

function setPatchRoute(route: string, fn: RequestHandler) {
  app.patch(route, fn);
}

export {
  start,
  setGetRoute,
  setPostRoute,
  setPutRoute,
  setDeleteRoute,
  setPatchRoute,
  addMiddleware,
};
