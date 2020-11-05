const Router = require ('express');

const StackController = require('../controllers/StackController');

const stackRouter = Router();

stackRouter.post('/', StackController.AddController);
stackRouter.get('/', StackController.TopController);
stackRouter.get('/', StackController.SizeController);
//stackRouter.delete('/', stackRouter.remove);

module.exports = stackRouter;