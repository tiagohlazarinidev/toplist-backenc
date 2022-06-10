import { Product } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export class CreateProductUseCase {
  async execute({
    nome,
    marca,
    preco,
    quantidade,
  }: CreateProductDTO): Promise<Product> {
    // Verificar se o filme já existe
    const movieAlreadyExists = await prisma.product.findUnique({
      where: {
        nome
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Product already exists!");
    }

    // Criar o filme
    const movie = await prisma.product.create({
      data: {
        nome,
        marca,
        preco,
        quantidade
      },
    });

    return movie;
  }
}
