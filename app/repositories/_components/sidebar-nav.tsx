"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plus, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import Code from "@/components/icons/code";
import Cloud from "@/components/icons/cloud";
import HowTo from "@/components/icons/how-to";

const items = [
  {
    title: "Repositories",
    href: "/repositories",
    icon: Home,
  },
  {
    title: "AI Code Review",
    href: "/#",
    icon: Code,
  },
  {
    title: "Cloud Security",
    href: "/#",
    icon: Cloud,
  },
  {
    title: "How to use",
    href: "/#",
    icon: HowTo,
  },
  {
    title: "Setting",
    href: "/#",
    icon: Settings,
  },
];

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-start space-y-2">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex w-full items-center font-sans font-medium  justify-start rounded-lg p-2 text-md overflow-hidden ",
              isActive ? "bg-[#1470EF] text-[#FFFFFF]" : "text-black",
              "group"
            )}
          >
            <item.icon className="mr-2 h-5 w-5" />
            <span className="">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};
