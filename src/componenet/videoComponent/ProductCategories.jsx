/* eslint-disable react/prop-types */
export default function ProductCategories({ category, number }) {
  return (
    <li className="bg-white font-['rokhSemiBold'] list-none flex justify-between items-center px-6 text-xl border-b text-[#339af0] h-[45px]">
      <a href="#" className="cursor-pointer">
        {category}
      </a>

      <span className="h-12 w-12 bg-[#339af0] rounded-full flex justify-center items-center text-white">
        {number}
      </span>
    </li>
  );
}
