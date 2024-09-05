import HamburgerMenu from "@/components/HamburgerMenu";

const Header = () => {
  return (
    <div
      className="flex flex-row gap-x-5 justify-between  w-full z-10
    px-[4.44vw] py-[8.33vw] bg-bgColor"
    >
      <h1 className="font-montserrat flex flex-row items-end gap-x-1 text-3xl font-extrabold z-10 text-white">
        ZooRama
        <p className="relative z-10 text-white leading-[1.3rem] text-xs font-normal">
          Бизнес
        </p>
      </h1>
      <div className="flex-none flex flex-row items-center justify-end w-2/5 z-10 ">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
