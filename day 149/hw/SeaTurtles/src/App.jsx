import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function App() {
  const turtleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      turtleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500 text-white text-center">
      <div ref={turtleRef} className="p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-black">🐢 Save the Sea Turtles</h1>
        <p className="mt-4 text-black">
          Sea turtles are ancient creatures that play a crucial role in ocean ecosystems.
          Protecting them helps maintain marine life balance. 🌊
        </p>
      </div>
    </div>
  );
}