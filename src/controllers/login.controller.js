import { prismaClient } from "../database/prisma.client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const sign = async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    const verifyPass = bcrypt.compareSync(password, user.password);

    if (!verifyPass) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    const token = jwt.sign(
      { user_id: user.id, isAdmin: user.isAdmin },
      process.env.SECRET_JWT,
      { expiresIn: "2h" }
    );

    return response.status(200).json({
      token: token,
      userId: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send();
  }
};
