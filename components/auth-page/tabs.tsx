"use client";

import { tabsAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useRecoilState(tabsAtom);

  return (
    <div className="w-[600px] h-[40px] sm:h-[60px] bg-[#FAFAFA] rounded-lg flex flex-row items-center border-2 border-[#E9EAEB]">
      {(["SAAS", "Self Hosted"] as const).map((option) => (
        <button
          key={option}
          className={`flex-1 h-full px-2 sm:px-4 text-xs sm:text-sm md:text-md font-semibold transition-colors duration-100 rounded-lg ${
            activeTab === option
              ? "bg-[#1470EF] text-white"
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
