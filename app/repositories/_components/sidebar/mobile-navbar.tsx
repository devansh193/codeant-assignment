import { PanelRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export const MobileNavbar = () => {
  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 bg-background border-b z-50">
      <div className="flex items-center">
        {/* Replace with your actual logo */}
        <span className="text-xl font-bold">Logo</span>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <PanelRight className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </SheetTrigger>
      </Sheet>
    </nav>
  );
};
