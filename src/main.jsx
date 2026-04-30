import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import cardapio from "./assets/cardapio.png";
import detalhes from "./assets/detalhes.png";
import pedidos from "./assets/pedidos.png";
import favoritos from "./assets/favoritos.png";
import conta from "./assets/conta.png";

function Home({ goTo }) {
  return (
    <div className="home">
      <header className="header">
        <div className="menu">☰</div>
        <div className="logo">Sabor de Casa</div>
        <div className="notif">🔔</div>
      </header>

      <div className="welcome">
        <p>Bom dia, Chef! 👋</p>
        <h1>Que bom ter você aqui!</h1>
        <span>Comida de verdade feita com amor</span>
      </div>

      <div className="banner">
        <div className="bannerText">
          Feito com amor pra você ❤️
        </div>
      </div>

      <div className="section">
        <div className="sectionHeader">
          <h2>Categorias</h2>
          <span>Ver todas</span>
        </div>

        <div className="categories">
          <div>🍲<p>Pratos</p></div>
          <div>🍱<p>Marmitas</p></div>
          <div>🍔<p>Lanches</p></div>
          <div>🥤<p>Bebidas</p></div>
        </div>
      </div>

      <div className="card" onClick={() => goTo("detalhes")}>
        <h3>Marmita do dia</h3>
        <p>Arroz, feijão, frango grelhado...</p>
        <strong>R$ 24,90</strong>
      </div>

      <nav className="bottomNav">
        <button onClick={() => goTo("home")}>🏠</button>
        <button onClick={() => goTo("cardapio")}>🔍</button>
        <button onClick={() => goTo("pedidos")}>🧺</button>
        <button onClick={() => goTo("favoritos")}>❤️</button>
        <button onClick={() => goTo("conta")}>👤</button>
      </nav>
    </div>
  );
}

const screens = {
  cardapio,
  detalhes,
  pedidos,
  favoritos,
  conta,
};

function App() {
  const [screen, setScreen] = useState("home");

  return (
    <main className="appShell">
      <section className="phoneStage">
        {screen === "home" ? (
          <Home goTo={setScreen} />
        ) : (
          <img
            className="screenImage"
            src={screens[screen]}
          />
        )}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
