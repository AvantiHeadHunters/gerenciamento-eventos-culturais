import { prismaClient } from "../database/prisma.client.js";

export const readAllLocations = async (request, response) => {
  const locations = await prismaClient.location.findMany();

  response.status(200).json(locations);
};

export const readLocationById = async (request, response) => {
  const { id } = request.params;

  const location = await prismaClient.location.findUnique({
    where: { id: Number(id) },
    include: { event: true },
  });

  return response.status(200).json(location);
};

export const createLocation = async (request, response) => {
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

  response.status(201).json(location);
};

export const updateLocation = async (request, response) => {
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
};

export const deleteLocation = async (request, response) => {
  const { id } = request.params;

  await prismaClient.location.delete({
    where: {
      id: Number(id),
    },
  });

  response.status(204).send();
};
