"use server";
import { Response } from '@/lib/interfaces';
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

export const createPost = async (values:z.infer<typeof newPostWhitIdAndPhoto>): Promise<Response> => {

    const { publicName, problem, vision, aboutMe, lookingFor, offer, team, location, 
        projectPhase, linkedin, instagram, twitter, contactEmail, profilePhoto, userId } = values;

    if (!problem && !vision && !aboutMe && !lookingFor && !offer && !team && !location && !projectPhase) 
        return { status: "error", message: "Debes completar al menos uno de los campos sobre el proyecto."}

    const uniqueName = await db.post.findUnique({ 
        where: {
            publicName
        }
    });

    if (uniqueName) return { status: "error", message: "Ya existe un usuario con ese nombre. Por favor, utiliza otro. " }

    if (!linkedin && !instagram && !twitter && !contactEmail) 
        return { status: "error", message: "Debes añadir al menos una forma de contacto." }

    await db.post.create({
        data: {           
            publicName,   
            problem: !problem ? null : problem,       
            vision: !vision ? null : vision,        
            aboutMe: !aboutMe ? null : aboutMe,    
            lookingFor: !lookingFor ? null : lookingFor,  
            offer: !offer ? null : offer,  
            team: !team ? null : team,  
            location: !location ? null : location,        
            projectPhase: !projectPhase ? null : projectPhase,  
            linkedin: !linkedin ? null : linkedin,        
            instagram: !instagram ? null : instagram,  
            twitter: !twitter ? null : twitter,     
            contactEmail: !contactEmail ? null : contactEmail,  
            profilePhoto: !profilePhoto ? null : profilePhoto,  
            author: {
                connect: { id: userId }
            }  
        }
    });

    return { status: "success", message: "Mensaje publicado correctamente." };
}