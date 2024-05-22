import { prismaClient } from "../database/prisma.client.js";

export const readAllEvents = async (request, response) => {
  try {
    const { category_id, location_id, date } = request.query;

    if (date) {
      const isoDate = new Date(date).toISOString();

      const events = await prismaClient.event.findMany({
        where: {
          category_id: Number(category_id) || undefined,
          location_id: Number(location_id) || undefined,
          date: isoDate,
        },
      });
      return response.status(200).json(events);
    } else {
      const events = await prismaClient.event.findMany({
        where: {
          category_id: Number(category_id) || undefined,
          location_id: Number(location_id) || undefined,
        },
      });
      return response.status(200).json(events);
    }
  } catch (error) {
    return response.status(500).send();
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
            image: true,
          },
        },
      },
    });
    return response.status(200).json(event);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const createEvent = async (request, response) => {
  try {
    const { name, description, date, locationId, categoryId, userId, image } =
      request.body;
    const isoDate = new Date(date).toISOString();

    const event = await prismaClient.event.create({
      data: {
        name,
        description,
        date: isoDate,
        location_id: Number(locationId),
        category_id: Number(categoryId),
        user_id: Number(userId),
        image,
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
    const { name, description, date, locationId, categoryId, image } =
      request.body;
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
        category_id: Number(categoryId),
        image,
      },
    });

    return response.status(200).json(event);
  } catch (error) {
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
    return response.status(500).json({ error: "Internal server error" });
  }
};
