import Logo from "@/components/icons/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
        <Logo className="size-12 mr-0 sm:mr-2 mb-4 sm:mb-0" />
        <h1 className="text-3xl sm:text-5xl font-sans font-medium text-center sm:text-left">
          CodeAnt AI
        </h1>
      </div>
      <div className="flex flex-col p-4 sm:p-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans text-center mb-6">
          Frontend Assignment
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-y-4 sm:gap-y-0 sm:gap-x-6">
          <Link href={"/sign-in"} className="block w-full sm:w-auto">
            <button className="w-full sm:w-[250px] relative overflow-hidden group bg-black hover:bg-gray-300 text-white font-sans font-medium text-xl sm:text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
                Login
              </span>
              <span className="absolute inset-0 bg-neutral-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </button>
          </Link>
          <Link href={"/repositories"} className="block w-full sm:w-auto">
            <button className="w-full sm:w-[250px] relative overflow-hidden group bg-black hover:bg-gray-300 text-white font-sans font-medium text-xl sm:text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
                Repositories
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
