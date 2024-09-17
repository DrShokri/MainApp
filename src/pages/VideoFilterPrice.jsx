import { useState } from "react";
import FilterBoxTitle from "./FilterBoxTitle";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";

export default function VideoFilterPrice() {
  const [filterBottomPrice, setFilterBottomPrice] = useState(0);
  const [filterTopPrice, setFilterTopPrice] = useState([]);

  return (
    <div className="bg-white rounded-xl font-['rokhSemiBold']">
      <FilterBoxTitle title="فیلتر براساس قیمت" />

      <div className="flex gap-8 items-center justify-center mt-10 mx-6">
        <FilterInput
          value={filterBottomPrice}
          onChange={setFilterBottomPrice}
        />

        <FilterInput value={filterTopPrice} onChange={setFilterTopPrice}>
          تا
        </FilterInput>
      </div>
      <FilterButton item="اعمال فیلتر" />
    </div>
  );
}
