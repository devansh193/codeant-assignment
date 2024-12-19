import { Database, Dot } from "lucide-react";

interface RepoCardProps {
  heading: string;
  label: string;
  language: string;
  size: string;
  updatedOn: string;
}

const RepoCard = ({
  heading,
  label,
  language,
  size,
  updatedOn,
}: RepoCardProps) => {
  const calculateDaysAgo = (date: string): string => {
    const updatedDate = new Date(date);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - updatedDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays === 0
      ? "Updated today"
      : `Updated ${differenceInDays} day${differenceInDays > 1 ? "s" : ""} ago`;
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-start justify-center pt-4 pb-2 px-6 border-b border-[#D6D7DA]">
        <div className="flex items-center justify-center gap-x-4">
          <h1 className="font-sans text-xl font-medium">{heading}</h1>
          <h1 className="bg-[#EFF8FF] px-2 rounded-full border-2 border-[#B2DDFF] text-sm text-[#175CD2]">
            {label}
          </h1>
        </div>
        <div className="flex items-center gap-x-6">
          <h1 className="flex items-center font-sans text-sm test-[#181D27]">
            {language} <Dot className="text-[#1671EE] size-12" />
          </h1>
          <h1 className="flex items-center font-sans text-sm test-[#181D27]">
            <Database className="size-3 mr-2" /> {size} KB
          </h1>
          <h1 className="flex items-center font-sans text-sm test-[#181D27]">
            {calculateDaysAgo(updatedOn)}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default RepoCard;
