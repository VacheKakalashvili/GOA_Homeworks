import React from "react";

const pc = [
  { name: "Low-end PC", image: "/images/low.png" },
  { name: "Mid-range PC", image: "/images/mid.png" },
  { name: "High-end PC", image: "/images/high.png" },
];

export default function OldCars() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header className="text-center text-3xl font-bold mb-6">PcShop</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {pc.map((pc, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center">
            <img src={pc.image} alt={pc.name} className="w-full h-40 object-contain rounded-md mb-3" />
            <h2 className="text-xl font-semibold">{pc.name}</h2>
            <div className="flex flex-col items-center gap-2 mt-3">
              <div className="bg-green-500 text-white rounded-md w-[100px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-green-600">
                Buy Now!
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
