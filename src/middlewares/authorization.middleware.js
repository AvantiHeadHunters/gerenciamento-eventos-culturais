import jwt from 'jsonwebtoken'

export default function (request, response, next){

   const {authorization} = request.headers;

   if(!authorization){
      return response.status(401).json({"message": "Token Missing"});
   }

   const token = authorization.replace('Bearer', '').trim();
      
   try{
      const {isAdmin} = jwt.verify(token, process.env.SECRET_JWT);
      
      if(isAdmin == false){
         return response.status(401).json({"message":"Unauthorized"});
      }
      
      next();

   }catch(error){
         return response.status(401).json({"message":"Forbidden"});
      }
}