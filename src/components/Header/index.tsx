import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu";
import Toggle from "../ToggleLanding";

const Header = () => {
  return (
    <div
      className="flex flex-row gap-x-5 justify-between w-full z-10 pb-9 
    px-[4.44vw] pt-[8.33vw] bg-indigo-950"
    >
      <Image
        className="w-auto h-auto aspect-auto z-10"
        src="logo.svg"
        alt="logo"
        width={161}
        height={43}
      />
      <div className="flex-none flex flex-row items-center justify-between w-2/5 z-10 ">
        <Toggle />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
