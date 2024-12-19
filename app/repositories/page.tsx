import { DashNav } from "./_components/dashboard-components/dash-nav";

export default function Dashboard() {
  return (
    <div className="bg-[#FAFAFA] w-full h-full p-4">
      <div className="bg-[#FFFFFF] h-full rounded-2xl border-2 border-[#EDEEEE shadow-sm">
        <div className="p-6 border-b-2 border-[#EEEFF0]">
          <DashNav />
        </div>
      </div>
    </div>
  );
}
