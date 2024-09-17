/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCategories from "../componenet/videoComponent/ProductCategories";
import FilterBoxTitle from "../componenet/videoComponent/FilterBoxTitle";
import VideFilterText from "../componenet/videoComponent/VideFilterText";
import VideFilterBox from "../componenet/videoComponent/VideFilterBox";
import VideoListBox from "../componenet/videoComponent/VideoListBox";
import VideoFilterPrice from "../componenet/videoComponent/VideoFilterPrice";

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

  const [category, setCategory] = useState([
    { category: "برنامه نویسی", number: 5 },
    { category: "فیزیک", number: 7 },
    { category: "شیمی", number: 20 },
    { category: "ریاضی", number: 65 },
    { category: "زیست", number: 42 },
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
        <div className="w-[70%] grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-10 pb-10">
          {videoList.map((vid) => (
            <VideoListBox
              video={vid.video}
              title={vid.title}
              price={vid.price}
              key={vid.title}
            />
          ))}
        </div>

        <div className="w-[30%] flex flex-col">
          <VideoFilterPrice />

          <div className="mt-12">
            <FilterBoxTitle title="دسته بندی محصولات" />

            <ul>
              {category.map((cat) => (
                <ProductCategories
                  category={cat.category}
                  number={cat.number}
                  key={cat.category}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
