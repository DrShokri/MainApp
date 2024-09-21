import { Button } from "@nextui-org/button";

export default function HeroSection() {
  return (
    <section className="text-black flex flex-col sm:flex-row-reverse ~mt-[100px]/[200px] max-w-[1200px] px-6 m-auto  gap-6">
      <div className="container sm:w-1/2 flex justify-center md:justify-end">
        <img
          src="picture/heroSection/ImgAmir.JPG"
          className="rounded-[10px]"
          alt=""
        />
      </div>
      <div className="sm:w-1/2 max-md:text-center flex flex-col max-md:items-center ~py-[10px]/[60px] px-2">
        <h1 className="font-['rokhBold'] ~text-[24px]/[44px] text-[#495057] w-4/5 mb-4 max-md:leading-7">
          <span className="text-[#1c7ed6]"> یادگیری و آموزش زبان </span>
          ساده تر از اونیـــــــه که فکرشو میکنـــــــی
        </h1>
        <p className="font-['rokhMedum'] ~text-[16px]/[24px] leading-8 text-[#868e96] line-clamp-5 text-start">
          زبان آموز، در راستــــای امــر ارتقــــاء سطــــح آمـوزش زبان‌ ترکــی
          استانبولـــی، فرانسه، آلــمانی و زبان انگلیسی؛ تلاش بر این دارد تا
          یادگیری این زبان‌ها را با ابزارهـــــای کاربــــــــــردی و هم‌چنین
          پشتیبانـــــی قوی، برای زبان‌آمــــوزان راحـــت‌تر کند.
        </p>
        <div className="flex gap-5 mt-16 max-md:flex-col">
          <Button className="bg-[#3a5f7e] text-white w-[250px] h-[75px] text-[22px] rounded-[20px]">
            <a
              href="https://www.instagram.com/drshokri_biology?igsh=MWowZTd0dXM0MDlzbw=="
              target="_blank"
            >
              شروع یادگیری
            </a>
          </Button>
          <Button className="bg-[#cfdde9] text-[#3a5f7e] w-[250px] h-[75px] text-[22px] rounded-[20px]">
            <a
              href="https://www.instagram.com/drshokri_biology?igsh=MWowZTd0dXM0MDlzbw=="
              target="_blank"
            >
              درخواست مشاوره
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
