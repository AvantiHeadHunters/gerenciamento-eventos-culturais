import { prismaClient } from "../database/prisma.client.js";

export const readAllLocations = async (_request, response) => {
  const locations = await prismaClient.location.findMany();

  return response.status(200).json(locations);
};

export const readLocationById = async (request, response) => {
  try {
    const { id } = request.params;

    const location = await prismaClient.location.findUnique({
      where: { id: Number(id) },
      include: { event: true },
    });

    return response.status(200).json(location);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const createLocation = async (request, response) => {
  try {
    const { name, address, zip_code, city, state, link_maps } = request.body;

    const location = await prismaClient.location.create({
      data: {
        name,
        address,
        zip_code,
        city,
        state,
        link_maps,
      },
    });

    return response.status(201).json(location);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const updateLocation = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, address, zip_code, city, state, link_maps } = request.body;

    const location = await prismaClient.location.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        address,
        zip_code,
        city,
        state,
        link_maps,
      },
    });

    return response.status(200).json(location);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const deleteLocation = async (request, response) => {
  const { id } = request.params;

  await prismaClient.location.delete({
    where: {
      id: Number(id),
    },
  });

  return response.status(204).send();
};
