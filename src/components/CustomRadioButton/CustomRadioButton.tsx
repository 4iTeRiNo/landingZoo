"use client";

import { useRadio, VisuallyHidden, RadioProps, cn } from "@nextui-org/react";

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center justify-center hover:bg-content2 bg-transparent",
        "max-w-[360px] cursor-pointer border border-borderColor rounded gap-4 p-2 bg-transparent",
        "data-[selected=true]:border-accentColor data-[selected=true]:bg-transparent data-[selected=true]:text-white"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-greyText text-foreground">
            {description}
          </span>
        )}
      </div>
    </Component>
  );
};

export default CustomRadio;
