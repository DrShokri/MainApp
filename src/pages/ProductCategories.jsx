export default function ProductCategories({ category, number }) {
  return (
    <div className="bg-white font-['rokhSemiBold']">
      <div className="flex justify-between items-center px-6 text-xl border-b text-[#339af0] h-[45px]">
        <span>{category}</span>
        <div className="h-12 w-12 bg-[#339af0] rounded-full flex justify-center items-center text-white">
          {number}
        </div>
      </div>
    </div>
  );
}
