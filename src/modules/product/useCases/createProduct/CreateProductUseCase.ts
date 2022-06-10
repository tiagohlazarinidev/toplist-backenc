import { Product } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export class CreateProductUseCase {
  async execute({
    price,
    nameproduct,
    qnty,
    brand,
  }: CreateProductDTO): Promise<Product> {
    // Verificar se o filme já existe
    const movieAlreadyExists = await prisma.product.findUnique({
      where: {
        nameproduct,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Product already exists!");
    }

    // Criar o filme
    const movie = await prisma.product.create({
      data: {
        price,
        nameproduct,
        qnty,
        brand,
      },
    });

    return movie;
  }
}
