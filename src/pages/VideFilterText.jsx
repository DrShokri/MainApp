import { FaFilter } from "react-icons/fa";

export default function VideFilterText({ title, product }) {
  return (
    <div className="w-[200px] h-[165px] bg-white flex flex-col justify-center pr-4 leading-tight">
      <div className="flex gap-4 items-center">
        <div className="scale-150">
          <FaFilter color={"#495057"} size={20} />
        </div>
        <p className="text-4xl font-['rokhNormal']">{product}</p>
      </div>
      <div>
        <h2 className="textBold font-['rokhBold']">{title}</h2>
      </div>
    </div>
  );
}
