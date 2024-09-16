/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function VideoList() {
  const [videoFilter, setVideoFilter] = useState([
    {
      pic: "./picture/videos/product.png",
      title: "گران ترین محصولات",
    },
    {
      pic: "./picture/videos/product.png",
      title: "ارزان ترین محصولات",
    },
    {
      pic: "./picture/videos/product.png",
      title: "جدید ترین محصولات",
    },
    {
      pic: "./picture/videos/product.png",
      title: "قدیمی ترین محصولات",
    },
    {
      pic: "./picture/videos/product.png",
      title: "پرفروش ترین محصولات",
    },
  ]);

  const [videoList, setVideoList] = useState([
    {
      video: "../../public/picture/videos/92a01212.webp",
      title: "ویدیو آموزشی درس  X",
      price: "10,000",
    },
    {
      video: "../../public/picture/videos/92a01212.webp",
      title: "ویدیو آموزشی درس  Z",
      price: "1,000",
    },
    {
      video: "../../public/picture/videos/92a01212.webp",
      title: "ویدیو آموزشی درس  B",
      price: "190,000",
    },
    {
      video: "../../public/picture/videos/92a01212.webp",
      title: "ویدیو آموزشی درس  Y",
      price: "160,000",
    },
    {
      video: "../../public/picture/videos/92a01212.webp",
      title: "ویدیو آموزشی درس  V",
      price: "140,000,000",
    },
    {
      video: "../../public/picture/videos/92a01212.webp",
      title: "ویدیو آموزشی درس  A",
      price: "5,000",
    },
    {
      video: "../../public/picture/videos/92a01212.webp",
      title: "ویدیو آموزشی درس  S",
      price: "750,000",
    },
  ]);

  return (
    <>
      <div className="container mx-auto pt-10 w-[80%]">
        <div className="p-10 flex justify-start">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
            <VideFilterText title="بر اساس:" product="فیلتر محصولات" />

            {videoFilter.map((filter) => (
              <VideFilterBox
                pic={filter.pic}
                title={filter.title}
                key={filter.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 my-16 flex gap-10 max-w-screen-xl">
        <div className="w-[65%] grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-10 pb-10">
          {videoList.map((vid) => (
            <VideoListBox
              video={vid.video}
              title={vid.title}
              price={vid.price}
              key={vid.title}
            />
          ))}
        </div>

        <div className="w-[35%] bg-red-500"></div>
      </div>
    </>
  );
}

function VideFilterText({ title, product }) {
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

function VideFilterBox({ pic, title }) {
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

function VideoListBox({ video, title, price }) {
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

// function VideoFilterPrice() {
//   return;
// }

// function ProductCategories() {
//   return;
// }
