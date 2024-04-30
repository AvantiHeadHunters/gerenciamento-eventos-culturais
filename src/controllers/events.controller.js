import { prismaClient } from "../database/prisma.client.js";

export const readAllEvents = async (request, response) => {

   try{
   const {category_id, location_id, date} = request.query;

  if(date){ 

   const queryDay = new Date(date).setHours(23, 59, 59, 59);
   const nextDay = new Date(queryDay);
   nextDay.setDate(nextDay.getDate() + 1);
  
  const events = await prismaClient.event.findMany({
   where:{
      category_id: Number(category_id) || undefined,
      location_id: Number(location_id) || undefined,
      date: {
         lt: nextDay,
         gte: new Date(queryDay),
      }
   },
  });  
  return response.status(200).json(events);
  }else{
   const events = await prismaClient.event.findMany({
      where:{
         category_id: Number(category_id) || undefined,
         location_id: Number(location_id) || undefined,
      },
     });
     return response.status(200).json(events);
  }
}catch(error){
   console.log(error)
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
    const { name, description, date, location_id, category_id } = request.body;
    const isoDate = new Date(date).toISOString();


    const event = await prismaClient.event.create({
      data: {
        name,
        description,
        date: isoDate,
        location_id: Number(location_id), 
        category_id: Number(category_id)
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
    const { name, description, date, location_id, category_id } = request.body;

    const event = await prismaClient.event.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        date,
        location_id: Number(location_id),
        category_id: Number(category_id)
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
