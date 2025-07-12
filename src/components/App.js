
import React, { useEffect, useState } from "react";
import './../styles/App.css';

let list = [
  { id: 1, item: "Apple", price: 20 },
  { id: 2, item: "Banana", price: 10 },
  { id: 3, item: "Nutella", price: 40 },
  { id: 4, item: "Razor", price: 5 },
  { id: 5, item: "CornFlakes", price:46 },
  { id: 6, item: "Sound Bar", price: 50 },
  { id: 7, item: "iphone", price: 80 }
]

const App = () => {
  let [state, setState1] = useState(null)



  return (
    <div>
      <h1>Enter your budget to check available item: </h1>
      <input type="number" onChange={(e) => {
        setState1(Number(e.target.value))

      }} />
      <h2>Item you can buy are in green color</h2>
      <ul>

        {list.map((v) => {
          return <li key={v.id} style={{ listStyleType: "none", display: "flex", width: "300px", justifyContent: "space-between" }}>
            <p>{v.item}</p>
            <p style={{ color: state !== null && v.price <= state ? "green" : "" }}>{v.price}</p>
          </li>

        })}
      </ul>
    </div>
  )
}

export default App
