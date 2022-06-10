import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { price, nameproduct, qnty, brand } = req.body;

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({
      price,
      nameproduct,
      qnty,
      brand,
    });

    return res.status(201).json(result);
  }
}
