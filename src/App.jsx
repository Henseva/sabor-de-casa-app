import React, { useState } from "react";
import { Home, Search, ShoppingBag, Heart, User, Bell, Menu, MapPin, Plus, Minus, ChevronRight, Settings } from "lucide-react";

const imgMain = "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=90";
const imgStew = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=90";
const imgPasta = "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=90";

const categories = [
  ["Pratos", "🍲"],
  ["Marmitas", "🍱"],
  ["Lanches", "🍔"],
  ["Bebidas", "🥤"],
];

const products = [
  ["Estrogonofe de Frango", "R$ 26,90", imgStew],
  ["Lasanha à Bolonhesa", "R$ 28,90", imgPasta],
  ["Frango com Legumes", "R$ 24,90", imgMain],
];

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <main className="page-shell">
      <section className="phone-frame paper">
        {screen === "home" && <HomeScreen setScreen={setScreen} />}
        {screen === "menu" && <MenuScreen setScreen={setScreen} />}
        {screen === "details" && <DetailsScreen />}
        {screen === "orders" && <OrdersScreen />}
        {screen === "favorites" && <FavoritesScreen setScreen={setScreen} />}
        {screen === "account" && <AccountScreen />}
        <BottomNav screen={screen} setScreen={setScreen} />
      </section>
    </main>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span className="logo-icon">🍲</span>
      <div className="logo-text">
        Sabor
        <br />
        <span>de Casa</span>
      </div>
    </div>
  );
}

function TopBar({ center = false }) {
  return (
    <header className={`topbar ${center ? "topbar-center" : ""}`}>
      <button className="icon-btn"><Menu size={25} /></button>
      <Logo />
      <button className="icon-btn"><Bell size={22} /></button>
    </header>
  );
}

function HomeScreen({ setScreen }) {
  return (
    <section className="screen">
      <TopBar />

      <div className="hero-copy">
        <p>Bom dia, Chef! 👋</p>
        <h1>Que bom ter você aqui!</h1>
        <span>Comida de verdade<br /><b>♡ feita com amor, como em casa.</b></span>
      </div>

      <button className="love-card" onClick={() => setScreen("menu")}>
        <div>
          Feito<br />com amor<br />pra você!
          <small>— ♥ —</small>
        </div>
        <img src={imgMain} alt="Marmita caseira" />
      </button>

      <TitleRow title="Categorias" />
      <div className="category-grid">
        {categories.map(([label, icon]) => (
          <button className="category-card" key={label} onClick={() => setScreen("menu")}>
            <span>{icon}</span>
            <p>{label}</p>
          </button>
        ))}
      </div>

      <article className="daily-card" onClick={() => setScreen("details")}>
        <div>
          <div className="daily-head">
            <h2>Marmita do dia</h2>
            <em>Mais pedida</em>
          </div>
          <p>Arroz, feijão, frango grelhado, legumes e salada</p>
          <strong>R$ 24,90</strong>
        </div>
        <img src={imgMain} alt="Marmita do dia" />
      </article>
    </section>
  );
}

function MenuScreen({ setScreen }) {
  return (
    <section className="screen">
      <div className="menu-head">
        <Logo />
        <span><MapPin size={16} /> São Paulo - SP</span>
      </div>

      <section className="olive-banner">
        <p>Comida caseira de verdade, feita todos os dias com ingredientes selecionados e muito carinho.</p>
        <div>Feito<br />com amor<br />pra você!<br />♥</div>
      </section>

      <TitleRow title="Destaques da semana" />
      <div className="product-row">
        {products.map(([title, price, img]) => (
          <article className="product-card" key={title} onClick={() => setScreen("details")}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <footer>
              <span>{price}</span>
              <button><Plus size={17} /></button>
            </footer>
          </article>
        ))}
      </div>

      <section className="build-card">
        <div>
          <h2>Monte sua marmita</h2>
          <p>Escolha os ingredientes que mais gosta!</p>
          <button>Montar agora</button>
        </div>
        <span>🍜</span>
      </section>

      <TitleRow title="Promoções especiais" />
      <section className="promo-card">
        <p>Marmitas com<br />10% OFF</p>
        <span>Use o cupom: CASA10</span>
        <img src={imgMain} alt="Promoção" />
      </section>
    </section>
  );
}

function DetailsScreen() {
  return (
    <section className="screen">
      <div className="sub-head">
        <button>‹</button>
        <h2>Detalhes do prato</h2>
        <Heart size={23} />
      </div>

      <article className="detail-card">
        <img className="detail-img" src={imgMain} alt="Frango grelhado com legumes" />
        <div className="detail-body">
          <h1>Frango Grelhado<br />com Legumes</h1>
          <p>Arroz, feijão, frango grelhado, legumes salteados e salada verde.</p>
          <div className="rating">★★★★★ <span>4,8 (328 avaliações)</span></div>
          <strong>R$ 24,90</strong>

          <div className="qty">
            <span>Quantidade</span>
            <div><Minus size={15} /> 1 <Plus size={15} /></div>
          </div>

          <button className="primary-btn">Adicionar ao carrinho</button>

          <div className="benefits">
            <p>♡ Feito hoje com muito amor</p>
            <p>🚚 Entrega rápida e segura</p>
            <p>🛍️ Embalagem sustentável</p>
          </div>
        </div>
      </article>
    </section>
  );
}

function OrdersScreen() {
  return (
    <section className="screen">
      <h1 className="center-title">Meus pedidos</h1>
      <div className="tabs"><span>Ativos</span><p>Histórico</p><p>Agendados</p></div>

      <article className="order-card">
        <h2>🍲 Em preparo</h2>
        <p>Seu pedido está sendo preparado com amor!</p>
        <small>Previsão de entrega</small>
        <strong>20 - 30 min</strong>
        <div className="progress"><i /></div>
        <button>Acompanhar pedido</button>
      </article>

      <article className="history-card">
        <div>
          <h2>Entregue</h2>
          <p>Pedido entregue em 15/05 às 12:45</p>
          <button>Pedir novamente</button>
        </div>
        <img src={imgStew} alt="Pedido entregue" />
      </article>
    </section>
  );
}

function FavoritesScreen({ setScreen }) {
  return (
    <section className="screen">
      <h1 className="center-title">Favoritos</h1>
      <div className="favorite-list">
        {products.map(([title, price, img]) => (
          <article key={title} onClick={() => setScreen("details")}>
            <img src={img} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>Salvo para pedir de novo</p>
              <strong>{price}</strong>
            </div>
            <Heart size={20} fill="#b24f1a" color="#b24f1a" />
          </article>
        ))}
      </div>
    </section>
  );
}

function AccountScreen() {
  const items = ["Meus dados", "Endereços", "Formas de pagamento", "Meus favoritos", "Cupons e benefícios", "Configurações"];
  return (
    <section className="screen">
      <div className="account-head">
        <span />
        <h1>Minha conta</h1>
        <Settings size={20} />
      </div>

      <div className="profile">
        <div>H</div>
        <section>
          <h2>Henri</h2>
          <p>Cliente Premium 👑</p>
        </section>
      </div>

      <div className="menu-list">
        {items.map(item => (
          <button key={item}>{item}<ChevronRight size={17} /></button>
        ))}
      </div>

      <section className="club-card">
        <h2>👑 Clube Sabor</h2>
        <p>Assinante Premium<br />Frete grátis • Descontos exclusivos</p>
        <button>Gerenciar assinatura</button>
      </section>
    </section>
  );
}

function TitleRow({ title }) {
  return (
    <div className="title-row">
      <h2>{title}</h2>
      <button>Ver todas</button>
    </div>
  );
}

function BottomNav({ screen, setScreen }) {
  const items = [
    ["home", "Início", Home],
    ["menu", "Buscar", Search],
    ["orders", "Pedidos", ShoppingBag],
    ["favorites", "Favoritos", Heart],
    ["account", "Conta", User],
  ];

  return (
    <nav className="bottom-nav">
      {items.map(([id, label, Icon]) => (
        <button key={id} className={screen === id ? "active" : ""} onClick={() => setScreen(id)}>
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
