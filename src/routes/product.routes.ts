import { Router } from "express";
import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";
import { CreateProductRentController } from "../modules/product/useCases/createProductRent/CreateProductRentController";
import { GetProductController } from "../modules/product/useCases/getProduct/GetProductController";

const createMovieController = new CreateProductController();
const getProductController = new GetProductController();
const createProductRentController = new CreateProductRentController();

const productRoutes = Router();

productRoutes.post("/", createMovieController.handle);
productRoutes.get("/release", getProductController.handle);
productRoutes.post("/rent", createProductRentController.handle);

export { productRoutes };
