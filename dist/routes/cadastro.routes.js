"use strict";
exports.__esModule = true;
exports.casdatroRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/users/useCases/createUser/CreateUserController");
var GetAllUsersController_1 = require("../modules/users/useCases/getAllUsers/GetAllUsersController");
var createUserController = new CreateUserController_1.CreateUserController();
var getAllUsersController = new GetAllUsersController_1.GetAllUsersController();
var casdatroRoutes = (0, express_1.Router)();
exports.casdatroRoutes = casdatroRoutes;
casdatroRoutes.post("/", createUserController.handle);
casdatroRoutes.get("/", getAllUsersController.handle);
//# sourceMappingURL=cadastro.routes.js.map