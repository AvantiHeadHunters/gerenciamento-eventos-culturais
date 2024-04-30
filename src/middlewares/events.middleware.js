import { prismaClient } from "../database/prisma.client.js";

export const verifyEventExists = async (request, response, next) => {
  const { id } = request.params;

  const event = await prismaClient.event.findUnique({
    where: { id: Number(id) },
  });

  if (!event) {
    return response.status(404).json({ error: "Event not found" });
  };

  return next();
};
