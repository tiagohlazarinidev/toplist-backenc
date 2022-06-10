"use strict";
exports.__esModule = true;
exports.productRoutes = void 0;
var express_1 = require("express");
var CreateProductController_1 = require("../modules/product/useCases/createProduct/CreateProductController");
var CreateProductRentController_1 = require("../modules/product/useCases/createProductRent/CreateProductRentController");
var GetProductController_1 = require("../modules/product/useCases/getProduct/GetProductController");
var createMovieController = new CreateProductController_1.CreateProductController();
var getProductController = new GetProductController_1.GetProductController();
var createProductRentController = new CreateProductRentController_1.CreateProductRentController();
var productRoutes = (0, express_1.Router)();
exports.productRoutes = productRoutes;
productRoutes.post("/", createMovieController.handle);
productRoutes.get("/release", getProductController.handle);
productRoutes.post("/rent", createProductRentController.handle);
//# sourceMappingURL=product.routes.js.map