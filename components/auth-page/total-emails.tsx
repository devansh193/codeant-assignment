import Logo from "../icons/logo";

const content = [
  {
    numbers: "30+",
    label: "Language Support",
  },
  {
    numbers: "10K+",
    label: "Developers",
  },
  {
    numbers: "100K+",
    label: "Hours Saved",
  },
];

export const TotalEmails = () => {
  return (
    <div className="w-full max-w-[450px] h-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-4 pt-4">
        <Logo className="size-6 mr-1" />
        <h1 className="font-semibold text-base sm:text-lg text-gray-800">
          AI to Detect & Autofix Bad Code
        </h1>
      </div>

      {/* Divider */}
      <div className="w-full bg-[#E5E5E5] h-[1px] shadow-md mt-4 mb-2" />

      {/* Content */}
      <div className="flex justify-center px-4 py-4">
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {content.map((item) => (
            <div key={item.label} className="text-center">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                {item.numbers}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
