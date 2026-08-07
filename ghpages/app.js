/* FonteVita — Main App Script */
(function() {
'use strict';

/* ====== Data ====== */
const PRODUCTS = [
  {
    id:'collagen', name:'Коллаген', tagline:'Упругость кожи, крепкие волосы и ногти',
    dose:'2000 мг коллагена + 160 мг витамина C', capsules:'120 капсул',
    price:1490, oldPrice:1890, accent:'coral',
    img:'https://fontevita-vitality-hub.lovable.app/__l5e/assets-v1/cdcddfb7-2c0a-4e84-8f05-9b44e84e6318/collagen-bottle.png',
    highlights:[{v:'2000 мг',l:'коллаген'},{v:'160 мг',l:'витамин C'},{v:'60 дней',l:'курс приёма'}],
    benefits:['2000 мг гидролизованного коллагена — поддерживает эластичность и упругость кожи','160 мг витамина C — необходим для усвоения всех компонентов','Улучшает силу и координацию, поддерживает суставы','Улучшает концентрацию и внимание'],
    intake:'По 2 капсулы 2 раза в день во время еды.',
    composition:'Коллаген гидролизованный, аскорбиновая кислота, желатиновая капсула.'
  },
  {
    id:'magnesium', name:'Магний + B6', tagline:'Для защиты от стресса и здорового сна',
    dose:'2010 мг хелата магния + 6 мг витамина B6', capsules:'120 капсул',
    price:1190, oldPrice:1490, accent:'sky',
    img:'https://fontevita-vitality-hub.lovable.app/__l5e/assets-v1/8708d59b-eff1-4935-b125-2faafd214ea2/magnesium-bottle.png',
    highlights:[{v:'2010 мг',l:'хелат магния'},{v:'6 мг',l:'витамин B6'},{v:'40 дней',l:'курс приёма'}],
    benefits:['Уменьшает мигрени и снижает давление','Предотвращает спазмы мышц','Улучшает эмоциональное состояние','Снижает утомляемость и способствует нормализации сна'],
    intake:'По 1 капсуле 3 раза в день во время еды.',
    composition:'Магния хелат (бисглицинат), пиридоксина гидрохлорид (B6), желатиновая капсула.'
  },
  {
    id:'omega', name:'Омега 3', tagline:'Липидный комплекс из 3 источников',
    dose:'3000 мг в сутки', capsules:'180 капсул',
    price:1690, oldPrice:2090, accent:'sky',
    img:'https://fontevita-vitality-hub.lovable.app/__l5e/assets-v1/7a62c490-31a6-4603-8620-fc18b1c8b48d/omega-bottle.png',
    highlights:[{v:'3000 мг',l:'в сутки'},{v:'17,94',l:'тотох-индекс'},{v:'60 дней',l:'курс приёма'}],
    benefits:['Высокая концентрация полиненасыщенных жирных кислот','Оптимальная биодоступность — хорошо и быстро усваивается','Уровень свежести тотох-индекс 17,94 единиц при норме до 26','Комплекс полезных и незаменимых жирных кислот из 3 источников'],
    intake:'По 1 капсуле 3 раза в день во время еды.',
    composition:'Рыбий жир, льняное масло, масло водорослей, витамин E, желатиновая капсула.'
  }
];

const AVATARS = {
  anna: 'https://fontevita-vitality-hub.lovable.app/anna-avatar.png',
  dmitry: 'https://fontevita-vitality-hub.lovable.app/dmitry-avatar.png',
  olga: 'https://fontevita-vitality-hub.lovable.app/olga-avatar.png',
  maria: 'https://fontevita-vitality-hub.lovable.app/maria-avatar.png'
};

const LOGO = 'https://fontevita-vitality-hub.lovable.app/__l5e/assets-v1/ace176ff-1b22-489c-a209-196f67f2c7b6/logo-mark.png';
const COMBO_IMG = 'https://fontevita-vitality-hub.lovable.app/__l5e/assets-v1/b2d76a6b-8d07-47af-bea8-345a6a1917be/combo.png';

const BLOG_POSTS = window.__BLOG_POSTS || [];

/* ====== Cart State ====== */
const CART_KEY = 'fv-cart';
let cart = {};
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch(e) {}
function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e) {} }
function cartCount() { return Object.values(cart).reduce((s,n) => s+n, 0); }
function cartTotal() { return Object.entries(cart).reduce((s,[id,qty]) => { const p = PRODUCTS.find(x=>x.id===id); return s + (p?p.price*qty:0); }, 0); }
function cartLines() { return Object.entries(cart).map(([id,qty]) => { const p = PRODUCTS.find(x=>x.id===id); return p ? {product:p,qty} : null; }).filter(Boolean); }
function addToCart(id) { cart[id] = (cart[id]||0) + 1; saveCart(); updateCartUI(); }
function incCart(id) { cart[id] = (cart[id]||0) + 1; saveCart(); updateCartUI(); }
function decCart(id) { cart[id] = (cart[id]||0) - 1; if(cart[id]<=0) delete cart[id]; saveCart(); updateCartUI(); }
function removeFromCart(id) { delete cart[id]; saveCart(); updateCartUI(); }

/* ====== SVG Icons ====== */
const icons = {
  shoppingBag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  chevDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  minus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  shieldCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  leaf: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 1c1 2 2 4.5 2 8 0 5.5-4.78 10-10.5 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  sparkles2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>',
  truck: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  baby: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>',
  lock: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  droplets: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>',
  package: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/></svg>',
  qrCode: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>',
  scanLine: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" x2="17" y1="12" y2="12"/></svg>',
  badgeCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.77 4 4 0 0 1 0 6.76 4 4 0 0 1-4.78 4.77 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  chevRight: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  rotateCcw: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  droplet: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  fish: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6-3.56 0-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C5.58 10.33 4.42 10 3 10c-.55 0-1 .45-1 1s.45 1 1 1c1.42 0 2.58.33 4 .67"/></svg>',
  compass: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  list: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>',
  lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  alertTriangle: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  shoppingCart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  tag: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
  grid: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
  helpCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
};

/* ====== Helpers ====== */
function formatPrice(n) { return new Intl.NumberFormat('ru-RU').format(n) + ' ₽'; }
function $(sel, ctx) { return (ctx||document).querySelector(sel); }
function $$(sel, ctx) { return Array.from((ctx||document).querySelectorAll(sel)); }

/* ====== Init ====== */
document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initBottles();
  initReveal();
  initCart();
  renderCart();
  updateCartUI();
  initMobileNav();
});

/* ====== Header scroll ====== */
function initHeader() {
  const h = $('.header');
  if(!h) return;
  const onScroll = () => h.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* ====== Bottle Carousel ====== */
function initBottles() {
  const stage = $('#bottles-stage');
  if(!stage) return;
  const items = $$('.bottle-item', stage);
  const dots = $$('.bottle-dot');
  let active = 0, paused = false;

  function setActive(i) {
    active = i;
    items.forEach((el, idx) => {
      const offset = ((idx - active + items.length) % items.length);
      const x = offset===0?'0%':offset===1?'30%':'-30%';
      const scale = offset===0?1:.58;
      const rotate = offset===0?'0deg':offset===1?'6deg':'-6deg';
      el.style.transform = `translate(-50%,-50%) translateX(${x}) scale(${scale}) rotateY(${rotate})`;
      el.style.zIndex = offset===0?30:10;
      el.dataset.pos = offset===0?'front':'back';
    });
    dots.forEach((d,idx) => d.classList.toggle('active', idx===active));
  }

  items.forEach((el,i) => {
    el.style.transform = `translate(-50%,-50%) translateX(${i===0?'0%':i===1?'30%':'-30%'}) scale(${i===0?1:.58}) rotateY(${i===0?'0deg':i===1?'6deg':'-6deg'})`;
    el.style.zIndex = i===0?30:10;
  });

  const timer = setInterval(() => { if(!paused) setActive((active+1)%items.length); }, 4200);
  stage.parentElement.addEventListener('mouseenter', () => paused=true);
  stage.parentElement.addEventListener('mouseleave', () => paused=false);
  dots.forEach((d,i) => d.addEventListener('click', () => setActive(i)));
}

/* ====== Reveal on scroll ====== */
function initReveal() {
  const els = $$('.reveal');
  if(!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  els.forEach(el => io.observe(el));
}

/* ====== Cart UI ====== */
function initCart() {
  // Cart overlay close
  const overlay = $('#cart-overlay');
  if(overlay) overlay.addEventListener('click', closeCart);
  // Cart close button
  const closeBtn = $('#cart-close');
  if(closeBtn) closeBtn.addEventListener('click', closeCart);
  // Cart open button
  const openBtn = $('#cart-btn');
  if(openBtn) openBtn.addEventListener('click', openCart);
  // Checkout button
  const checkoutBtn = $('#checkout-btn');
  if(checkoutBtn) checkoutBtn.addEventListener('click', () => alert('Заказ оформлен! Спасибо!'));
}

function openCart() {
  $('#cart-overlay')?.classList.add('open');
  $('#cart-panel')?.classList.add('open');
  document.body.classList.add('no-scroll');
  renderCart();
}
function closeCart() {
  $('#cart-overlay')?.classList.remove('open');
  $('#cart-panel')?.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

function updateCartUI() {
  const count = cartCount();
  const badge = $('#cart-badge');
  if(badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 450);
  }
  // Update product cards
  PRODUCTS.forEach(p => {
    const qty = cart[p.id] || 0;
    const buyWrap = $(`#buy-wrap-${p.id}`);
    if(!buyWrap) return;
    if(qty > 0) {
      buyWrap.innerHTML = `
        <div class="qty-controls">
          <button class="qty-btn" onclick="window._decCart('${p.id}')">${icons.minus}</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" onclick="window._incCart('${p.id}')">${icons.plus}</button>
        </div>`;
    } else {
      buyWrap.innerHTML = `
        <button class="buy-btn" onclick="window._addToCart('${p.id}', this)">
          ${icons.shoppingBag} В корзину
        </button>`;
    }
  });
}

function renderCart() {
  const lines = cartLines();
  const body = $('#cart-body');
  const footer = $('#cart-footer');
  if(!body) return;

  if(lines.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon sun-blob">${icons.shoppingBag}</div><p>Пока пусто. Добавьте витамины для всей семьи.</p></div>`;
    if(footer) footer.style.display = 'none';
    return;
  }

  if(footer) footer.style.display = '';
  body.innerHTML = `<ul class="cart-items">${lines.map(({product:p,qty}) => `
    <li class="cart-item">
      <img src="${p.img}" alt="${p.name}" class="cart-item-img" loading="lazy">
      <div class="cart-item-info">
        <div class="cart-item-top">
          <span class="cart-item-name">${p.name}</span>
          <button class="cart-item-remove" onclick="window._removeFromCart('${p.id}')">${icons.trash}</button>
        </div>
        <span class="cart-item-caps">${p.capsules}</span>
        <div class="cart-item-bottom">
          <div class="cart-qty">
            <button class="cart-qty-btn" onclick="window._decCart('${p.id}')">${icons.minus}</button>
            <span class="cart-qty-num">${qty}</span>
            <button class="cart-qty-btn" onclick="window._incCart('${p.id}')">${icons.plus}</button>
          </div>
          <span class="cart-item-price">${formatPrice(p.price*qty)}</span>
        </div>
      </div>
    </li>`).join('')}</ul>`;

  const total = cartTotal();
  const deliveryEl = $('#cart-delivery-val');
  const totalEl = $('#cart-total-val');
  if(deliveryEl) deliveryEl.textContent = total >= 3000 ? 'Бесплатно' : `от ${formatPrice(350)}`;
  if(totalEl) totalEl.textContent = formatPrice(total);
}

// Expose to onclick handlers
window._addToCart = function(id, btnEl) {
  addToCart(id);
  // Fly animation
  if(btnEl) flyToCart(id, btnEl);
  setTimeout(openCart, 650);
};
window._incCart = function(id) { incCart(id); renderCart(); };
window._decCart = function(id) { decCart(id); renderCart(); };
window._removeFromCart = function(id) { removeFromCart(id); renderCart(); };

function flyToCart(id, btnEl) {
  const product = PRODUCTS.find(p=>p.id===id);
  if(!product) return;
  const card = btnEl.closest('.product-card');
  if(!card) return;
  const stage = card.querySelector('.product-img-wrap');
  const cartBtn = $('#cart-btn');
  if(!stage || !cartBtn) return;

  const a = stage.getBoundingClientRect();
  const b = cartBtn.getBoundingClientRect();
  const size = 140;
  const cx = a.left + a.width/2;
  const cy = a.top + a.height/2;

  const flyImg = document.createElement('img');
  flyImg.src = product.img;
  flyImg.alt = '';
  flyImg.className = 'fly-img';
  flyImg.style.cssText = `left:${cx-size/2}px;top:${cy-size/2}px;width:${size}px;height:${size}px;--fly-x:${b.left+b.width/2-cx}px;--fly-y:${b.top+b.height/2-cy}px;`;
  document.body.appendChild(flyImg);
  setTimeout(() => flyImg.remove(), 750);
}

/* ====== Mobile Nav ====== */
function initMobileNav() {
  const menuBtn = $('#menu-btn');
  const mobileNav = $('#mobile-nav');
  const closeMenu = $('#mobile-nav-close');
  if(menuBtn && mobileNav) menuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
  if(closeMenu && mobileNav) closeMenu.addEventListener('click', () => mobileNav.classList.remove('open'));
  $$('.mobile-nav-link', mobileNav).forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
}

/* ====== Product Details Toggle ====== */
window._toggleDetails = function(id) {
  const details = $(`#details-${id}`);
  const toggle = $(`#toggle-${id}`);
  if(details && toggle) {
    details.classList.toggle('open');
    toggle.classList.toggle('open');
  }
};

/* ====== Quiz ====== */
const quizQuestions = [
  {q:'Что беспокоит вас чаще всего?',opts:[{l:'Тусклая кожа, ломкие волосы и ногти',v:'collagen'},{l:'Тревога, раздражительность, плохой сон',v:'magnesium'},{l:'Нет энергии, частые простуды',v:'omega'}]},
  {q:'Как проходит ваш обычный день?',opts:[{l:'Много зеркал, встреч и фотографий',v:'collagen'},{l:'Стресс, дедлайны, поздние засыпания',v:'magnesium'},{l:'Работа за экраном и мало рыбы в рационе',v:'omega'}]},
  {q:'Какой результат хотите увидеть через 2 месяца?',opts:[{l:'Упругая кожа и крепкие суставы',v:'collagen'},{l:'Спокойствие и лёгкое засыпание',v:'magnesium'},{l:'Ясная голова и крепкий иммунитет',v:'omega'}]}
];
let quizStep=0, quizAnswers=[], quizPhase='in';

window._quizAnswer = function(val, el) {
  const fillBar = el.querySelector('.fill-bar');
  el.classList.add('filling');
  setTimeout(() => {
    quizAnswers.push(val);
    quizPhase='out';
    renderQuiz();
    setTimeout(() => { quizStep++; quizPhase='in'; renderQuiz(); }, 350);
  }, 500);
};

window._quizReset = function() { quizStep=0; quizAnswers=[]; quizPhase='in'; renderQuiz(); };
window._quizAddAll = function() {
  const results = getQuizResults();
  results.forEach(p => addToCart(p.id));
  openCart();
};

function getQuizResults() {
  if(quizAnswers.length < quizQuestions.length) return null;
  const tally = {};
  quizAnswers.forEach(a => { tally[a] = (tally[a]||0)+1; });
  return Object.entries(tally).sort((a,b)=>b[1]-a[1]).map(([id])=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
}

function renderQuiz() {
  const container = $('#quiz-content');
  if(!container) return;
  const results = getQuizResults();

  if(!results) {
    const q = quizQuestions[quizStep];
    const progress = (quizStep/quizQuestions.length)*100;
    container.innerHTML = `
      <div class="quiz-left">
        ${quizStep===0?'<span class="quiz-badge">'+icons.sparkles+' Мини-подбор за 30 секунд</span>':''}
        <div class="quiz-progress" style="margin-top:1.5rem"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>
        <p class="quiz-step-label">Вопрос ${quizStep+1} из ${quizQuestions.length}</p>
        <h3 class="quiz-question ${quizPhase==='in'?'animate-rise':''}">${q.q}</h3>
        <div class="quiz-options">
          ${q.opts.map((o,i) => `
            <button class="quiz-option ${quizPhase==='in'?'animate-rise':''}" style="animation-delay:${i*80}ms" onclick="window._quizAnswer('${o.v}', this)">
              ${o.l}
              <span class="fill-bar"></span>
              ${icons.arrowRight}
            </button>
          `).join('')}
        </div>
      </div>
      <div class="quiz-right">
        <div class="bg-blur"></div>
        <img src="${PRODUCTS[1].img}" alt="${PRODUCTS[1].name}" class="quiz-product-img">
      </div>`;
    return;
  }

  const total = results.reduce((s,p)=>s+p.price,0);
  container.innerHTML = `
    <div class="quiz-left">
      <div class="quiz-check" style="transition-delay:200ms">${icons.check}</div>
      <h3 class="quiz-result-title">${results.length===1?'Ваш продукт — '+results[0].name:'Ваша комбинация — '+results.map(p=>p.name).join(' + ')}</h3>
      <p class="quiz-result-desc">${results.length===1?'По вашим ответам достаточно одного продукта.':'По вашим ответам подойдёт связка из нескольких продуктов — они дополняют друг друга.'}</p>
      <div style="margin-top:1.25rem;display:grid;gap:.75rem">
        ${results.map((p,i) => `
          <div class="quiz-product-row" style="transition-delay:${300+i*150}ms">
            <img src="${p.img}" alt="${p.name}">
            <div style="min-width:0"><p class="quiz-product-name">${p.name}</p><p class="quiz-product-tag">${p.tagline}</p></div>
            <span class="quiz-product-price">${formatPrice(p.price)}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-actions" style="transition-delay:600ms">
        <button class="cta-primary" onclick="window._quizAddAll()">${results.length===1?'Добавить в корзину':'Добавить всё в корзину'} · ${formatPrice(total)}</button>
        <button class="cta-outline" onclick="window._quizReset()">${icons.rotateCcw} Пройти заново</button>
      </div>
    </div>
    <div class="quiz-right">
      <div class="bg-blur"></div>
      ${results.map((p,i) => `<img src="${p.img}" alt="${p.name}" class="quiz-product-img" style="animation-delay:${i*.4}s;max-height:${results.length>=3?'200px':'280px'}">`).join('')}
    </div>`;
}

/* ====== FAQ ====== */
window._toggleFaq = function(i) {
  const item = $(`#faq-item-${i}`);
  if(item) item.classList.toggle('open');
};

/* ====== Blog routing ====== */
window._navigate = function(path) {
  window.history.pushState({}, '', path);
  renderPage();
};

window.addEventListener('popstate', renderPage);

function renderPage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const app = $('#app');
  if(!app) return;

  if(path === '/' || path === '') {
    renderMainPage(app);
  } else if(path === '/blog') {
    renderBlogIndex(app);
  } else if(path.startsWith('/blog/category/')) {
    const cat = path.split('/').pop();
    renderBlogCategory(app, cat);
  } else if(path.startsWith('/blog/')) {
    const slug = path.split('/').pop();
    renderBlogArticle(app, slug);
  } else {
    app.innerHTML = '<div style="padding:5rem;text-align:center"><h1>404</h1><p>Страница не найдена</p></div>';
  }
  window.scrollTo(0,0);
}

// Override all link clicks for SPA navigation
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[data-spa]');
  if(link) {
    e.preventDefault();
    window._navigate(link.getAttribute('href'));
  }
});

/* ====== Blog Data ====== */
const BLOG_CATEGORIES = [
  {slug:'kollagen',name:'Коллаген',short:'Коллаген',desc:'Что такое коллаген, зачем он нужен коже и суставам и как принимать добавку с пользой.',accent:'coral',icon:'droplet'},
  {slug:'magniy',name:'Магний и витамин B6',short:'Магний',desc:'Роль магния в нервной системе и сне, формы магния и правила совместного приёма с B6.',accent:'sky',icon:'moon'},
  {slug:'omega-3',name:'Омега-3',short:'Омега-3',desc:'Польза и вред омега-3, источники жирных кислот и как отличить свежий рыбий жир от окисленного.',accent:'sun',icon:'fish'},
  {slug:'guide',name:'Гид покупателя',short:'Гид',desc:'Как выбирать БАДы, читать этикетки, проверять подлинность и сочетать добавки между собой.',accent:'leaf',icon:'compass'}
];

const BLOG_COVERS = {
  'kollagen-dlya-chego-nuzhen-i-kak-prinimat': 'https://fontevita-vitality-hub.lovable.app/assets/collagen-V4Q1_TwP.jpg',
  'magniy-v6-dlya-chego-nuzhen-kogda-pit': 'https://fontevita-vitality-hub.lovable.app/assets/magnesium-BG_kTWoD.jpg',
  'omega-3-polza-i-vred-kak-vybrat': 'https://fontevita-vitality-hub.lovable.app/assets/omega-C53f6xOT.jpg',
  'sovmestimost-kollagen-magniy-omega-3': 'https://fontevita-vitality-hub.lovable.app/assets/combo-BwgqL8cP.jpg',
  'kogda-nachinayut-deystvovat-vitaminy': 'https://fontevita-vitality-hub.lovable.app/assets/timeline-C4_EXi7f.jpg',
  'bad-ili-lekarstvo-v-chem-raznitsa': 'https://fontevita-vitality-hub.lovable.app/assets/bad-vs-med-Do4OHFYv.jpg',
  'kak-proverit-chestny-znak': 'https://fontevita-vitality-hub.lovable.app/assets/chestny-znak-CVDr_muM.jpg',
  'kak-vybrat-vitaminy-i-bady': 'https://fontevita-vitality-hub.lovable.app/assets/bad-vs-med-Do4OHFYv.jpg',
  'pochemu-nam-nuzhna-omega-3': 'https://fontevita-vitality-hub.lovable.app/assets/omega-deficit-95TGxFnI.jpg'
};

function getCatBySlug(s) { return BLOG_CATEGORIES.find(c=>c.slug===s); }
function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'});
}

/* Render functions will be in the HTML file due to size */
window._renderPage = renderPage;
window._openCart = openCart;
window._closeCart = closeCart;
window.PRODUCTS = PRODUCTS;
window.BLOG_POSTS = BLOG_POSTS;
window.BLOG_CATEGORIES = BLOG_CATEGORIES;
window.BLOG_COVERS = BLOG_COVERS;
window.getCatBySlug = getCatBySlug;
window.formatDate = formatDate;
window.formatPrice = formatPrice;
window.icons = icons;
window.LOGO = LOGO;
window.COMBO_IMG = COMBO_IMG;
window.AVATARS = AVATARS;

})();
