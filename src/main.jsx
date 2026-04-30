import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import homeReference from "./assets/home-reference.png";

function App() {
  return (
    <main className="app-shell">
      <section className="mockup-stage">
        <img className="home-reference" src={homeReference} alt="Sabor de Casa Home" />
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
