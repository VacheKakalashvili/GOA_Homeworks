import React, { useEffect, useState } from 'react'
import F22Image from './components/f22-raptor.jpg';

export default function App() {
  const [data, setData] = useState([])
  const http = "http://localhost:5000/api/user"
  useEffect(() => {
    fetch(http)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>F22 Raptor</h1>
      <img src={F22Image} alt="F22 Raptor" />
    </div>
  )
}
