import React, { useMemo, useState } from "react";
import {
  Home,
  Search,
  ShoppingBag,
  Heart,
  User,
  Bell,
  Menu,
  Plus,
  Minus,
  Star,
  Clock,
  ChevronRight,
  Settings,
  MapPin,
  Truck,
  PackageCheck,
  MessageCircle,
  ArrowLeft,
  SlidersHorizontal
} from "lucide-react";

const COLORS = {
  olive: "#4f5b18",
  oliveDark: "#3f4913",
  terracotta: "#b6531d",
  cream: "#f7ecd8"
};

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=95",
  daily: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=95",
  chicken: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=95",
  stew: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=95",
  pasta: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=1000&q=95",
  juice: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=95",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=95"
};

const categories = [
  { label: "Pratos", icon: "🍲" },
  { label: "Marmitas", icon: "🍱" },
  { label: "Lanches", icon: "🍔" },
  { label: "Bebidas", icon: "🥤" }
];

const products = [
  {
    id: 1,
    title: "Frango Grelhado com Legumes",
    shortTitle: "Frango com Legumes",
    desc: "Arroz, feijão, frango grelhado, legumes salteados e salada verde.",
    price: "R$ 24,90",
    tag: "Mais pedida",
    rating: "4.9",
    time: "25-35 min",
    image: IMAGES.daily
  },
  {
    id: 2,
    title: "Estrogonofe de Frango",
    shortTitle: "Estrogonofe de Frango",
    desc: "Arroz branco, batata palha crocante e estrogonofe cremoso.",
    price: "R$ 26,90",
    tag: "Popular",
    rating: "4.8",
    time: "30-40 min",
    image: IMAGES.stew
  },
  {
    id: 3,
    title: "Lasanha à Bolonhesa",
    shortTitle: "Lasanha à Bolonhesa",
    desc: "Massa artesanal, molho bolonhesa, queijo gratinado e ervas.",
    price: "R$ 28,90",
    tag: "Popular",
    rating: "4.7",
    time: "35-45 min",
    image: IMAGES.pasta
  },
  {
    id: 4,
    title: "Suco Natural de Laranja",
    shortTitle: "Suco Natural",
    desc: "Laranja fresca, 300ml, sem conservantes.",
    price: "R$ 6,90",
    tag: "Natural",
    rating: "4.8",
    time: "10 min",
    image: IMAGES.juice
  }
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [favorites, setFavorites] = useState([1, 3]);
  const [cart, setCart] = useState([]);

  const cartCount = cart.length;

  function openDetails(product) {
    setSelectedProduct(product);
    setScreen("details");
  }

  function toggleFavorite(productId) {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  const context = {
    screen,
    setScreen,
    selectedProduct,
    openDetails,
    favorites,
    toggleFavorite,
    cart,
    cartCount,
    addToCart
  };

  return (
    <main className="app-shell">
      <section className="phone paper">
        {screen === "home" && <HomeScreen {...context} />}
        {screen === "menu" && <MenuScreen {...context} />}
        {screen === "details" && <DetailsScreen {...context} />}
        {screen === "orders" && <OrdersScreen {...context} />}
        {screen === "favorites" && <FavoritesScreen {...context} />}
        {screen === "account" && <AccountScreen {...context} />}
        <BottomNav {...context} />
      </section>
    </main>
  );
}

function Logo() {
  return (
    <div className="brand">
      <div className="brand-mark">🍲</div>
      <div className="brand-name">
        Sabor
        <br />
        <span>de Casa</span>
      </div>
    </div>
  );
}

function IconButton({ children, className = "", onClick }) {
  return (
    <button className={`icon-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function HomeScreen({ setScreen, openDetails, addToCart, cartCount }) {
  return (
    <section className="screen home-screen">
      <header className="topbar">
        <IconButton><Menu size={26} /></IconButton>
        <Logo />
        <IconButton className="notification">
          <Bell size={20} />
          {cartCount > 0 && <i />}
        </IconButton>
      </header>

      <section className="welcome-block">
        <p>Bom dia, Chef! 👋</p>
        <h1>Que bom ter você aqui!</h1>
        <span>Comida de verdade<br /><b>♡ feita com amor, como em casa.</b></span>
      </section>

      <button className="hero-card" onClick={() => setScreen("menu")}>
        <div className="hero-message">
          <p>Feito</p>
          <p>com amor</p>
          <p>pra você!</p>
          <span>— ♥ —</span>
        </div>
        <div className="hero-photo">
          <img src={IMAGES.hero} alt="Comida caseira" />
        </div>
      </button>

      <TitleRow title="Categorias" />
      <section className="category-grid">
        {categories.map((category) => (
          <button className="category-card" key={category.label} onClick={() => setScreen("menu")}>
            <span>{category.icon}</span>
            <p>{category.label}</p>
          </button>
        ))}
      </section>

      <button className="daily-card premium-card" onClick={() => openDetails(products[0])}>
        <div className="daily-content">
          <div className="daily-title-row">
            <h2>Marmita do dia</h2>
            <em>Mais pedida</em>
          </div>
          <p>Arroz, feijão, frango grelhado, legumes e salada.</p>
          <div className="meta-row">
            <span><Star size={14} fill="currentColor" /> 4.9</span>
            <span><Clock size={14} /> 25-35 min</span>
          </div>
          <strong>R$ 24,90</strong>
        </div>
        <img src={IMAGES.daily} alt="Marmita do dia" />
      </button>

      <TitleRow title="Destaques da semana" />
      <section className="highlight-grid">
        {products.slice(1, 3).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpen={() => openDetails(product)}
            onAdd={() => addToCart(product)}
          />
        ))}
      </section>

      <section className="olive-build-card">
        <div>
          <h2>Monte sua marmita</h2>
          <p>Escolha os ingredientes que mais gosta!</p>
          <button onClick={() => setScreen("menu")}>Montar agora</button>
        </div>
        <span>🍜</span>
      </section>
    </section>
  );
}

function MenuScreen({ openDetails, addToCart }) {
  return (
    <section className="screen">
      <header className="menu-top">
        <Logo />
        <div className="location-pill">
          <MapPin size={15} />
          São Paulo - SP
        </div>
      </header>

      <div className="search-card">
        <Search size={20} />
        <span>Buscar marmita, combo ou bebida</span>
        <button><SlidersHorizontal size={17} /></button>
      </div>

      <section className="olive-story-card">
        <p>Comida caseira de verdade, feita todos os dias com ingredientes selecionados e muito carinho.</p>
        <div>Feito<br />com amor<br />pra você!<br />♥</div>
      </section>

      <TitleRow title="Cardápio da casa" />
      <section className="menu-list">
        {products.map((product) => (
          <article className="menu-item" key={product.id} onClick={() => openDetails(product)}>
            <img src={product.image} alt={product.title} />
            <div>
              <em>{product.tag}</em>
              <h3>{product.shortTitle}</h3>
              <p>{product.desc}</p>
              <footer>
                <strong>{product.price}</strong>
                <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                  <Plus size={18} />
                </button>
              </footer>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

function DetailsScreen({ selectedProduct, setScreen, addToCart, favorites, toggleFavorite }) {
  const [qty, setQty] = useState(1);
  const isFavorite = favorites.includes(selectedProduct.id);

  return (
    <section className="screen detail-screen">
      <header className="sub-header">
        <button onClick={() => setScreen("home")}><ArrowLeft size={22} /></button>
        <h2>Detalhes do prato</h2>
        <button onClick={() => toggleFavorite(selectedProduct.id)}>
          <Heart size={23} fill={isFavorite ? COLORS.terracotta : "none"} color={isFavorite ? COLORS.terracotta : "currentColor"} />
        </button>
      </header>

      <article className="detail-card">
        <div className="detail-image-wrap">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <div className="tag-note">Feito com<br />ingredientes<br />frescos 🌿</div>
        </div>

        <div className="detail-body">
          <h1>{selectedProduct.title}</h1>
          <p>{selectedProduct.desc}</p>
          <div className="rating-line">
            <span>★★★★★</span>
            <b>{selectedProduct.rating} (328 avaliações)</b>
          </div>
          <strong className="detail-price">{selectedProduct.price}</strong>

          <div className="quantity-box">
            <span>Quantidade</span>
            <div>
              <button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
              <b>{qty}</b>
              <button onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
            </div>
          </div>

          <button className="primary-button" onClick={() => addToCart(selectedProduct)}>
            Adicionar ao carrinho
          </button>

          <div className="benefits-card">
            <div><Heart size={21} /> <span>Feito hoje<br /><b>com muito amor</b></span></div>
            <div><Truck size={21} /> <span>Entrega rápida<br /><b>e segura</b></span></div>
            <div><PackageCheck size={21} /> <span>Embalagem<br /><b>sustentável</b></span></div>
          </div>
        </div>
      </article>
    </section>
  );
}

function OrdersScreen({ setScreen }) {
  return (
    <section className="screen orders-screen">
      <h1 className="center-title">Meus pedidos</h1>

      <div className="order-tabs">
        <span>Ativos</span>
        <p>Histórico</p>
        <p>Agendados</p>
      </div>

      <article className="active-order-card">
        <div className="order-status-title">
          <h2>🍲 Em preparo</h2>
          <span>Hoje</span>
        </div>
        <p>Seu pedido está sendo preparado com amor!</p>
        <small>Previsão de entrega</small>
        <strong>20 - 30 min</strong>
        <div className="progress-bar"><i /></div>
        <button onClick={() => setScreen("details")}>Acompanhar pedido</button>
        <footer>
          <span>#1254 • Hoje às 12:30</span>
          <b>Ver detalhes</b>
        </footer>
      </article>

      <article className="history-order-card">
        <div>
          <h2>Entregue</h2>
          <p>Pedido entregue em 15/05 às 12:45</p>
          <button>Comprar novamente</button>
        </div>
        <img src={IMAGES.stew} alt="Pedido entregue" />
      </article>

      <section className="help-card">
        <div>
          <h3>Precisa de ajuda?</h3>
          <p>Fale com a gente pelo WhatsApp</p>
        </div>
        <MessageCircle size={26} />
      </section>
    </section>
  );
}

function FavoritesScreen({ favorites, openDetails, toggleFavorite }) {
  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  return (
    <section className="screen">
      <header className="favorites-head">
        <h1>Favoritos</h1>
        <button>Editar</button>
      </header>

      <section className="favorite-list">
        {favoriteProducts.map((product) => (
          <article key={product.id} onClick={() => openDetails(product)}>
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.shortTitle}</h2>
              <p>{product.desc}</p>
              <strong>{product.price}</strong>
            </div>
            <button onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}>
              <Heart size={24} fill={COLORS.terracotta} color={COLORS.terracotta} />
            </button>
          </article>
        ))}
      </section>

      <section className="quote-card">
        Lugar de comida boa<br />é no coração da gente! ♥
      </section>
    </section>
  );
}

function AccountScreen() {
  const menu = [
    "Meus dados",
    "Endereços",
    "Formas de pagamento",
    "Meus favoritos",
    "Cupons e benefícios",
    "Configurações"
  ];

  return (
    <section className="screen account-screen">
      <header className="account-top">
        <span />
        <h1>Minha conta</h1>
        <Settings size={21} />
      </header>

      <section className="profile-card">
        <div className="avatar">H</div>
        <div>
          <h2>Henri</h2>
          <p>Cliente Premium 👑</p>
        </div>
      </section>

      <section className="account-list">
        {menu.map((item) => (
          <button key={item}>
            <span>{item}</span>
            <ChevronRight size={18} />
          </button>
        ))}
      </section>

      <section className="club-card">
        <h2>👑 Clube Sabor</h2>
        <p>Assinante Premium<br />Frete grátis • Descontos exclusivos<br />Acesso antecipado</p>
        <button>Gerenciar assinatura</button>
      </section>
    </section>
  );
}

function ProductCard({ product, onOpen, onAdd }) {
  return (
    <article className="product-card" onClick={onOpen}>
      <img src={product.image} alt={product.title} />
      <em>{product.tag}</em>
      <h3>{product.shortTitle}</h3>
      <footer>
        <span>{product.price}</span>
        <button onClick={(e) => { e.stopPropagation(); onAdd(); }}>
          <Plus size={16} />
        </button>
      </footer>
    </article>
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

function BottomNav({ screen, setScreen, cartCount }) {
  const items = [
    ["home", "Início", Home],
    ["menu", "Buscar", Search],
    ["orders", "Pedidos", ShoppingBag],
    ["favorites", "Favoritos", Heart],
    ["account", "Conta", User]
  ];

  return (
    <nav className="bottom-nav">
      {items.map(([id, label, Icon]) => (
        <button key={id} className={screen === id ? "active" : ""} onClick={() => setScreen(id)}>
          <span className="nav-icon-wrap">
            <Icon size={19} />
            {id === "orders" && cartCount > 0 && <i>{cartCount}</i>}
          </span>
          <small>{label}</small>
        </button>
      ))}
    </nav>
  );
}
