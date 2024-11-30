import { ChevronDown, ChevronUp } from "lucide-react";

const BottomStatistic = () => {
  return (
    <div className="bg-white p-2 flex justify-center items-center flex-col">
      <img src="./icons/statistics.png" className="size-10" />
      <h3 className="text-secondary text-[16px]">احصائيات زوار الموقع</h3>
      <p className="text-[22px] py-2 text-black">
        4,590 <span className="text-secondary text-[13px]">زائر</span>
      </p>
      <div className="flex justify-between flex-row w-full">
        <div className="flex justify-between flex-row items-center gap-2">
          <div className="size-3 bg-green-500 rounded-full"></div>
          Direct
        </div>
        <div className="flex justify-between flex-row items-center gap-2">
          15%
          <ChevronDown size={20} className="text-red-600" />
        </div>
      </div>
      <div className="flex justify-between flex-row w-full">
        <div className="flex justify-between flex-row items-center gap-2">
          <div className="size-3 bg-green-500 rounded-full"></div>
          Organic Search
        </div>
        <div className="flex justify-between flex-row items-center gap-2">
          80%
          <ChevronUp size={20} className="text-green-500" />
        </div>
      </div>
      <p className="text-[12px] text-[#ACACAC] pt-2">استعرض تقرير الزوار </p>
    </div>
  );
};
export default BottomStatistic;
