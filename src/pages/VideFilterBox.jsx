export default function VideFilterBox({ pic, title }) {
  return (
    <div className="bg-white w-[170px] h-[140px] rounded-xl shadow-sm flex justify-center text-[#495057] hover:bg-[#4dabf7] hover:text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="w-2/3 h-1/2 flex items-center">
          <img src={pic} alt={title} />
        </div>
        <p className="text-2xl text-center font-['rokhMedum']">{title}</p>
      </div>
    </div>
  );
}
