import React from "react";

const cars = [
  { name: "Ninja 400", year: "2023", image: "/images/Ninja-400.jpg" },
  { name: "Dodge Challenger", year: "2020", image: "/images/Dodge-Challenger.png" },
  { name: "Toyota Camry", year: "2024", image: "/images/Toyota-Camry.png" },
  { name: "F-22 Raptor", year: "2008", image: "/images/F-22_Raptor.jpg" },
];

export default function OldCars() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header className="text-center text-3xl font-bold mb-6">Cars</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center">
            <img src={car.image} alt={car.name} className="w-full h-40 object-contain rounded-md mb-3" />
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <div className="flex flex-col items-center gap-2 mt-3">
              <div className="bg-green-500 text-white rounded-md w-[100px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-green-600">
                Buy Now!
              </div>
              <div className="bg-red-500 text-white rounded-md w-[100px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-red-600">
                Sell Now!
              </div>
            </div>
            <p className="text-gray-600 mt-2">Released: {car.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
