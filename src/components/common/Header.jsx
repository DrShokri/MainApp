import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

// responsive menu:
import HamburgerMenu from "./HamburgerMenu";
import DefaultMenu from "./DefaultMenu";

function Header() {
  return (
    <header
      className="font-[IranSans] ~h-[70px]/[120px] flex items-center justify-between 
        max-w-[1200px] w-full px-[12px] min-w-[300px] m-auto"
    >
      <ul className="flex text-[#8A85A4] leading-[50px] ~min-[300px]:~text-[10px]/[19px] ~gap-[2px]/[28px]">
        <HamburgerMenu />
        <DefaultMenu />

        <Button className="bg-[#3a5f7e]   ~p-[10px]/[25px]  ~text-[10px]/[16px] ~mt-[8px]/[0px] text-white rounded-[15px] ">
          درخواست مشاوره
        </Button>
      </ul>

      <div className="flex gap-2 ">
        <Tooltip
          className="font-[IranSans] bg-[#3a5f7e]  text-white"
          content="دکتر امیرحسین شکری"
        >
          <h1 className="cursor-default h-fit ~mt-[18px]/[40px] ~text-[14px]/[24px] ~ml-1/2 font-mono">
            Dr.Shokri
          </h1>
        </Tooltip>

        <img
          className="~h-[50px]/[100px] rounded-full w-auto"
          src="/picture/landing/Logo.jpg"
          alt="Logo"
        />
      </div>
    </header>
  );
}

export default Header;
