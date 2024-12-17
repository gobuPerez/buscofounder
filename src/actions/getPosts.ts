"use server";
import { Post } from '@/lib/interfaces';
import { db } from '@/prisma';

export const getPosts = async () => {

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
            authorId: true
        },
        where: {
            deleted: false
        }
    });

    console.log(posts)

    return { status: "success", message: "Mensaje publicado correctamente." };
}