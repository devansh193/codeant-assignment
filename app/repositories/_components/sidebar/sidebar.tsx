"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarContent } from "./sidebar-content";
import Logo from "@/components/icons/logo";

export const DashSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isDesktop) {
    return (
      <div className="hidden md:flex fixed top-0 left-0 w-[250px] h-full flex-col p-2 border-r">
        <SidebarContent />
      </div>
    );
  }

  return (
    <>
      <nav className="md:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 bg-background border-b z-50">
        <div className="flex items-center">
          <Logo className="mr-2" />
          <h1 className="font-sans font-light text-2xl">CodeAnt AI</h1>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};
