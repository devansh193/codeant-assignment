import { ArrowUp } from "lucide-react";
import Pie from "../icons/pie";

const Card = () => {
  return (
    <div className="rounded-3xl bg-white py-4 px-8 shadow-lg flex flex-col w-[270px] h-[164px] text-gray-800">
      <div className="flex items-center justify-between mb-2">
        <Pie className="size-16" />
        <div className="flex flex-col text-sm font-semibold">
          <h1 className="flex items-center">
            <ArrowUp className="text-[#0049C6] size-6" />
            <span className="text-[#0049C6] text-lg">14%</span>
          </h1>
          <h1 className="font-sans font-normal text-center">This week</h1>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-md font-bold font-sans">Issues fixed</h1>
        <h1 className="text-3xl font-bold font-sans">500K+</h1>
      </div>
    </div>
  );
};
export default Card;
