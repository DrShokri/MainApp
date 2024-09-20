import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

function TopFooter() {
  return (
    <div className="bg-[#f0f0f0] flex max-sm:flex-col items-center justify-center gap-10 font-['rokhNormal'] py-10 px-4">
      <div className="flex flex-col bg-white w-4/5 sm:w-[400px] rounded-xl shadow-sm pr-4 pl-8 py-4">
        <div className="w-14 mb-2">
          <img
            src="../../../../public/picture/landing/Logo.jpg"
            className="rounded-full"
            alt=""
          />
        </div>
        <p className="leading-6 text-[#495057]">
          لورم ایپسوم متن ساختگــــی با تولید سادگــــــی نامفهوم از صنعت چاپ و
          بــــا استفاده از طراحان گرافیــــک است
        </p>
        <span className="border border-[#e9ecef] mt-4"></span>
        <ul className="flex gap-4 mt-4 text-[#868e96] text-sm">
          <li className="hover:scale-105 cursor-pointer">صفحه اصلی</li>
          <li className="hover:scale-105 cursor-pointer">فروشگاه</li>
          <li className="hover:scale-105 cursor-pointer">پنل کاربری</li>
        </ul>
      </div>
      <div className="~w-[300px]/[600px] text-xl flex flex-col">
        <div className="flex justify-between gap-2 pl-16">
          <h3 className="font-['rokhMedum'] ~text-[18px]/[24px]">
            به
            <span className="text-[#1971c2] font-['rokhSemiBold']">
              پشتیبانی
            </span>
            نیاز دارید ؟
          </h3>
          <div className="flex gap-2">
            <span className="text-md font-['rokhSemiBold'] text-[#868e96] ~text-[14px]/[20px]">
              ۰11-23456789
            </span>
            <FiPhoneCall color="#495057" />
          </div>
        </div>
        <p className="text-[#868e96] font-['rokhMedum'] ~text-[14px]/[20px] line-clamp-1">
          لورم ایپسوم متن ساختگی با تولید سادگی است
        </p>
        <div className="border border-[#dee2e6] my-4"></div>
        <div className="flex flex-wrap justify-between items-center gap-2 text-md text-[#343a40]">
          <div className="flex justify-center-center gap-4">
            <GrLocation color="#868e96" />
            <span className="text-[#495057] text-sm font-['rokhSemiBold']">
              تهران, ولنجک
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Amirhossein@gmail.com</span>
            <HiOutlineMail color="#868e96" />
          </div>
        </div>
        <div className="mt-4 flex gap-4 overflow-hidden">
          <button className="bg-white px-2 py-1 rounded-md text-[#495057] font-['rokhMedum'] hover:scale-105 ">
            تیکت 1
          </button>
          <button className="bg-white px-2 py-1 rounded-md text-[#495057] font-['rokhMedum'] hover:scale-105 ">
            تیکت 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
