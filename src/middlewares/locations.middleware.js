import { prismaClient } from "../database/prisma.client.js";

export const verifyLocationExists = async (request, response, next) => {
  const { id } = request.params;

  const location = await prismaClient.location.findUnique({
    where: { id: Number(id) },
  });

  if (!location) {
    return response.status(404).json({ error: "Location not found" });
  }

  return next();
};
