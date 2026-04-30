import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import cardapioReference from "./assets/cardapio-reference.png";

function App() {
  return (
    <main className="appShell">
      <img className="screenReference" src={cardapioReference} alt="Sabor de Casa Cardápio" />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
