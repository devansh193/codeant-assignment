import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navigation } from "./sidebar-nav";
import Logo from "@/components/icons/logo";
import { LogOut, Phone } from "lucide-react";
import Dropdown from "@/components/dropDown";

const bottomContent = [
  {
    title: "Support",
    href: "/support",
    icon: Phone,
  },
  {
    title: "Logout",
    href: "/#",
    icon: LogOut,
  },
];

const options = ["UtkarshDhairyaPatel", "CodeAnt", "Devansh"];

export const SidebarContent = () => {
  return (
    <div className="flex flex-col h-full p-2">
      <div className="px-2 pt-2 flex items-center justify-start p-2 gap-x-2">
        <Link className="flex items-center justify-center" href={"/"}>
          <Logo className="mr-2" />
          <h1 className="font-sans font-light text-3xl">CodeAnt AI</h1>
        </Link>
      </div>
      <div className="p-4">
        <Dropdown
          options={options}
          onChange={(value) => console.log("Selected:", value)}
          placeholder="Select a user"
        />
      </div>
      <div className="p-4 flex-grow">
        <Navigation />
      </div>
      <div className="flex flex-col p-4 gap-y-2">
        {bottomContent.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex w-full items-center font-sans font-medium  justify-start rounded-lg p-2 text-md overflow-hidden"
            )}
          >
            <item.icon className="mr-2 h-5 w-5" />
            <span className="">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
