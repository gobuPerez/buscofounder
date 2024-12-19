import { cn } from "@/lib/utils";

export default function Logo({ styles = "" }: { styles?: string}) {
    return (
        <h1 className={cn("inline", styles)}>
           <span className="font-bold text-blue-400">bus</span><span className="font-bold text-blue-600">cofounder</span>
        </h1>
    );
}