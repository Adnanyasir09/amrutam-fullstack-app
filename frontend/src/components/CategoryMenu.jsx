import React from "react";

const categories = [
  { name: "Hair", image: "/b3.png" },
  { name: "Skin", image: "/b4.png" },
  { name: "Digestion", image: "/b2.png" },
  { name: "Bones", image: "/l1.png" },
  { name: "Immunity", image: "/b1.png" },
  { name: "More", image: "/b5.png" },
];

const CategoryMenu = () => {
  return (
    <div className="bg-[#fff7e6] py-4 px-2 overflow-x-auto">
      <div className="flex space-x-4 justify-center items-center">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center text-center text-sm text-gray-800 group cursor-pointer transition duration-200"
          >
            <div className="w-16 h-16 rounded-full bg-[#e7f0ea] flex items-center justify-center mb-1 shadow-inner group-hover:shadow-lg group-hover:scale-110 transform transition duration-300">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-12 h-12 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <span className="group-hover:text-green-700">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
