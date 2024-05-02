import { prismaClient } from "../database/prisma.client.js";
import bcrypt from "bcrypt";

export const createUser = async (request, response) => {
  const { name, email, password, isAdmin } = request.body;

  try {
    const cryptPass = bcrypt.hashSync(password, 10);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: cryptPass,
        isAdmin,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        isAdmin: true,
      },
    });

    return response.status(201).json(user);
  } catch (error) {
    console.log(error);
    response.status(500).send();
  }
};

export const readAllUsers = async (_request, response) => {
  try {
    const users = await prismaClient.user.findMany();

    return response.status(200).json(users);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const readUserById = async (request, response) => {
  try {
    const { id } = request.params;

    const user = await prismaClient.user.findUnique({
      where: { id: Number(id) },
      include: { event: true },
    });

    return response.status(200).json(user);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, email, password, isAdmin } = request.body;

    const cryptPass = bcrypt.hashSync(password, 10);

    const existingUser = await prismaClient.user.findFirst({
      where: {
        AND: [{ email }, { NOT: { id: Number(id) } }],
      },
    });

    if (existingUser) {
      return response.status(400).json({ error: "Email already in use" });
    }

    const user = await prismaClient.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        password: cryptPass,
        isAdmin,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        isAdmin: true,
      },
    });

    return response.status(200).json(user);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;

    await prismaClient.user.delete({
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
