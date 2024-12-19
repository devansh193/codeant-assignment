"use client";

import { useRecoilValue } from "recoil";
import { searchQueryAtom } from "@/recoil/atom/index";
import RepoCard from "@/components/repo-card";
import { DashNav } from "./_components/dashboard-components/dash-nav";
import { repoData } from "@/constant";

export default function Dashboard() {
  const searchQuery = useRecoilValue(searchQueryAtom);

  const filteredRepoData = repoData.filter((item) =>
    item.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#FAFAFA] w-full p-2 sm:p-4">
      <div className="bg-[#FFFFFF] rounded-lg sm:rounded-2xl border border-[#EDEEEE] shadow-sm">
        <div className="p-3 mt-16 md:mt-2 px-6 border-b border-[#EEEFF0]">
          <DashNav />
        </div>
        <div className="">
          {filteredRepoData.map((item) => (
            <RepoCard
              key={item.heading}
              heading={item.heading}
              label={item.label}
              language={item.language}
              size={item.size}
              updatedOn={item.updatedOn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
