import React, { useEffect } from 'react'
import gsap from "gsap"

export default function App() {
  useEffect(() => {
    gsap.to(".text-animation", {
      duration: 5,
      opacity: 1,
    }
    )
  }, [])
  return (
    <div className="">
      <div className="text-animation opacity-0">ვაჩე</div>
      <div className="text-animation opacity-0">კაკალაშვილი</div>
      <div className="text-animation opacity-0">14</div>
      <div className="text-animation opacity-0">fake@gmail.com</div>
    </div>
  )
}