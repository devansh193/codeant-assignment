import Link from "next/link";
import Logo from "../icons/logo";
import { AuthComponent } from "./auth-comp";
import { Tabs } from "./tabs";
import { Separator } from "@/components/ui/separator";

const Space = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-auto">
      <div className="bg-white rounded-xl border h-[600px] overflow-auto flex flex-col w-full max-w-[650px]">
        <div className="">
          <div className="flex-grow overflow-auto px-4 sm:px-24">
            <div className="pb-8">
              <div className="flex items-center justify-center pt-4">
                <Link href={"/"} className="flex items-baseline justify-center">
                  <Logo className="mr-2" />
                  <h1 className="font-sans text-2xl md:text-3xl">CodeAnt AI</h1>
                </Link>
              </div>
              <div className="py-4 md:py-8 flex items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold text-[#181D27] text-center">
                  Welcome to CodeAnt AI
                </h1>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Tabs />
              </div>
            </div>
          </div>
          <Separator className="bg-gray-200 w-f" />
          <div className="px-6">
            <AuthComponent />
          </div>
        </div>
      </div>
      <div className="mt-2 sm:mt-6">
        <h1 className="font-sans text-sm">
          By signing up you agree to{" "}
          <span className="font-sans font-semibold">Privacy Policy</span>
        </h1>
      </div>
    </div>
  );
};

export default Space;
