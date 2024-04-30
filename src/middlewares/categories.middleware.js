import { prismaClient } from "../database/prisma.client.js";

export const verifyCategoryExists = async (request, response, next) => {
  const { id } = request.params;

  const category = await prismaClient.category.findUnique({
    where: { id: Number(id) },
  });

  if (!category) {
    return response.status(404).json({ error: "Category not found" });
  }

  return next();
};
