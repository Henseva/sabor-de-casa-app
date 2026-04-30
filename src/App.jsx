
import React,{useState}from"react";
import{Home,Search,ShoppingBag,Heart,User,Bell,Menu,Plus,Minus,Star,MapPin,ArrowLeft,Settings,MessageCircle,Truck,PackageCheck}from"lucide-react";
import logo from"./assets/logo.png";import homePlate from"./assets/home_plate.png";import dailyPlate from"./assets/daily_plate.png";import stew from"./assets/stew.png";import lasagna from"./assets/lasagna.png";import detailPlate from"./assets/detail_plate.png";import pot from"./assets/pot.png";import juice from"./assets/juice.png";

const products=[
{id:1,name:"Frango Grelhado com Legumes",short:"Frango Grelhado com Legumes",price:"R$ 24,90",desc:"Arroz, feijão, frango grelhado, legumes salteados e salada verde.",img:detailPlate,tag:"Mais pedida"},
{id:2,name:"Estrogonofe de Frango",short:"Estrogonofe de Frango",price:"R$ 26,90",desc:"Arroz, feijão, frango cremoso e batata palha.",img:stew,tag:"Popular"},
{id:3,name:"Lasanha à Bolonhesa",short:"Lasanha à Bolonhesa",price:"R$ 28,90",desc:"Massa artesanal, molho bolonhesa e queijo gratinado.",img:lasagna,tag:"Popular"},
{id:4,name:"Suco Natural Laranja - 300ml",short:"Suco Natural",price:"R$ 6,90",desc:"Laranja - 300ml",img:juice,tag:""}];

export default function App(){const[tab,setTab]=useState("home");const[selected,setSelected]=useState(products[0]);function open(p){setSelected(p);setTab("details")}return <main className="shell"><section className="phone paper">{tab==="home"&&<HomeScreen setTab={setTab} open={open}/>} {tab==="menu"&&<MenuScreen open={open}/>} {tab==="details"&&a<DetailsScreen selected={selected} setTab={setTab}/>} {tab==="orders"&&<OrdersScreen/>} {tab==="favorites"&&<FavoritesScreen open={open}/>} {tab==="account"&&<AccountScreen/>}<BottomNav tab={tab} setTab={setTab}/></section></main>}

function Logo(){return <img className="logo" src={logo} alt="Sabor de Casa"/>}
function Title({children}){return <div className="title"><h2>{children}</h2><button>Ver todas</button></div>}

function HomeScreen({setTab,open}){return <section className="screen home">
<header className="top"><button><Menu size={20}/></button><Logo/><button><Bell size={19}/></button></header>
<div className="intro"><p>Bom dia, Chef! 👋</p><h1>Que bom ter você aqui!</h1><b>Comida de verdade</b><span>♡ feita com amor, como em casa.</span></div>
<button className="hero" onClick={()=>open(products[0])}><div>Feito<br/>com amor<br/>pra você!<small>— ♥ —</small></div><img src={homePlate}/></button>
<Title>Categorias</Title><div className="cats">{[["🍲","Pratos"],["🍱","Marmitas"],["🍔","Lanches"],["🥤","Bebidas"]].map(([i,l])=><button key={l} onClick={()=>setTab("menu")}><span>{i}</span><p>{l}</p></button>)}</div>
<button className="daily" onClick={()=>open(products[0])}><div><section><h2>Marmita do dia</h2><em>Mais pedida</em></section><p>Arroz, feijão, frango grelhado, legumes e salada</p><strong>R$ 24,90</strong></div><img src={dailyPlate}/></button>
</section>}

function MenuScreen({open}){return <section className="screen menu">
<header className="menuTop"><Logo/><span><MapPin size={13}/>São Paulo - SP</span><Heart size={19}/></header>
<div className="green"><p>Comida caseira de verdade, feita todos os dias com ingredientes selecionados e muito carinho.</p><div>Feito<br/>com amor<br/>pra você!<br/>♥</div></div>
<Title>Destaques da semana</Title><div className="scrollCards">{products.slice(1,4).map(p=><ProductMini key={p.id} p={p} open={open}/>)}</div>
<div className="build"><div><h2>Monte sua marmita</h2><p>Escolha os ingredientes que mais gosta!</p><button>Montar agora</button></div><span>🍜</span></div>
<Title>Promoções especiais</Title><div className="promo"><p>Marmitas com<br/>10% OFF</p><span>Use o cupom: CASA10</span><img src={dailyPlate}/></div>
</section>}

function ProductMini({p,open}){return <article className="mini" onClick={()=>open(p)}><img src={p.img}/>{p.tag&&<em>{p.tag}</em>}<h3>{p.short}</h3><footer><span>{p.price}</span><button><Plus size={15}/></button></footer></article>}

function DetailsScreen({selected,setTab}){const[q,setQ]=useState(1);return <section className="details">
<header className="detailTop"><button onClick={()=>setTab("home")}><ArrowLeft size={20}/></button><h2>Detalhes do prato</h2><Heart size={21}/></header>
<div className="detailImg"><img src={detailPlate}/></div>
<div className="detailBody"><div className="paperTag">Feito com<br/>ingredientes<br/>frescos 🌿</div><h1>Frango Grelhado<br/>com Legumes</h1><p>Arroz, feijão, frango grelhado, legumes salteados e salada verde.</p><div className="rate">★★★★★ <span>4,8 (328 avaliações)</span></div><strong>R$ 24,90</strong><div className="qty"><span>Quantidade</span><div><button onClick={()=>setQ(Math.max(1,q-1))}><Minus size={14}/></button><b>{q}</b><button onClick={()=>setQ(q+1)}><Plus size={14}/></button></div></div><button className="cart">Adicionar ao carrinho</button><div className="benefits"><p><Heart size={20}/>Feito hoje<br/><b>com muito amor</b></p><p><Truck size={20}/>Entrega rápida<br/><b>e segura</b></p><p><PackageCheck size={20}/>Embalagem<br/><b>sustentável</b></p></div></div>
</section>}

function OrdersScreen(){return <section className="screen orders"><h1>Meus pedidos</h1><div className="tabs"><span>Ativos</span><button>Histórico</button><button>Agendados</button></div><article className="order"><h2>🍲 Em preparo</h2><p>Seu pedido está sendo preparado com amor!</p><small>Previsão de entrega</small><strong>20 - 30 min</strong><button>Acompanhar pedido</button><footer><span>#1254 • Hoje às 12:30</span><b>Ver detalhes</b></footer></article><section className="help"><div><h2>Precisa de ajuda?</h2><p>Fale com a gente pelo WhatsApp</p></div><MessageCircle size={28}/></section></section>}

function FavoritesScreen({open}){return <section className="screen fav"><header><h1>Favoritos</h1><button>Editar</button></header><div className="favList">{products.map((p,i)=><article key={p.id} onClick={()=>open(p)}><img src={p.img}/><div><h2>{p.short}</h2><p>{p.price}</p></div><Heart size={22} fill={i===0?"#b6531d":"none"} color={i===0?"#b6531d":"currentColor"}/></article>)}</div><div className="quote">Lugar de comida boa<br/>é no coração da gente! ♥</div></section>}

function AccountScreen(){return <section className="screen account"><header><span/><h1>Minha conta</h1><Settings size={20}/></header><section className="profile"><div>H</div><aside><h2>Henri</h2><p>Cliente Premium 👑</p></aside></section><section className="accList">{["Meus dados","Endereços","Formas de pagamento","Meus favoritos","Cupons e benefícios","Configurações"].map(x=><button key={x}><span>{x}</span></button>)}</section><section className="club"><h2>👑 Clube Sabor</h2><p>Assinante Premium<br/>Frete grátis • Descontos exclusivos<br/>Acesso antecipado</p><button>Gerenciar assinatura</button></section></section>}

function BottomNav({tab,setTab}){const items=[["home","Início",Home],["menu","Buscar",Search],["orders","Pedidos",ShoppingBag],["favorites","Favoritos",Heart],["account","Conta",User]];return <nav className="nav">{items.map(([id,l,Icon])=><button key={id} onClick={()=>setTab(id)} className={tab===id?"active":""}><Icon size={17}/><span>{l}</span></button>)}</nav>}
