import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 150,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "relative inline-block text-transparent bg-clip-text",
        "bg-gradient-to-r from-white via-purple-500 to-white",
        "animate-shiny bg-[length:200%_100%] bg-[position:0_0]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
