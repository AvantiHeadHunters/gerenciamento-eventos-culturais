import { prismaClient } from "../database/prisma.client.js";

export const readAllCategories = async (request, response) => {
  const categories = await prismaClient.category.findMany();

  return response.status(200).json(categories);
};

export const readCategoryById = async (request, response) => {
  try {
    const { id } = request.params;

    const category = await prismaClient.category.findUnique({
      where: { id: Number(id) },
      include: { event: true },
    });

    if (!category)
      return response.status(404).json({ error: "Category not found" });
    return response.status(200).json(category);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const createCategory = async (request, response) => {
  try {
    const { name, description } = request.body;

    const category = await prismaClient.category.create({
      data: {
        name,
        description,
      },
    });

    return response.status(201).json(category);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const updateCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description } = request.body;

    const category = await prismaClient.category.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
      },
    });

    return response.status(200).json(category);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCategory = async (request, response) => {
  const { id } = request.params;

  await prismaClient.category.delete({
    where: {
      id: Number(id),
    },
  });

  return response.status(204).send();
};
