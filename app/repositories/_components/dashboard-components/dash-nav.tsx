"use client";

import { Plus, RefreshCcw, Search } from "lucide-react";
import { useRecoilState } from "recoil";
import { searchQueryAtom } from "@/recoil/atom/index";
import { repoData } from "@/constant";
export const DashNav = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col">
        <h1 className="font-sans font-semibold text-2xl md:text-3xl">
          Repositories
        </h1>
        <p className="text-[#414651] text-sm my-1">
          {repoData.length} total Repositories
        </p>
        <div className="mt-2 flex items-center justify-center border-2 border-[#EEEFF0] pl-2 rounded-lg">
          <Search className="text-[#414651] font-normal" />
          <input
            className="bg-[#FFFFFF] h-[40px] w-full md:w-[400px] p-2 placeholder:text-[#414651]"
            placeholder="Search Repositories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 md:mt-0">
        <button className="w-full md:w-auto px-4 py-2 rounded-lg border border-[#DFE0E1]">
          <h1 className="flex items-center justify-center">
            <RefreshCcw className="mr-2 size-5" />
            Refresh all
          </h1>
        </button>
        <button className="w-full md:w-auto bg-[#1470EF] px-4 py-2 rounded-lg border border-[#89AFE2]">
          <h1 className="text-white flex items-center justify-center ">
            <Plus className="mr-2" />
            Add Repository
          </h1>
        </button>
      </div>
    </div>
  );
};
