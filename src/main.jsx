import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import homeReference from "./assets/home-reference.png";

function App() {
  return (
    <main className="appShell">
      <img className="homeReference" src={homeReference} alt="Sabor de Casa Home" />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
