/* eslint-disable react/jsx-props-no-spreading */
import "@/app/globals.css";
import Image from "next/image";

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

const AccentButton = ({
  text,
  props,
  isIcon,
}: {
  text: string;
  props?: BaseButtonAttributes;
  isIcon?: boolean;
}) => {
  return (
    <button
      {...props}
      type="submit"
      className="z-[7] flex flex-row gap-x-[3.2vw] items-center w-full justify-center rounded-md border border-transparent bg-green-750 
      px-8 py-3 text-base font-medium text-white hover:bg-green-700 
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      {text}
      {isIcon && (
        <Image
          src="/arrow-for-button.svg"
          alt="arrow icon"
          width={15}
          height={15}
          className="aspect-square"
        />
      )}
    </button>
  );
};
export default AccentButton;
