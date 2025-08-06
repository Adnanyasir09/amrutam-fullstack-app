import { Search, ShoppingBag } from "lucide-react";

const StoreHero = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover py-10"
      style={{
        backgroundImage: "url('/f1.jpg')",
        backgroundPosition: "center",
        backgroundColor: "#e5f3f1", // fallback color if image fails
      }}
    >
      {/* Center content */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-6">Store</h1>

        {/* Search Bar */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center w-full max-w-xl bg-white rounded-full px-4 py-2 shadow-md">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for Kuntal Care"
              className="flex-grow focus:outline-none text-gray-700"
            />
          </div>

          {/* Cart Button */}
          <button className="bg-white rounded-md p-2 shadow-md">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreHero;
