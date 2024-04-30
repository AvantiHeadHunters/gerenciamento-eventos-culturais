import { prismaClient } from "../database/prisma.client.js";

export const readAllEvents = async (_request, response) => {
  try {
    const events = await prismaClient.event.findMany();

    return response.status(200).json(events);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
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
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const createEvent = async (request, response) => {
  try {
    const { name, description, date, locationId, categoryId } = request.body;
    const isoDate = new Date(date).toISOString();

    const event = await prismaClient.event.create({
      data: {
        name,
        description,
        date: isoDate,
        location_id: Number(locationId),
        category_id: Number(categoryId)
      },
    });

    return response.status(201).json(event);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const updateEvent = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description, date, locationId, categoryId } = request.body;
    const isoDate = new Date(date).toISOString();

    const event = await prismaClient.event.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        date: isoDate,
        location_id: Number(locationId),
        category_id: Number(categoryId)
      },
    });

    return response.status(200).json(event);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEvent = async (request, response) => {
  try {
    const { id } = request.params;

  await prismaClient.event.delete({
    where: {
      id: Number(id),
    },
  });

  return response.status(204).send();
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};
