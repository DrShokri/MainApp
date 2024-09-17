export default function VideoListBox({ video, title, price }) {
  return (
    <div className="flex flex-col bg-white h-[270px] p-6 rounded-xl shadow-sm cursor-pointer">
      <div className="flex justify-center overflow-hidden">
        <div className="h-[140px] w-1/2 hover:scale-110 transition duration-300 ease-in-out">
          <img src={video} alt={title} />
        </div>
      </div>
      <h2 className="pt-6 text-3xl font-['rokhSemiBold'] hover:text-[#4dabf7] hover:duration-200">
        {title}
      </h2>
      <div className="flex justify-between items-center mt-12">
        <div className="text-3xl flex gap-1">
          <span className="font-[rokhBold]">{price}</span>
          <img
            src="../../public/picture/videos/toman.png"
            className="w-8 h-8"
          />
        </div>
        <span className="w-14 h-14 bg-[#dee2e6] rounded-full"></span>
      </div>
    </div>
  );
}
