"use client";

import { tabsAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useRecoilState(tabsAtom);

  return (
    <div className="w-[624px] h-[60px] bg-[#FAFAFA] rounded-lg flex items-center border-2 border-[#E9EAEB]">
      {(["SAAS", "Self Hosted"] as const).map((option) => (
        <button
          key={option}
          className={`flex-1 h-full rounded-md text-md font-semibold transition-colors duration-100 ${
            activeTab === option
              ? "bg-blue-600 text-white"
              : "bg-transparent text-[#414651]"
          }`}
          onClick={() => setActiveTab(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
