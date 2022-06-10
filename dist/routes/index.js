"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var product_routes_1 = require("./product.routes");
var cadastro_routes_1 = require("./cadastro.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/cadastro", cadastro_routes_1.casdatroRoutes);
routes.use("/product", product_routes_1.productRoutes);
//# sourceMappingURL=index.js.map