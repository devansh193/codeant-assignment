import { Plus, RefreshCcw, Search } from "lucide-react";

export const DashNav = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="font-sans font-semibold text-3xl">Repositories</h1>
        <p className="text-[#414651] text-sm my-1">33 total Repositories</p>
        <div className="mt-2 flex items-center justify-center border-2 border-[#EEEFF0] pl-2 rounded-lg">
          <Search className="text-[#414651] font-normal" />
          <input
            className="bg-[#FFFFFF] h-[40px] w-[400px] p-2 focus:ring-2 focus:ring-[#4A90E2] placeholder:text-[#414651]"
            placeholder="Search Repositories"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <button className="px-4 py-2 rounded-lg border border-[#DFE0E1]">
          <h1 className="flex items-center justify-center">
            <RefreshCcw className="mr-2 size-5" />
            Refresh all
          </h1>
        </button>
        <button className="bg-[#1470EF] px-4 py-2 rounded-lg border border-[#89AFE2]">
          <h1 className="text-white flex items-center justify-center ">
            <Plus className="mr-2" />
            Add Repository
          </h1>
        </button>
      </div>
    </div>
  );
};
