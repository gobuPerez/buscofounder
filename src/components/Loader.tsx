import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="flex justify-center items-center my-10">
            <Loader2 className="animate-spin text-blue-600" />
        </div>
    )
}