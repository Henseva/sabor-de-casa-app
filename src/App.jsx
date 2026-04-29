import React, { useState } from "react";
import { Home, Search, ShoppingBag, Heart, User, Bell, Menu, Plus, Star, Clock } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=95";
const marmitaImg = "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=95";
const stewImg = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=95";
const pastaImg = "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=95";

const categories = [["Pratos","🍲"],["Marmitas","🍱"],["Lanches","🍔"],["Bebidas","🥤"]];
const highlights = [["Estrogonofe de Frango","R$ 26,90",stewImg,"Popular"],["Lasanha à Bolonhesa","R$ 28,90",pastaImg,"Popular"]];

export default function App() {
  const [screen, setScreen] = useState("home");
  return (
    <main className="app-shell">
      <section className="phone paper">
        {screen === "home" ? <PremiumHome setScreen={setScreen} /> : <Placeholder title={screen} />}
        <BottomNav screen={screen} setScreen={setScreen} />
      </section>
    </main>
  );
}

function Logo() {
  return (
    <div className="brand">
      <div className="brand-mark">🍲</div>
      <div className="brand-name">Sabor<br /><span>de Casa</span></div>
    </div>
  );
}

function PremiumHome({ setScreen }) {
  return (
    <section className="home">
      <header className="topbar">
        <button className="icon-button"><Menu size={25} /></button>
        <Logo />
        <button className="icon-button notification"><Bell size={20} /></button>
      </header>

      <section className="welcome">
        <p>Bom dia, Chef! 👋</p>
        <h1>Que bom ter você aqui!</h1>
        <span>Comida de verdade<br /><b>♡ feita com amor, como em casa.</b></span>
      </section>

      <button className="hero-card" onClick={() => setScreen("menu")}>
        <div className="hero-text">
          <p>Feito</p><p>com amor</p><p>pra você!</p><span>— ♥ —</span>
        </div>
        <div className="hero-image-wrap"><img src={heroImg} alt="Marmita caseira premium" /></div>
      </button>

      <TitleRow title="Categorias" />
      <section className="category-grid">
        {categories.map(([label, icon]) => (
          <button key={label} className="category"><span>{icon}</span><p>{label}</p></button>
        ))}
      </section>

      <button className="daily-card" onClick={() => setScreen("details")}>
        <div className="daily-info">
          <div className="daily-title-row"><h2>Marmita do dia</h2><em>Mais pedida</em></div>
          <p>Arroz, feijão, frango grelhado, legumes e salada.</p>
          <div className="daily-meta"><span><Star size={13} fill="currentColor" /> 4.9</span><span><Clock size={13} /> 25-35 min</span></div>
          <strong>R$ 24,90</strong>
        </div>
        <img src={marmitaImg} alt="Marmita do dia" />
      </button>

      <TitleRow title="Destaques da semana" />
      <section className="highlight-grid">
        {highlights.map(([title, price, img, tag]) => (
          <article className="highlight-card" key={title}>
            <img src={img} alt={title} /><em>{tag}</em><h3>{title}</h3>
            <footer><span>{price}</span><button><Plus size={16} /></button></footer>
          </article>
        ))}
      </section>

      <section className="olive-banner">
        <div><h2>Monte sua marmita</h2><p>Escolha os ingredientes que mais gosta!</p><button>Montar agora</button></div>
        <span>🍜</span>
      </section>
    </section>
  );
}

function Placeholder({ title }) {
  const labels = { menu:"Cardápio", orders:"Pedidos", favorites:"Favoritos", account:"Conta", details:"Detalhes do prato" };
  return <section className="placeholder"><Logo /><h1>{labels[title] || "Tela"}</h1><p>Esta tela será refinada depois. Agora o foco é a Home premium.</p></section>;
}

function TitleRow({ title }) {
  return <section className="section-head"><h2>{title}</h2><button>Ver todas</button></section>;
}

function BottomNav({ screen, setScreen }) {
  const items = [["home","Início",Home],["menu","Buscar",Search],["orders","Pedidos",ShoppingBag],["favorites","Favoritos",Heart],["account","Conta",User]];
  return (
    <nav className="bottom-nav">
      {items.map(([id,label,Icon]) => (
        <button key={id} className={screen===id ? "active" : ""} onClick={() => setScreen(id)}>
          <Icon size={18} /><span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
