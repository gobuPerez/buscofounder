"use server";
import { db } from '@/prisma';
import { newPostWhitIdAndPhoto } from '@/zod';
import { z } from 'zod';

interface Props {
    publicName: string;
    problem?: string;
    vision?: string;
    aboutMe?: string;
    lookingFor?: string;
    offer?: string;
    team?: string;
    location?: string;
    projectPhase?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    contactEmail?: string;
    profilePhoto: boolean;
    userId: string;
    photoURL?: string
}

export const createPost = async (values:z.infer<typeof newPostWhitIdAndPhoto>) => {

    const { publicName, problem, vision, aboutMe, lookingFor, offer, team, location, 
        projectPhase, linkedin, instagram, twitter, contactEmail, profilePhoto, userId } = values;

    if (!problem && !vision && !aboutMe && !lookingFor && !offer && !team && !location && !projectPhase) 
        return { ok: false, message: "Debes completar al menos uno de los campos principales."}

    const uniqueName = await db.post.findUnique({ 
        where: {
            publicName
        }
    });

    if (uniqueName) return { ok: false, message: "Ya existe un usuario con ese nombre. Por favor, utiliza otro. "}

   /*  if (!linkedin && !instagram && !twitter && !contactEmail) 
        return { ok: false, message: "Debes añadir al menos una forma de contacto."} */


    await db.post.create({
        data: {           
            publicName,   
            problem: !problem ? null : problem,       
            vision: !vision ? null : vision,        
            aboutMe,       
            lookingFor,    
            offer,         
            team,          
            location,      
            projectPhase,   
            linkedin,      
            instagram,     
            twitter,      
            contactEmail,   
            profilePhoto,  
            author: {
                connect: { id: userId }
            }  
        }
    });

    return "correcto";
}