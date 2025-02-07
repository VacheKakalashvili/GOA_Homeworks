import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-center">
      <div ref={containerRef} className="p-8 bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg max-w-md">
        <h1 className="text-4xl font-extrabold text-green-400">🎮 Game Zone</h1>
        <p className="mt-4 text-gray-300">
          Your ultimate destination for the latest games, consoles, and accessories. 
          Level up your gaming experience today! 🔥
        </p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md hover:bg-green-400 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}
