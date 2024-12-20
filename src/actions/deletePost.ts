"use server";
import { MESSAGE_500 } from '@/lib/constants';
import { StandarResponse } from '@/lib/interfaces';
import { db } from '@/prisma';

export const deletePost = async (userId:string, postCreatedBy:string, postId:string): Promise<StandarResponse> => {
    try {
        if (userId !== postCreatedBy) return { status: "error", message: "No tienes permiso para eliminar el mensaje." }
    
        await db.post.update({
            where: {
                id: postId
            },
            data: {
                deleted: true
            }
        });
    
        return { status: "success", message: "Mensaje eliminado correctamente." }
    } catch (error) {
        if (process.env.NODE_ENV === "development") console.log(error);
        return { status: "error", message: MESSAGE_500 }
    }
}