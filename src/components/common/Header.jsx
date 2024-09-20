import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

function Header() {
  return (
    <header
      className=" font-[IranSans] h-[150px] flex
      items-center justify-between max-w-[1200px]
      m-auto ~px-[12px]/[24px] min-w-[300px]"
    >
      <ul className="flex text-[#8A85A4] leading-[50px] ~min-[300px]:~text-[10px]/[19px] ~gap-[18px]/[28px]">
        <li className="cursor-pointer transition-all hover:text-[#212529] min-w-fit">
          صفحه اصلی
        </li>
        <li className="cursor-pointer transition-all hover:text-[#212529] min-w-fit">
          ویدیوی معرفی
        </li>
        <li className="cursor-pointer transition-all hover:text-[#212529] min-w-fit">
          دستاورد ها
        </li>
        <Button className="bg-[#3a5f7e] ~p-[10px]/[25px] ~mt-[8px]/[0px] max-sm:hidden text-white rounded-[15px]">
          درخواست مشاوره
        </Button>
      </ul>

      <div className="flex gap-2 ">
        <Tooltip
          className="font-[IranSans] bg-[#3a5f7e]  text-white"
          content="دکتر امیرحسین شکری"
        >
          <h1 className="cursor-default h-fit ~mt-[34px]/[40px] ~text-[16px]/[24px] ~ml-1/2 font-mono max-sm:hidden">
            Dr.Shokri
          </h1>
        </Tooltip>

        <img
          className="~h-[80px]/[100px] rounded-full w-auto"
          src="/picture/landing/Logo.jpg"
          alt="Logo"
        />
      </div>
    </header>
  );
}

export default Header;
