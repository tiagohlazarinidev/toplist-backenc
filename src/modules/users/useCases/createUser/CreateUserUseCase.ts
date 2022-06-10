import { Client } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({
    cpf,
    name,
    email,
    streetname,
    housenumber,
    borough,
    cityname,
    cep,
  }: CreateUserDTO): Promise<Client> {
    // Verificar se o usuário já existe
    const userAlreadyExists = await prisma.client.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    // Criar o usuário
    const user = await prisma.client.create({
      data: {
        cpf,
        name,
        email,
        streetname,
        housenumber,
        borough,
        cityname,
        cep,
      },
    });

    return user;
  }
}
