/* eslint-disable react/prop-types */
import { FaFilter } from "react-icons/fa";

export default function VideoList() {
  return (
    <div className="container pt-10">
      <div className="bg-slate-300 p-10 flex justify-start">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
          <VideFilterText />
          <VideFilterBox
            pic="./picture/videos/product.png"
            title="گران ترین محصولات"
          />
          <VideFilterBox
            pic="./picture/videos/product.png"
            title="گران ترین "
          />
          <VideFilterBox
            pic="./picture/videos/product.png"
            title="گران ترین "
          />
          <VideFilterBox
            pic="./picture/videos/product.png"
            title="گران ترین "
          />
          <VideFilterBox
            pic="./picture/videos/product.png"
            title="گران ترین "
          />
        </div>
      </div>
    </div>
  );
}

function VideFilterText() {
  return (
    <div className="w-[200px] h-[165px] bg-white flex flex-col justify-center pr-4 leading-tight">
      <div className="flex gap-4 items-center">
        <div className="scale-150">
          <FaFilter color={"#495057"} size={20} />
        </div>
        <p className="textSmall">فیلتر محصولات</p>
      </div>
      <div>
        <h2 className="textBold">براساس :</h2>
      </div>
    </div>
  );
}

function VideFilterBox({ pic, title }) {
  return (
    <div className="bg-white w-[170px] h-[140px] rounded-xl shadow-sm flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-2/3 h-1/2 flex items-center">
          <img src={pic} alt="" />
        </div>
        <p className="text-2xl text-center text-[#495057]">{title}</p>
      </div>
    </div>
  );
}

// function VideoFilterPrice() {
//   return;
// }

// function VideoListBox() {
//   return;
// }

// function ProductCategories() {
//   return;
// }
