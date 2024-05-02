import { prismaClient } from "../database/prisma.client.js";

export const verifyEmailExists = async (request, response, next) => {
  const { email } = request.body;

  const user = await prismaClient.user.findUnique({ where: { email } });

  if (user) {
    return response.status(409).json({ error: "Email already exists" });
  }

  return next();
};

export const verifyUserExists = async (request, response, next) => {
  const { id } = request.params;

  const user = await prismaClient.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) {
    return response.status(404).json({ error: "User not found" });
  }

  return next();
};
