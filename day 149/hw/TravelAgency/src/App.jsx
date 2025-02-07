import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.out" }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center">
      <div ref={containerRef} className="p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-white">✈️ Explore The World</h1>
        <p className="mt-4 text-black">
          Discover breathtaking destinations, amazing deals, and unforgettable experiences. 
          Book your dream vacation today! 🌍
        </p>
        <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-300 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
