import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState("Tbilisi");
  const [search, setSearch] = useState("Tbilisi");

  const APIKEY = "c3f011f5e130b37ec4284ef846e05896";
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;

  const fetchWeather = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("City not found");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setData(null);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [cityName]);

  const handleSearchCity = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setCityName(search);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white bg-gray-900">
      <h1 className="text-green-500 text-2xl font-bold">Weather API</h1>

      <div className="w-56 bg-black rounded-lg p-4 mt-4 text-center">
        {data ? (
          <>
            <div className="text-lg font-semibold">City: {data.name}</div>
            <div className="text-xl">🌡️ {data.main.temp}°C</div>
          </>
        ) : (
          <div className="text-red-500">City not found</div>
        )}
      </div>

      <form 
        onSubmit={handleSearchCity} 
        className="w-56 bg-black rounded-lg p-4 mt-4"
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="border border-green-500 w-full p-2 rounded-md bg-gray-800 text-white"
          type="text"
          placeholder="Enter city name"
        />

        <button 
          onClick={handleSearchCity}
          className="mt-2 bg-green-500 w-full p-2 rounded-md font-bold hover:bg-green-600 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}