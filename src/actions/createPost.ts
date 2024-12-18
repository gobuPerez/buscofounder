"use server";
import { StandarResponse } from '@/lib/interfaces';
import { sameDay } from '@/lib/utils';
import { db } from '@/prisma';
import { newPostWhitIdAndPhoto } from '@/zod';
import { z } from 'zod';

export const createPost = async (values:z.infer<typeof newPostWhitIdAndPhoto>): Promise<StandarResponse> => {

    const { publicName, problem, vision, aboutMe, lookingFor, offer, team, location, 
        projectPhase, linkedin, instagram, twitter, contactEmail, profilePhoto, userId } = values;

    // ultimo post publicado por el usuario
    const post = await db.post.findFirst({ 
        where: {
            publicName,
            deleted: false
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    if (post && post.authorId === userId && sameDay(post.createdAt, new Date())) return { status: "error", message: "Solo puedes publicar un mensaje al día." }

    if (!problem && !vision && !aboutMe && !lookingFor && !offer && !team && !location && !projectPhase) 
        return { status: "error", message: 'Debes completar al menos uno de los campos de la seccción "Sobre el proyecto".'}

    if (!linkedin && !instagram && !twitter && !contactEmail) 
        return { status: "error", message: 'Debes añadir al menos una forma de contacto en la sección "Contacto".' }

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