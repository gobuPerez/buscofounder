"use server";
import { MESSAGE_500 } from '@/lib/constants';
import { Post, PostResponse } from '@/lib/interfaces';
import { db } from '@/prisma';

export const getPosts = async ():Promise<PostResponse> => {

    try {
        const posts:Post[] = await db.post.findMany({
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
                deleted: false
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        
        return { status: "success", data: posts };
        
    } catch (error) {
        return { status: "error", message: MESSAGE_500 }
    }
}