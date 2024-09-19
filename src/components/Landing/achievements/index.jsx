import { Tabs, Tab } from "@nextui-org/react";
import StudyVector from "./StudyVector";

export default function App() {
  const students = {
    Pezeshki: [
      { name: "آناهیتا دیانت", city: "ساری" },
      { name: "رومینا جعفریان", city: "ساری" },
      { name: "عرفان نیکخو", city: "ساری" },
      { name: "فاطمه فکری", city: "ساری" },
      { name: "پدرام خاکی", city: "گرگان" },
      { name: "فریار امینی", city: "بقیه الله" },
      { name: "روژینا جعفریان", city: "بابل" },
      { name: "رضا اسدی", city: "زاهدان" },
      { name: "مهدیه روحی", city: "بندر عباس" },
    ],
    Dandan: [
      { name: "سپهر قنبری", city: "ساری" },
      { name: "بردیا کیاکجوری", city: "رشت" },
      { name: "پارسا نصیری", city: "بندرعباس" },
    ],
  };

  return (
    <div className="h-fit w-fit m-auto mt-20 text-[26px]">
      <h1 className="mb-7 w-fit m-auto">
        <span className="border-b-4 border-blue-500">برخی</span> از{" "}
        <span className="font-['rokhSemiBold'] text-blue-500">قبولی</span> هامون
      </h1>

      <div className="flex ">
        <div className="flex w-full h-full flex-col font-['rokhSemiBold'] ">
          <Tabs aria-label="Options">
            <Tab key="firstTab" title="پزشکی">
              {students.Pezeshki.map((items, key) => (
                <ul
                  key={key}
                  className="list-disc text-[20px] mr-4 mt-3 flex flex-col gap-3"
                >
                  <li className="flex flex-row  ">
                    <li></li>
                    <div className="flex flex-row gap-10">
                      <h2>{items.name}</h2>{" "}
                      <h5>
                        <span className="text-blue-500">پزشکی</span>{" "}
                        {items.city}
                      </h5>
                    </div>
                  </li>
                </ul>
              ))}
            </Tab>
            <Tab key="secondTab" title="دندانپزشکی">
              {students.Dandan.map((items, key) => (
                <ul
                  key={key}
                  className="list-disc text-[20px] mr-4 mt-3 flex flex-col gap-3"
                >
                  <li className="flex flex-row  ">
                    <li></li>
                    <div className="flex flex-row gap-10">
                      <h2>{items.name}</h2>{" "}
                      <h5>
                        <span className="text-blue-500">دندان</span>{" "}
                        {items.city}
                      </h5>
                    </div>
                  </li>
                </ul>
              ))}
            </Tab>
          </Tabs>
        </div>

        <StudyVector />
      </div>
    </div>
  );
}
