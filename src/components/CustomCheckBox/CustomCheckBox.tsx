/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
import { forwardRef } from "react";
import {
  useCheckbox,
  Chip,
  VisuallyHidden,
  tv,
  CheckboxProps as BaseCheckboxProps,
} from "@nextui-org/react";

export interface CheckboxProps extends BaseCheckboxProps {}

const checkbox = tv({
  slots: {
    base: "border-none w-full rounded-lg px-0 justify-items-stretch   hover:bg-greyText opacity-50",
    content: "text-white",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-primary bg-accentColor hover:bg-accentColor opacity-100 hover:border-accentColor",
        content: "text-white",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
});

const CustomCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      children,
      isSelected,
      isFocusVisible,
      getBaseProps,
      getLabelProps,
      getInputProps,
    } = useCheckbox({
      ...props,
    });

    const styles = checkbox({ isSelected, isFocusVisible });

    return (
      <label {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <Chip
          classNames={{
            base: styles.base(),
            content: styles.content(),
          }}
          variant="light"
          size="lg"
          radioGroup=""
          radius="md"
          defaultValue={isSelected}
          {...getLabelProps()}
        >
          {children || (isSelected ? "Enabled" : "Disabled")}
        </Chip>
      </label>
    );
  }
);

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;
