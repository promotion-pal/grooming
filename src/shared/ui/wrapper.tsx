"use client";

import { FC } from "react";
import { CommonStyleProps } from "./types";
import { cn } from "prom-pal-ui";

interface CommonWrapperProps extends CommonStyleProps {
  children: React.ReactNode;
}
const CommonWrapper: FC<CommonWrapperProps> = ({ children, styleWrapper }) => {
  return (
    <section
      className={cn(
        "bg-wrapper rounded-xl p-4 text-wrapper-foreground",
        styleWrapper,
      )}
    >
      {children}
    </section>
  );
};

export { CommonWrapper };
