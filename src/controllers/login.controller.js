import {prismaClient} from '../database/prisma.client.js'
import bcrypt from  'bcrypt';
import jwt from 'jsonwebtoken'

export const sign = async(request, response) => {

   const {email, password} = request.body;

   try{
      
      const user = await prismaClient.user.findUnique({
         where: {
            email,
         }
      })
      
      const verifyPass = bcrypt.compareSync(password, user.password);

      if(!verifyPass){
         return response.status(401).json({"message": "Unauthorized"});
      }
      const options = {expiresIn: '2h'};

      const token = jwt.sign({user_id: user.id, isAdmin: JSON.parse(user.isAdmin)}, process.env.SECRET_JWT, options);
      
      return response.status(200).json(token, {"user": user.email});

   }catch(error){
      console.log(error);
      response.status(500).send();
   }
}