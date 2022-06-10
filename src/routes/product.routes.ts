import { Router } from "express";
import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";
import { CreateProductRentController } from "../modules/product/useCases/createProductRent/CreateProductRentController";
import { GetProductController } from "../modules/product/useCases/getProduct/GetProductController";

const createProductController = new CreateProductController();
const getProductController = new GetProductController();
const createProductRentController = new CreateProductRentController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", getProductController.handle);
productRoutes.post("/rent", createProductRentController.handle);

export { productRoutes };
