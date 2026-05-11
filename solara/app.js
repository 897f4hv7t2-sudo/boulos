/* ========================================
   SOLARA — App JS
   Cart, Animations, UI interactions
======================================== */

'use strict';

/* ── State ── */
let cart = JSON.parse(localStorage.getItem('solara_cart') || '[]');

/* ── Products Data ── */
const PRODUCTS = [
  {
    id: 1, name: 'Onyx Eclipse', category: 'unisex', price: 289, oldPrice: 349,
    badge: 'Best Seller', rating: 4.8, reviews: 142, featured: true,
    colors: ['#1a1a1a','#8B4513','#1a3a5c'], sizes: ['S','M','L'],
    desc: 'Sculpted from ultra-lightweight titanium alloy, the Onyx Eclipse offers total UV400 protection wrapped in an aesthetic that commands attention. Polarized lenses eliminate glare while preserving true-to-life color rendering.',
    sku: 'SOL-001',
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    imgs: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80',
      'https://images.unsplash.com/photo-1583394293253-4b6e3c7d4c4c?w=600&q=80',
    ]
  },
  {
    id: 2, name: 'Aurora Noir', category: 'women', price: 245, oldPrice: null,
    badge: 'New', rating: 4.9, reviews: 87, featured: true,
    colors: ['#000','#c9a84c','#8a2be2'], sizes: ['S','M'],
    desc: 'Inspired by the shifting gradients of a northern sky, Aurora Noir frames are crafted from bio-acetate with gradient-tinted lenses that shift from deep charcoal to transparent amber.',
    sku: 'SOL-002',
    img: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80',
    imgs: [
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80',
    ]
  },
  {
    id: 3, name: 'Solstice Pro', category: 'men', price: 320, oldPrice: 399,
    badge: 'Sale', rating: 4.7, reviews: 203, featured: true,
    colors: ['#1a1a2e','#2d4a1e','#3d1515'], sizes: ['M','L','XL'],
    desc: 'Engineered for the modern professional who moves between boardroom and beach. The Solstice Pro features photochromic lenses that adapt to changing light, housed in solid-steel frames with adjustable nose pads.',
    sku: 'SOL-003',
    img: 'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&q=80',
    imgs: [
      'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&q=80',
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=600&q=80',
    ]
  },
  {
    id: 4, name: 'Velvet Veil', category: 'women', price: 198, oldPrice: null,
    badge: null, rating: 4.6, reviews: 64, featured: false,
    colors: ['#4a0020','#000','#c9a84c'], sizes: ['S','M'],
    desc: 'A cat-eye silhouette reborn in the modern era. Velvet Veil combines oversized drama with precision optics, perfect for those who view fashion as a fine art form.',
    sku: 'SOL-004',
    img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80']
  },
  {
    id: 5, name: 'Apex Aviator', category: 'men', price: 265, oldPrice: null,
    badge: null, rating: 4.8, reviews: 176, featured: false,
    colors: ['#c9a84c','#1a1a1a','#silver'], sizes: ['M','L'],
    desc: 'The timeless aviator, elevated. Apex features double-bridge titanium construction, mineral glass lenses with anti-reflective coating, and adjustable cable temples for secure all-day wear.',
    sku: 'SOL-005',
    img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80']
  },
  {
    id: 6, name: 'Lunar Shield', category: 'unisex', price: 350, oldPrice: 420,
    badge: 'Sale', rating: 4.9, reviews: 98, featured: false,
    colors: ['#000','#1a1a2e'], sizes: ['M','L','XL'],
    desc: 'When protection meets art. The Lunar Shield\'s wraparound polycarbonate lens provides 180° UV coverage while the geometric frame makes a statement that transcends conventional eyewear.',
    sku: 'SOL-006',
    img: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1534126511673-b6899657816a?w=600&q=80']
  },
  {
    id: 7, name: 'Seraph Round', category: 'women', price: 178, oldPrice: null,
    badge: 'New', rating: 4.5, reviews: 41, featured: false,
    colors: ['#c9a84c','#8B4513','#000'], sizes: ['S','M'],
    desc: 'Perfect circles for imperfect days. The Seraph Round combines ultra-thin stainless steel rims with optically superior lenses and a minimalist aesthetic that pairs with everything.',
    sku: 'SOL-007',
    img: 'https://images.unsplash.com/photo-1583394293253-4b6e3c7d4c4c?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1583394293253-4b6e3c7d4c4c?w=600&q=80']
  },
  {
    id: 8, name: 'Storm Rider', category: 'men', price: 299, oldPrice: null,
    badge: null, rating: 4.7, reviews: 115, featured: false,
    colors: ['#2d4a1e','#1a1a1a','#c9a84c'], sizes: ['M','L','XL'],
    desc: 'Built to withstand whatever nature throws at you. Storm Rider features impact-resistant TR90 frames and polarized lenses with hydrophobic coating — ready for adventure.',
    sku: 'SOL-008',
    img: 'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&q=80']
  },
  {
    id: 9, name: 'Cipher Square', category: 'unisex', price: 225, oldPrice: null,
    badge: null, rating: 4.6, reviews: 73, featured: false,
    colors: ['#000','#1a3a5c','#c9a84c'], sizes: ['S','M','L'],
    desc: 'Clean lines, sharp angles, zero compromise. The Cipher Square is cut from a single piece of premium acetate block, giving each pair a unique depth and character.',
    sku: 'SOL-009',
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80']
  },
  {
    id: 10, name: 'Dusk Mirage', category: 'women', price: 310, oldPrice: 380,
    badge: 'Sale', rating: 4.8, reviews: 56, featured: false,
    colors: ['#4a0020','#8a2be2','#000'], sizes: ['S','M'],
    desc: 'As the last light fades, Dusk Mirage comes alive. Gradient rose-to-violet lenses embedded in handcrafted acetate frames turn heads at every golden hour gathering.',
    sku: 'SOL-010',
    img: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80']
  },
  {
    id: 11, name: 'Stealth Wrap', category: 'men', price: 385, oldPrice: null,
    badge: 'New', rating: 4.9, reviews: 29, featured: false,
    colors: ['#000','#1a1a2e'], sizes: ['M','L'],
    desc: 'Tactical precision meets luxury design. The Stealth Wrap\'s seamless frame merges frame and shield into one fluid form, with military-grade polarization and a matte non-reflective finish.',
    sku: 'SOL-011',
    img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80']
  },
  {
    id: 12, name: 'Ivory Ember', category: 'unisex', price: 215, oldPrice: null,
    badge: null, rating: 4.5, reviews: 88, featured: false,
    colors: ['#f5f5dc','#c9a84c','#8B4513'], sizes: ['S','M','L'],
    desc: 'Warm tones for cool personalities. Ivory Ember\'s cream-colored acetate frames contrast beautifully with amber-gradient lenses, offering a retro-luxe feel that\'s utterly contemporary.',
    sku: 'SOL-012',
    img: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=600&q=80',
    imgs: ['https://images.unsplash.com/photo-1534126511673-b6899657816a?w=600&q=80']
  },
];

/* ── Helpers ── */
function starsHTML(rating, size = '') {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= full) s += `<span class="star${size}">★</span>`;
    else if (i === full + 1 && half) s += `<span class="star${size}" style="opacity:.6">★</span>`;
    else s += `<span class="star${size} empty">★</span>`;
  }
  return s;
}

function formatPrice(n) { return '$' + n.toFixed(0); }

function saveCart() { localStorage.setItem('solara_cart', JSON.stringify(cart)); }

function getProductById(id) { return PRODUCTS.find(p => p.id === parseInt(id)); }

/* ── Toast ── */
function showToast(msg, icon = '✓') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3200);
}

/* ── Cart ── */
function addToCart(productId, qty = 1, size = 'M', color = null) {
  const product = getProductById(productId);
  if (!product) return;
  const key = `${productId}-${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, id: productId, qty, size, color, name: product.name, price: product.price, img: product.img });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartUI() {
  const countEl = document.querySelectorAll('.cart-count');
  const count = cartCount();
  countEl.forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
  const totalEl = document.querySelector('.cart-total-price');
  if (totalEl) totalEl.textContent = formatPrice(cartTotal());
}

function renderCartItems() {
  const container = document.querySelector('.cart-items');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🕶️</span>
        <p>Your cart is empty</p>
        <a href="shop.html" class="btn btn-outline" style="margin-top:.5rem">Browse Collection</a>
      </div>`;
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.style.background='#1a1a26'">
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty('${item.key}',-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.key}',1)">+</button>
          <span style="font-size:.75rem;color:var(--muted);margin-left:.25rem">${item.size}</span>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.key}')" title="Remove">✕</button>
    </div>
  `).join('');
}

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.querySelector('.cart-overlay');
  if (drawer) { drawer.classList.add('open'); renderCartItems(); }
  if (overlay) overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.querySelector('.cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

/* ── Navbar ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    const backTop = document.getElementById('back-top');
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  const cartBtns = document.querySelectorAll('.cart-btn');
  cartBtns.forEach(btn => btn.addEventListener('click', openCart));

  const cartClose = document.querySelector('.cart-close');
  if (cartClose) cartClose.addEventListener('click', closeCart);

  const overlay = document.querySelector('.cart-overlay');
  if (overlay) overlay.addEventListener('click', closeCart);

  const backTop = document.getElementById('back-top');
  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
}

/* ── Reveal Animations ── */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => {
    el.style.transitionDelay = (i * 0.07) + 's';
    obs.observe(el);
  });
}

/* ── Discount Popup ── */
function initPopup() {
  const popup = document.getElementById('discount-popup');
  if (!popup || sessionStorage.getItem('popup_dismissed')) return;
  setTimeout(() => popup.classList.add('show'), 5000);

  const close = popup.querySelector('.popup-close');
  const skip = popup.querySelector('.popup-skip');
  const dismiss = () => {
    popup.classList.remove('show');
    sessionStorage.setItem('popup_dismissed', '1');
  };
  if (close) close.addEventListener('click', dismiss);
  if (skip) skip.addEventListener('click', dismiss);
  popup.querySelector('.popup-bg').addEventListener('click', dismiss);

  const form = popup.querySelector('.popup-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      dismiss();
      showToast('10% discount code: SOLARA10 — enjoy!', '🎁');
    });
  }
}

/* ── Page Loader ── */
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
  setTimeout(() => loader.classList.add('hidden'), 2000);
}

/* ── Newsletter ── */
function initNewsletter() {
  document.querySelectorAll('.footer-newsletter form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = form.querySelector('.success-msg');
      const input = form.querySelector('input');
      if (msg) msg.style.display = 'block';
      if (input) input.value = '';
      showToast('Welcome to SOLARA! Check your inbox.', '✉️');
    });
  });
}

/* ── Product Card Builder ── */
function buildProductCard(product, idx = 0) {
  const badgeHTML = product.badge
    ? `<span class="product-badge badge-${product.badge === 'Sale' ? 'sale' : 'new'}">${product.badge}</span>` : '';
  const oldPriceHTML = product.oldPrice
    ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : '';
  return `
    <div class="product-card" data-reveal style="transition-delay:${idx * 0.08}s"
         onclick="window.location='product.html?id=${product.id}'">
      <div class="product-img-wrap">
        <img src="${product.img}" alt="${product.name}" loading="lazy"
             onerror="this.parentElement.style.background='linear-gradient(135deg,#1a1a26,#0d0d18)'">
        ${badgeHTML}
        <span class="product-quick-add">Quick Add +</span>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${oldPriceHTML}
        </div>
        <div class="product-stars">${starsHTML(product.rating)}</div>
      </div>
    </div>`;
}

/* ── Shared Nav/Footer HTML ── */
function getNavHTML() {
  return `
  <nav id="navbar">
    <a href="index.html" class="nav-logo">SOLARA</a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <button class="cart-btn" aria-label="Cart">
        🛒<span class="cart-count"></span>
      </button>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <nav class="mobile-menu">
    <a href="index.html">Home</a>
    <a href="shop.html">Shop</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </nav>`;
}

function getCartHTML() {
  return `
  <div class="cart-overlay"></div>
  <aside id="cart-drawer">
    <div class="cart-header">
      <h3>Your Cart</h3>
      <button class="cart-close">✕</button>
    </div>
    <div class="cart-items"></div>
    <div class="cart-footer">
      <div class="cart-total-row">
        <span class="cart-total-label">Total</span>
        <span class="cart-total-price">$0</span>
      </div>
      <button class="btn btn-primary cart-checkout-btn" onclick="showToast('Checkout coming soon!','🔒')">
        Checkout
      </button>
      <p class="cart-note">Free shipping on orders over $300</p>
    </div>
  </aside>`;
}

function getPopupHTML() {
  return `
  <div id="discount-popup">
    <div class="popup-bg"></div>
    <div class="popup-box">
      <button class="popup-close">✕</button>
      <span class="popup-tag">Welcome Offer</span>
      <div class="popup-headline">10% Off</div>
      <p class="popup-sub">Your first order. Enter your email to unlock the discount.</p>
      <form class="popup-form">
        <input type="email" placeholder="your@email.com" required>
        <button type="submit" class="btn btn-primary">Claim Offer</button>
      </form>
      <span class="popup-skip">No thanks, I'll pay full price</span>
    </div>
  </div>`;
}

function getFooterHTML() {
  return `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">SOLARA</a>
        <p>Where luxury meets vision. Handcrafted eyewear for those who see the world differently.</p>
        <div class="footer-social">
          <a href="#" class="social-link" title="Instagram">📷</a>
          <a href="#" class="social-link" title="Twitter">𝕏</a>
          <a href="#" class="social-link" title="Pinterest">📌</a>
          <a href="#" class="social-link" title="TikTok">🎵</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html">All Styles</a></li>
          <li><a href="shop.html?cat=men">Men</a></li>
          <li><a href="shop.html?cat=women">Women</a></li>
          <li><a href="shop.html?cat=unisex">Unisex</a></li>
          <li><a href="shop.html?sale=1">Sale</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Newsletter</h4>
        <p style="font-size:.82rem;color:var(--muted);margin-bottom:1rem;">New drops. Early access. Zero spam.</p>
        <div class="footer-newsletter">
          <form>
            <input type="email" placeholder="your@email.com" required>
            <button type="submit" class="btn btn-primary">Subscribe</button>
            <p class="success-msg">✓ You're on the list!</p>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 SOLARA. All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Shipping</a></p>
    </div>
  </footer>`;
}

function getToastHTML() {
  return `<div id="toast-container"></div>`;
}

function getBackTopHTML() {
  return `<button id="back-top" aria-label="Back to top">↑</button>`;
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initReveal();
  initPopup();
  initNewsletter();
  updateCartUI();

  // Page-specific
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initHomePage();
  if (page === 'shop.html') initShopPage();
  if (page === 'product.html') initProductPage();
  if (page === 'contact.html') initContactPage();
});

/* ══════════════════════════════════════
   HOME PAGE
══════════════════════════════════════ */
function initHomePage() {
  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid) {
    const featured = PRODUCTS.filter(p => p.featured);
    featuredGrid.innerHTML = featured.map((p, i) => buildProductCard(p, i)).join('');
  }
  const bestGrid = document.getElementById('best-grid');
  if (bestGrid) {
    const best = [...PRODUCTS].sort((a,b) => b.reviews - a.reviews).slice(0, 4);
    bestGrid.innerHTML = best.map((p, i) => buildProductCard(p, i)).join('');
  }
  // Re-init reveal for dynamically added cards
  setTimeout(initReveal, 50);
}

/* ══════════════════════════════════════
   SHOP PAGE
══════════════════════════════════════ */
let shopFilters = { category: 'all', maxPrice: 500, sort: 'featured' };

function initShopPage() {
  // Pre-fill from URL params
  const params = new URLSearchParams(window.location.search);
  if (params.get('cat')) shopFilters.category = params.get('cat');

  const catInputs = document.querySelectorAll('input[name="category"]');
  catInputs.forEach(inp => {
    if (inp.value === shopFilters.category) inp.checked = true;
    inp.addEventListener('change', () => { shopFilters.category = inp.value; renderShop(); });
  });

  const priceRange = document.getElementById('price-range');
  const priceLabel = document.getElementById('price-label');
  if (priceRange && priceLabel) {
    priceRange.addEventListener('input', () => {
      shopFilters.maxPrice = parseInt(priceRange.value);
      priceLabel.textContent = `Up to $${shopFilters.maxPrice}`;
      renderShop();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => { shopFilters.sort = sortSelect.value; renderShop(); });
  }

  const resetBtn = document.querySelector('.sidebar-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      shopFilters = { category: 'all', maxPrice: 500, sort: 'featured' };
      if (priceRange) { priceRange.value = 500; priceLabel.textContent = 'Up to $500'; }
      if (sortSelect) sortSelect.value = 'featured';
      catInputs.forEach(inp => { inp.checked = inp.value === 'all'; });
      renderShop();
    });
  }

  renderShop();
}

function renderShop() {
  let products = [...PRODUCTS];

  if (shopFilters.category !== 'all') {
    products = products.filter(p => p.category === shopFilters.category);
  }
  products = products.filter(p => p.price <= shopFilters.maxPrice);

  if (shopFilters.sort === 'price-asc') products.sort((a,b) => a.price - b.price);
  else if (shopFilters.sort === 'price-desc') products.sort((a,b) => b.price - a.price);
  else if (shopFilters.sort === 'rating') products.sort((a,b) => b.rating - a.rating);
  else if (shopFilters.sort === 'newest') products.sort((a,b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));

  const grid = document.getElementById('shop-grid');
  const count = document.getElementById('results-count');
  if (grid) {
    grid.innerHTML = products.length
      ? products.map((p, i) => buildProductCard(p, i)).join('')
      : `<div style="grid-column:1/-1;text-align:center;color:var(--muted);padding:4rem 0">
           <div style="font-size:3rem;margin-bottom:1rem">🕶️</div>
           <p>No styles match your filters.</p>
         </div>`;
    setTimeout(initReveal, 50);
  }
  if (count) count.innerHTML = `<span>${products.length}</span> styles found`;
}

/* ══════════════════════════════════════
   PRODUCT PAGE
══════════════════════════════════════ */
function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 1;
  const product = getProductById(id);
  if (!product) { window.location = 'shop.html'; return; }

  document.title = `${product.name} — SOLARA`;

  // Breadcrumb
  const bc = document.getElementById('breadcrumb-name');
  if (bc) bc.textContent = product.name;

  // Main details
  const el = (sel) => document.querySelector(sel);
  if (el('.detail-category')) el('.detail-category').textContent = product.category.toUpperCase();
  if (el('.detail-name')) el('.detail-name').textContent = product.name;
  if (el('.detail-price')) el('.detail-price').textContent = formatPrice(product.price);
  if (el('.detail-stars')) el('.detail-stars').innerHTML = starsHTML(product.rating);
  if (el('.detail-review-count')) el('.detail-review-count').textContent = `(${product.reviews} reviews)`;
  if (el('.detail-desc')) el('.detail-desc').textContent = product.desc;

  const oldEl = el('.detail-price-old');
  const badgeEl = el('.detail-badge');
  if (product.oldPrice) {
    if (oldEl) oldEl.textContent = formatPrice(product.oldPrice);
    if (badgeEl) {
      const pct = Math.round((1 - product.price / product.oldPrice) * 100);
      badgeEl.textContent = `-${pct}%`;
    }
  } else {
    if (oldEl) oldEl.style.display = 'none';
    if (badgeEl) badgeEl.style.display = 'none';
  }

  // SKU
  const skuEl = el('.meta-sku');
  if (skuEl) skuEl.textContent = product.sku;

  // Gallery
  const mainImg = el('.main-img img');
  if (mainImg) mainImg.src = product.imgs[0];
  const thumbRow = el('.thumb-row');
  if (thumbRow && product.imgs.length > 1) {
    thumbRow.innerHTML = product.imgs.map((src, i) => `
      <div class="thumb ${i===0?'active':''}" data-idx="${i}">
        <img src="${src}" alt="View ${i+1}">
      </div>`).join('');
    thumbRow.querySelectorAll('.thumb').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.thumb').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        if (mainImg) mainImg.src = product.imgs[t.dataset.idx];
      });
    });
  } else if (thumbRow) {
    thumbRow.style.display = 'none';
  }

  // Color swatches
  const colorOpts = el('.color-options');
  if (colorOpts && product.colors) {
    colorOpts.innerHTML = product.colors.map((c, i) => `
      <div class="color-swatch ${i===0?'active':''}" style="background:${c}" data-color="${c}"
           title="${c}" onclick="selectColor(this)"></div>`).join('');
  }

  // Sizes
  const sizeOpts = el('.size-options');
  if (sizeOpts && product.sizes) {
    sizeOpts.innerHTML = product.sizes.map((s, i) => `
      <button class="size-btn ${i===0?'active':''}" onclick="selectSize(this)">${s}</button>`).join('');
  }

  // Quantity
  const qtyInput = el('.qty-input');
  el('.qty-dec')?.addEventListener('click', () => {
    if (qtyInput) qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
  });
  el('.qty-inc')?.addEventListener('click', () => {
    if (qtyInput) qtyInput.value = Math.min(10, parseInt(qtyInput.value) + 1);
  });

  // Add to cart
  const addBtn = el('.add-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const size = el('.size-btn.active')?.textContent || 'M';
      const color = el('.color-swatch.active')?.dataset.color || null;
      const qty = parseInt(el('.qty-input')?.value || 1);
      addToCart(product.id, qty, size, color);
      addBtn.textContent = 'Added! ✓';
      addBtn.style.background = '#2a4a2a';
      setTimeout(() => { addBtn.textContent = 'Add to Cart'; addBtn.style.background = ''; }, 2000);
    });
  }

  // Wishlist
  el('.wishlist-btn')?.addEventListener('click', () => showToast('Saved to wishlist', '♥'));

  // Related products
  const relGrid = document.getElementById('related-grid');
  if (relGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.featured)).slice(0, 4);
    relGrid.innerHTML = related.map((p, i) => buildProductCard(p, i)).join('');
    setTimeout(initReveal, 50);
  }

  initReviews(product);
}

function selectColor(el) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(el) {
  document.querySelectorAll('.size-btn').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

/* ── Reviews ── */
const SAMPLE_REVIEWS = [
  { name: 'Alexandra M.', rating: 5, date: 'Nov 2024', text: 'Absolutely stunning. The craftsmanship is unlike anything I\'ve owned at this price point. People stop me on the street to ask where I got them.', verified: true },
  { name: 'James T.', rating: 5, date: 'Oct 2024', text: 'Bought these for a trip to Santorini — they performed flawlessly. Polarization is top-notch, zero distortion, and they look incredible in photos.', verified: true },
  { name: 'Serena K.', rating: 4, date: 'Oct 2024', text: 'Gorgeous frames. The fit is slightly narrow for my face shape but the quality more than compensates. Will size up next time.', verified: false },
  { name: 'Marcus D.', rating: 5, date: 'Sep 2024', text: 'Third pair from SOLARA. They never disappoint. The attention to detail — the hinges, the case, even the cleaning cloth — it all speaks luxury.', verified: true },
];

function initReviews(product) {
  const summary = document.querySelector('.reviews-summary');
  if (summary) {
    const bars = [
      { label:'5★', pct:72, count:102 },
      { label:'4★', pct:18, count:26 },
      { label:'3★', pct:6, count:9 },
      { label:'2★', pct:2, count:3 },
      { label:'1★', pct:2, count:2 },
    ];
    summary.innerHTML = `
      <div class="big-rating">
        <div class="big-score">${product.rating}</div>
        <div class="big-stars">${starsHTML(product.rating)}</div>
        <div class="big-count">${product.reviews} reviews</div>
      </div>
      <div class="rating-bars">
        ${bars.map(b => `
          <div class="rating-bar-row">
            <span class="bar-label">${b.label}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${b.pct}%"></div></div>
            <span class="bar-count">${b.count}</span>
          </div>`).join('')}
      </div>`;
  }

  const reviewList = document.querySelector('.review-list');
  if (reviewList) {
    reviewList.innerHTML = SAMPLE_REVIEWS.map(r => `
      <div class="review-card">
        <div class="review-top">
          <div class="reviewer">
            <div class="reviewer-avatar">${r.name[0]}</div>
            <div>
              <div class="reviewer-name">${r.name}</div>
              <div class="reviewer-date">${r.date}</div>
            </div>
          </div>
          <div class="review-stars">${starsHTML(r.rating)}</div>
        </div>
        <div class="review-text">${r.text}</div>
        ${r.verified ? '<div class="verified-badge">✓ Verified Purchase</div>' : ''}
      </div>`).join('');
  }

  // Star picker
  const stars = document.querySelectorAll('.star-pick');
  let selectedRating = 0;
  stars.forEach((s, i) => {
    s.addEventListener('mouseenter', () => stars.forEach((x, j) => x.classList.toggle('lit', j <= i)));
    s.addEventListener('mouseleave', () => stars.forEach((x, j) => x.classList.toggle('lit', j < selectedRating)));
    s.addEventListener('click', () => { selectedRating = i + 1; });
  });

  const reviewForm = document.querySelector('.review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = reviewForm.querySelector('input[name="name"]').value;
      const text = reviewForm.querySelector('textarea').value;
      if (!selectedRating) { showToast('Please select a star rating', '⚠️'); return; }
      const newReview = document.createElement('div');
      newReview.className = 'review-card';
      newReview.style.animation = 'slideIn .3s var(--ease)';
      newReview.innerHTML = `
        <div class="review-top">
          <div class="reviewer">
            <div class="reviewer-avatar">${name[0]||'?'}</div>
            <div>
              <div class="reviewer-name">${name}</div>
              <div class="reviewer-date">Just now</div>
            </div>
          </div>
          <div class="review-stars">${starsHTML(selectedRating)}</div>
        </div>
        <div class="review-text">${text}</div>`;
      reviewList?.prepend(newReview);
      reviewForm.reset();
      selectedRating = 0;
      stars.forEach(s => s.classList.remove('lit'));
      showToast('Review submitted — thank you!', '🙏');
    });
  }
}

/* ══════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════ */
function initContactPage() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const wrap = document.querySelector('.contact-form-wrap');
    const success = document.querySelector('.form-success');
    if (success) success.style.display = 'block';
    form.style.display = 'none';
    showToast('Message sent! We\'ll reply within 24hrs.', '✉️');
  });
}
