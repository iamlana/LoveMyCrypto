import React from "react"
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        HELLO
        <Link to="/coins" className="App-link">Go to cryptocurrencies</Link>
      </header>
    </div>
  )
}