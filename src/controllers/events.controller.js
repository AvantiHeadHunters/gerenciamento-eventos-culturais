import { prismaClient } from "../database/prisma.client.js";

export const readAllEvents = async (_request, response) => {
  const events = await prismaClient.event.findMany();

  return response.status(200).json(events);
};
