import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <Logo className="size-12 mr-2" />
        <h1 className="text-5xl font-sans font-medium">CodeAnt AI</h1>
      </div>
      <div className="flex flex-col p-8">
        <h1 className="text-7xl font-sans text-center">Frontend Assignment</h1>
        <div className="flex items-center justify-center p-8 gap-x-6">
          <Link href={"/sign-in"} className="block">
            <button className="w-[250px] relative overflow-hidden group bg-black hover:bg-gray-300 text-white font-sans font-medium text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
                Login
              </span>
              <span className="absolute inset-0 bg-neutral-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </button>
          </Link>
          <Link href={"/dashboard"} className="block">
            <button className="w-[250px] relative overflow-hidden group bg-black hover:bg-gray-300 text-white font-sans font-medium text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
                Dashboard
              </span>
              <span className="absolute inset-0 bg-neutral-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
