import Card from "@/components/auth-page/card";
import Space from "@/components/auth-page/space";
import { TotalEmails } from "@/components/auth-page/total-emails";
import Substrate from "@/components/icons/substrate";

const Signin = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex col-span-1 bg-white items-start pt-24 lg:pt-48 justify-center h-full relative">
        <div className="relative">
          <TotalEmails />
          <div className="absolute bottom-[-120px] sm:bottom-[-160px] right-[-20px] sm:right-[-30px]">
            <Card />
          </div>
        </div>
        <div className="absolute bottom-2 left-0">
          <Substrate className="w-[200px] sm:w-[284px] h-[220px] sm:h-[320px]" />
        </div>
      </div>
      <div className="col-span-1 bg-[#FAFAFA] flex items-center justify-center border-0 lg:border-l-2 px-4">
        <Space />
      </div>
    </div>
  );
};

export default Signin;
