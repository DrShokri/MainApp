function VideoSection() {
  return (
    <div className="flex flex-col items-center relative mb-12">
      <section className="container flex flex-row-reverse max-md:flex-col max-md:items-center gap-6 my-24 px-8 py-6 md:w-[1200px] rounded-2xl bg-white z-10">
        <div className="container md:w-1/2 flex md:justify-end bg-black rounded-2xl h-[300px]"></div>
        <div className="md:w-1/2 max-md:text-center flex flex-col max-md:items-center ~py-[10px]/[60px] px-2">
          <h1 className="font-['rokhSemiBold'] ~text-[24px]/[40px] text-[#495057] w-4/5 mb-4 ">
            <span className="font-['rokhBold']">ویدیو مربوطه ،</span> جهت تست
          </h1>
          <p className="font-['rokhMedum'] ~text-[16px]/[24px] leading-8 text-[#868e96] line-clamp-5 text-start">
            لورم ایپسوم متن ساختگـــــــــی با تولیـــــــــد سادگـــــــــی
            نامفهوم از صنـــــــــعت چاپ و با استفاده از طراحان گرافیـــــــــک
            است
          </p>
        </div>
      </section>
      <div className="bg-[#1971c2] h-[70px] md:h-[300px] w-full md:absolute top-[200px] z-0"></div>
    </div>
  );
}

export default VideoSection;
