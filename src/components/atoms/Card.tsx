import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CardProps {
    title: string;
    icon?: LucideIcon;
    children: React.ReactNode;
    className?: string;
    description?: string;
}

export function Card({ title, icon: Icon, children, className, description }: CardProps) {
    return (
        <div className={cn("bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300", className)}>
            <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{title}</h3>
                    {description && <p className="text-zinc-500 text-sm mt-1">{description}</p>}
                </div>
                {Icon && <Icon className="w-5 h-5 text-zinc-400" />}
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}
