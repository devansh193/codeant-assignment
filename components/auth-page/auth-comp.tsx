"use client";
import { tabsAtom } from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import Github from "../icons/github";
import Gitlab from "../icons/gitlab";
import Azure from "../icons/azure";
import Bitbucket from "../icons/bitbucket";
import SSO from "../icons/sso";

const saasContent = [
  {
    logo: <Github className="size-6 md:size-8 mr-2" />,
    label: "Sign in with Github",
  },
  {
    logo: <Bitbucket className="size-6 md:size-8 mr-2" />,
    label: "Sign in with Bitbucket",
  },
  {
    logo: <Azure className="size-6 md:size-8 mr-2" />,
    label: "Sign in with Azure Devops",
  },
  {
    logo: <Gitlab className="size-6 md:size-8 mr-2" />,
    label: "Sign in with Gitlab",
  },
];

const selfContent = [
  {
    logo: <Gitlab className="size-4 md:size-8 s mr-2" />,
    label: "Self Hosted Gitlab",
  },
  {
    logo: <SSO className="size-8 mr-2" />,
    label: "Sign in with SSO",
  },
];

export const AuthComponent = () => {
  const tab = useRecoilValue(tabsAtom);
  return (
    <>
      {tab === "SAAS" ? (
        <div className="flex  flex-col items-center justify-center gap-y-4 p-4">
          {saasContent.map((item) => (
            <div
              key={item.label}
              className="border sm:h-[60px] h-[50px] w-[300px] sm:w-[350px] border-[#D6D7DA] flex items-center justify-center rounded-lg"
            >
              {item.logo}
              <h1 className="font-sans font-bold sm:text-md text:sm">
                {item.label}
              </h1>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex  flex-col items-center justify-center gap-y-4 p-4">
          {selfContent.map((item) => (
            <div
              key={item.label}
              className="border sm:h-[60px] h-[50px] w-[300px] sm:w-[350px] border-[#D6D7DA] flex items-center justify-center rounded-lg"
            >
              {item.logo}
              <h1 className="font-sans font-bold text:sm sm:text-md">
                {item.label}
              </h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
