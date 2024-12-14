"use server";
import { db } from '@/prisma';

export const createPost = async () => {
    await db.post.create({
        data: {
            publicName: "Probando",
            author: {
                connect: { id: "id de google"}
            } 
        }
    });
}