import Logo from "@/components/icons/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-4 sm:px-8">
      {/* Logo*/}
      <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
        <Link
          className="flex items-center justify-center mb-4 sm:mb-0"
          href={"/"}
        >
          <Logo className="size-12 mr-2" />
          <h1 className="text-4xl sm:text-5xl font-sans font-medium">
            CodeAnt AI
          </h1>
        </Link>
      </div>

      {/* Error Message */}
      <div className="bg-neutral-900 px-4 py-4 sm:py-6 rounded-xl mt-4 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-white">
          Error: 404 Page does not exist
        </h1>
      </div>

      <div className="mt-6">
        <Link href={"/repositories"} className="block w-full sm:w-auto">
          <button className="w-full sm:w-[250px] relative overflow-hidden group bg-black hover:bg-gray-300 text-white font-sans font-medium text-lg sm:text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
              Go to repositories
            </span>
            <span className="absolute inset-0 bg-neutral-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          </button>
        </Link>
      </div>
    </div>
  );
}
