import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      cpf,
      name,
      email,
      streetname,
      housenumber,
      borough,
      cityname,
      cep,
    } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      cpf,
      name,
      email,
      streetname,
      housenumber,
      borough,
      cityname,
      cep,
    });

    return res.status(201).json(result);
  }
}
