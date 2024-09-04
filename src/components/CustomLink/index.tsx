"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import CustomLink from "./CustomLinkComponent";

interface MyLinkProps {
  text?: string;
  showIcon?: boolean;
  customStyle?: string;
  href?: string;
}

function ButtonAsLink({
  showIcon = false,
  text,
  customStyle,
  href,
}: Readonly<MyLinkProps>) {
  return (
    <Button
      href={href}
      as={CustomLink}
      color="primary"
      className={`relative z-[9] gap-x-[2.78vw] text-white bg-accent-gradient w-full p-3 rounded ${customStyle}`}
      showAnchorIcon={showIcon}
      variant="solid"
    >
      {text}
    </Button>
  );
}

export default ButtonAsLink;
