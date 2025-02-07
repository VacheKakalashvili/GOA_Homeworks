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
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-500 to-teal-400 text-white text-center">
      <div ref={containerRef} className="p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg max-w-md border border-green-300">
        <h1 className="text-4xl font-extrabold text-green-800">🌿 Embrace Nature</h1>
        <p className="mt-4 text-green-900">
          Discover the beauty of the natural world. Protect the environment, explore breathtaking landscapes, and reconnect with nature.  
        </p>
        <button className="mt-6 px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-500 transition">
          Explore Nature
        </button>
      </div>
    </div>
  );
}
