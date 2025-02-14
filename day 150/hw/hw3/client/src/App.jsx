import React from "react";

export default function TravelAgency() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ExploreWorld</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <div className="bg-gray-300 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold text-black">Discover Your Next Adventure</h2>
          <p className="mt-2 text-lg text-black">Find the best destinations and exclusive deals.</p>
          <button className="mt-4 px-6 py-2 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-500">Book Now</button>
        </div>
      </section>

      <section className="container mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Popular Destinations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Bali", "Paris", "Tokyo"].map((destination) => (
            <div key={destination} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mt-2">{destination}</h3>
              <p className="text-gray-600">Experience the beauty of {destination} with our special offers.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}