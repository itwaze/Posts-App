import React from "react";
import Link from "next/link";
import { ButtonProps } from './types'


export const ButtonLink = ({
  className,
  children,
  href,
  hrefAs,
}: ButtonProps) => {
  return (
    <Link href={href} as={hrefAs}>
      <a className={className}>{children}</a>
    </Link>
  );
};
