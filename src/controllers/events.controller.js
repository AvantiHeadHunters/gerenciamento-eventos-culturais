import { prismaClient } from "../database/prisma.client.js";

export const readAllEvents = async (_request, response) => {
  const events = await prismaClient.event.findMany();

  return response.status(200).json(events);
};

export const readEventById = async (request, response) => {
  const { id } = request.params;

  const event = await prismaClient.event.findUnique({
    where: { id: Number(id)},
    include: { location: true },
  });

  return response.status(200).json(event);
};
