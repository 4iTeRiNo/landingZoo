import { forwardRef } from "react";

import { LinkProps, useLink } from "@nextui-org/react";
import { ArrowForButtonIcon } from "@/shared/svg";

export interface MyLinkProps extends LinkProps {}

const CustomLink = forwardRef<HTMLAnchorElement, MyLinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <ArrowForButtonIcon />,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

CustomLink.displayName = "CustomLink";

export default CustomLink;
