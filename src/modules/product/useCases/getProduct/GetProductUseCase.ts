import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetProductUseCase {
  async execute(): Promise<Product[]> {
    const movies = await prisma.product.findMany({
      orderBy: {
        nameproduct: "desc",
      },
      include: {
        product_rent: {
          select: {
            client: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return movies;
  }
}
