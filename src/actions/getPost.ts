"use server";
import { MESSAGE_500 } from '@/lib/constants';
import { Post, PostsResponse } from '@/lib/interfaces';
import { db } from '@/prisma';

export const getPost = async (id:string):Promise<PostsResponse> => {

    try {
        const post:Post | null = await db.post.findUnique({
            select: {
                id: true,
                publicName: true,
                problem: true,
                vision: true,
                aboutMe: true,
                lookingFor: true,
                offer: true,
                team: true,
                location: true,
                projectPhase: true,
                linkedin: true,
                instagram: true,
                twitter: true,
                contactEmail: true,
                profilePhoto: true,
                createdAt: true,
                deleted: false,
                authorId: true,
            },
            where: {
                deleted: false,
                id
            }
        });
        // Si no existe la publicacion que se esta buscando se envia un vector vacio
        return { status: "success", data: !post ? [] : [post] };
        
    } catch (error) {
        if (process.env.NODE_ENV === "development") console.log(error);
        return { status: "error", message: MESSAGE_500 }
    }
}