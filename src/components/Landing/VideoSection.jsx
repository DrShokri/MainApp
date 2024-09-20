import VideoIframe from "./VideoIframe";

function VideoSection() {
  return (
    <div className="flex flex-col items-center relative my-12">
      <section className="container flex flex-row-reverse max-md:flex-col max-md:items-center gap-6 md:my-24 px-8 py-6 md:w-[1200px] rounded-2xl bg-white z-10">
        <div className="container md:w-1/2 flex md:justify-end bg-black relative rounded-2xl max-md:h-[280px] overflow-hidden">
          <VideoIframe videoHash="uaix704" />
        </div>

        <div className="md:w-1/2 max-md:text-center flex flex-col max-md:items-center ~py-[10px]/[36px] px-2">
          <h1 className="font-['rokhSemiBold'] ~text-[24px]/[40px] text-[#495057] w-4/5 mb-4">
            <span className="font-['rokhBold']">ویدیو مربوطه ،</span> جهت تست
          </h1>
          <p className="font-['rokhMedum'] ~text-[16px]/[24px] leading-8 text-[#868e96] line-clamp-5 text-start">
            لورم ایپسوم متن ساختگـــــــــی با تولیـــــــــد سادگـــــــــی
            نامفهوم از صنـــــــــعت چاپ و با استفاده از طراحان گرافیـــــــــک
            است
          </p>
          <div className="flex max-md:flex-wrap justify-center h-[70px] max-md:w-full gap-4 mt-8">
            <div className="shadow-md rounded-xl w-1/3 flex flex-col gap-2 justify-center items-center">
              <span className="font-['rokhBold'] text-[#343a40]">5+</span>
              <span className="font-['rokhMedum'] text-[#868e96] ~text-[14px]/[20px]">
                دانشجو
              </span>
            </div>
            <div className="shadow-md rounded-xl w-1/3 flex flex-col gap-2 justify-center items-center">
              <span className="font-['rokhBold'] text-[#343a40]">+2</span>
              <span className="font-['rokhMedum'] text-[#868e96] ~text-[14px]/[20px]">
                ساعت
              </span>
            </div>
            <div className="shadow-md rounded-xl w-1/3 max-md:w-2/3 flex flex-col gap-2 justify-center items-center">
              <span className="font-['rokhBold'] text-[#343a40]">1-</span>
              <span className="font-['rokhMedum'] text-[#868e96] ~text-[14px]/[20px]">
                سال تجربه
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#1971c2] h-[70px] md:h-[300px] w-full md:absolute top-[200px] z-0"></div>
    </div>
  );
}

export default VideoSection;
