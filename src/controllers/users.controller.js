import { prismaClient } from "../database/prisma.client.js";

export const readAllUsers = async (_request, response) => {
  try {
    const users = await prismaClient.user.findMany();

    return response.status(200).json(users);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const readUserById = async (request, response) => {
  try {
    const { id } = request.params;

    const user = await prismaClient.user.findUnique({
      where: { id: Number(id) },
      include: { event: true },
    });

    return response.status(200).json(user);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};
