import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// taken from shadcn/ui, function name and all
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export { cn };

