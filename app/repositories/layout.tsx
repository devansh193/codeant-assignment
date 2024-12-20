import { DashSidebar } from "./_components/sidebar/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#FFFFFF] flex h-screen">
      <div>
        <DashSidebar />
      </div>
      <div className="md:ml-[250px] w-full">{children}</div>
    </div>
  );
};

export default DashLayout;
