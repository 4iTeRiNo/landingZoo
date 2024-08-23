/* eslint-disable react/jsx-props-no-spreading */
import "@/app/globals.css";

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

const AccentButton = ({
  text,
  props,
}: {
  text: string;
  props?: BaseButtonAttributes;
}) => {
  return (
    <button
      {...props}
      type="submit"
      className="z-[7]  w-full justify-center rounded-md border border-transparent bg-green-750 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};
export default AccentButton;
