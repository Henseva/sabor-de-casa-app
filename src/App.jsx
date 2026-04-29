import { useState } from "react";
import Home from "./pages/Home";
import Buscar from "./pages/Buscar";
import Pedidos from "./pages/Pedidos";
import Favoritos from "./pages/Favoritos";
import Conta from "./pages/Conta";

export default function App() {
  const [tab, setTab] = useState("home");

  function renderScreen() {
    switch (tab) {
      case "buscar":
        return <Buscar />;
      case "pedidos":
        return <Pedidos />;
      case "favoritos":
        return <Favoritos />;
      case "conta":
        return <Conta />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="app">
      {renderScreen()}

      {/* NAVBAR FIXA */}
      <div className="bottom-nav">
        <button onClick={() => setTab("home")}>Início</button>
        <button onClick={() => setTab("buscar")}>Buscar</button>
        <button onClick={() => setTab("pedidos")}>Pedidos</button>
        <button onClick={() => setTab("favoritos")}>Favoritos</button>
        <button onClick={() => setTab("conta")}>Conta</button>
      </div>
    </div>
  );
}
