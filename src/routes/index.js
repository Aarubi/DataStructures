const { Router } = require('express');

const stackRouter = require ('../Stack/http/routes/stack.routes');

const routes = Router();

routes.use('/stack', stackRouter);

module.exports = routes;