import { prismaClient } from "../database/prisma.client.js";

export const readAllEvents = async (_request, response) => {
  const events = await prismaClient.event.findMany();

  return response.status(200).json(events);
};

export const readEventById = async (request, response) => {
  try {
    const { id } = request.params;

    const event = await prismaClient.event.findUnique({
      where: { id: Number(id) },
      include: {
        location: {
          select: {
            name: true,
            address: true,
            city: true,
            state: true,
          },
        },
      }
    });

    if (!event) return response.status(404).json({ error: "Event not found" });
    return response.status(200).json(event);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const createEvent = async (request, response) => {
  try {
    const { name, description, date, locationId } = request.body;

    const event = await prismaClient.event.create({
      data: {
        name,
        description,
        date,
        locationId,
      },
    });

    return response.status(201).json(event);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const updateEvent = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description, date, locationId } = request.body;

    const event = await prismaClient.event.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        date,
        locationId,
      },
    });

    return response.status(200).json(event);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEvent = async (request, response) => {
  const { id } = request.params;

  await prismaClient.event.delete({
    where: {
      id: Number(id),
    },
  });

  return response.status(204).send();
};
