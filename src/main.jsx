import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import home from "./assets/home.png";
import cardapio from "./assets/cardapio.png";
import detalhes from "./assets/detalhes.png";
import pedidos from "./assets/pedidos.png";
import favoritos from "./assets/favoritos.png";
import conta from "./assets/conta.png";

const screens = {
  home,
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
        <img className="screenImage" src={screens[screen]} alt={`Sabor de Casa - ${screen}`} />

        {/* Hotspots invisíveis para navegação real sem alterar o visual */}
        <button className="hotspot navHome" onClick={() => setScreen("home")} aria-label="Início" />
        <button className="hotspot navSearch" onClick={() => setScreen("cardapio")} aria-label="Buscar" />
        <button className="hotspot navOrders" onClick={() => setScreen("pedidos")} aria-label="Pedidos" />
        <button className="hotspot navFavs" onClick={() => setScreen("favoritos")} aria-label="Favoritos" />
        <button className="hotspot navAccount" onClick={() => setScreen("conta")} aria-label="Conta" />

        {/* Área principal clicável para abrir detalhes */}
        {(screen === "home" || screen === "cardapio" || screen === "favoritos") && (
          <button className="hotspot openDetails" onClick={() => setScreen("detalhes")} aria-label="Abrir detalhes" />
        )}

        {/* Voltar da tela de detalhes */}
        {screen === "detalhes" && (
          <button className="hotspot backHome" onClick={() => setScreen("home")} aria-label="Voltar" />
        )}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
