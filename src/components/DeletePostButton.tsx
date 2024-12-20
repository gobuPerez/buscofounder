"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Post, StandarResponse } from "@/lib/interfaces";
import { AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { deletePost } from "@/actions/deletePost";

interface Props {
    userId: string;
    postId: string;
    authorId: string;
    setOpenDialog: Dispatch<SetStateAction<boolean>>
    postArray: Post[]
    setPostArray: Dispatch<SetStateAction<Post[]>>
}
export default function DeletePostButton({ userId, postId, authorId, setOpenDialog, postArray, setPostArray }:Props) {

    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<StandarResponse>({ status: "empty", message: "" });

    async function deleteMessage() {
        setLoading(true);
        const response = await deletePost(userId, authorId, postId);
        setLoading(false);
        setResponse(response);
        
        if  (response.status === "success") {
            toast({
                title: "Mensaje eliminado correctamente.",
                description: "Tu mensaje ya no es visible para el resto de usuarios.",
            });

            const filteredPosts:Post[] = postArray.filter(post => post.id !== postId);

            setPostArray(filteredPosts);
            setOpenDialog(false);
        }

    }
    
    return (
        <>
        {
            loading ?
            <Button disabled variant="destructive">
                <Loader2 className="animate-spin" />
                Cargando
            </Button>
            :
            <>
                {
                    (!loading && response.status === "error") &&
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            { response.message }
                        </AlertDescription>
                    </Alert>
                }

                <Button variant="destructive" onClick={deleteMessage}>Sí, eliminar</Button>    
            </>
        }
        </>
    );
}