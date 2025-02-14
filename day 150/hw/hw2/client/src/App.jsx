import React from "react";

const phones = [
  { name: "Nokia 3310", year: "2000", image: "/images/nokia-3310.png" },
  { name: "Motorola Razr V3", year: "2004", image: "/images/Motorola-Razr-V3.jpg" },
  { name: "Sony Ericsson K800i", year: "2006", image: "/images/sony-ericsson-k800i.jpg" },
  { name: "BlackBerry Bold 9000", year: "2008", image: "/images/BlackBerry-Bold-9000.png" },
];

export default function OldPhones() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header className="text-center text-3xl font-bold mb-6">Classic Phones</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phones.map((phone, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center">
            <img src={phone.image} alt={phone.name} className="w-full h-40 object-contain rounded-md mb-3" />
            <h2 className="text-xl font-semibold">{phone.name}</h2>
            <div className="flex justify-center mt-3">
              <div className="bg-green-500 text-white rounded-md w-[100px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-green-600">Buy Now!</div>
            </div>
            <p className="text-gray-600 mt-2">Released: {phone.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
