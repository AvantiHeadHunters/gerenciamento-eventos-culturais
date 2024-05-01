import { prismaClient } from "../database/prisma.client.js";
import bcrypt from 'bcrypt'

export const createUser = async(request, response) => {
   const {name, email, password, isAdmin} = request.body;

   try{
      const salt = bcrypt.genSaltSync(10)
      const cryptPass = bcrypt.hashSync(password, salt);

     /* const userCheck = await prismaClient.user.findFirst({
         where: {
            email,
         }
      })

      if(userCheck){
         return reponse.status(409).json({"message":"Email already signed"});
      } */

      const user = await prismaClient.user.create({
         data: {
            name,
            email,
            password: cryptPass,
            isAdmin: JSON.parse(isAdmin),
         }
      });

      return response.status(201).json({"message": "User Created", "email": user.email});

   }catch(error){
      console.log(error);
      response.status(500).send();
   }

}


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
