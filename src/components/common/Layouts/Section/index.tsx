import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface ISectionProps extends ComponentPropsWithoutRef<"section"> {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Section({
  className = "",
  children,
  fullWidth = false,
  ...rest
}: ISectionProps) {
  return (
    <section
      className={cn(!fullWidth && "container", className)}
      {...rest}
    >
      {fullWidth ? <div className="container">{children}</div> : children}
    </section>
  );
}
