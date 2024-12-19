"use client";

import { tabsAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useRecoilState(tabsAtom);

  return (
    <div className="w-full h-auto min-h-[40px] sm:h-[60px] bg-[#FAFAFA] rounded-lg flex flex-row items-stretch border-2 border-[#E9EAEB] p-1">
      {(["SAAS", "Self Hosted"] as const).map((option) => (
        <button
          key={option}
          className={`flex-1 px-2 sm:px-4 text-xs sm:text-sm md:text-md font-semibold transition-colors duration-100 rounded-md ${
            activeTab === option
              ? "bg-blue-600 text-white"
              : "bg-transparent text-[#414651] hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
