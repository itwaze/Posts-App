import { ReactNode } from 'react';
import { LinkProps } from "next/link";

export interface ButtonProps extends LinkProps {
  className?: string | undefined;
  children: ReactNode;
  hrefAs?: string | undefined;
}