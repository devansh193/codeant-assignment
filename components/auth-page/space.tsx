import Link from "next/link";
import Logo from "../icons/logo";
import { AuthComponent } from "./auth-comp";
import { Tabs } from "./tabs";

const Space = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="bg-white h-full rounded-xl border-2 p-6 md:p-8">
        <div className="pb-8">
          <div className="flex items-center justify-center pt-4">
            <Link href={"/"} className="flex items-baseline justify-center">
              <Logo className="mr-2" />
              <h1 className="font-sans text-2xl md:text-3xl">CodeAnt AI</h1>
            </Link>
          </div>
          <div className="py-4 md:py-8 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#181D27] text-center">
              Welcome to CodeAnt AI
            </h1>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Tabs />
          </div>
        </div>
        <div className="bg-gray-300 h-px w-full" />
        <div>
          <AuthComponent />
        </div>
      </div>
      <div className="pt-6 text-center">
        <h1 className="text-sm md:text-base">
          By signing up you agree to the{" "}
          <span className="font-semibold">Privacy Policy</span>
        </h1>
      </div>
    </div>
  );
};

export default Space;
