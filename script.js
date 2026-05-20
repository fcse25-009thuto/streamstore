const products = [
  { id: 1, name: 'Wireless Noise-Cancelling Headphones', category: 'electronics', price: 89.99, original: 149.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', badge: 'Best Seller', desc: 'Premium over-ear headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions.' },
  { id: 2, name: 'Smart Watch Ultra Pro', category: 'electronics', price: 69.99, original: 119.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', badge: 'New', desc: 'Advanced smartwatch with health monitoring, GPS tracking, and a stunning always-on AMOLED display.' },
  { id: 3, name: 'Premium Leather Backpack', category: 'fashion', price: 54.99, original: 89.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', badge: 'Trending', desc: 'Handcrafted genuine leather backpack with padded laptop compartment and antique brass hardware.' },
  { id: 4, name: 'Minimalist Wireless Earbuds', category: 'electronics', price: 49.99, original: 79.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&q=80', badge: '', desc: 'Compact true wireless earbuds with crystal-clear audio, IPX5 water resistance, and compact charging case.' },
  { id: 5, name: 'Slim Fit Sunglasses', category: 'accessories', price: 29.99, original: 59.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80', badge: 'Sale', desc: 'Lightweight UV400 protection sunglasses with polarized lenses and a sleek modern frame design.' },
  { id: 6, name: 'Mechanical Gaming Keyboard', category: 'gaming', price: 79.99, original: 129.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&q=80', badge: 'Hot', desc: 'RGB mechanical keyboard with hot-swappable switches, aircraft-grade aluminum frame, and programmable macros.' },
  { id: 7, name: 'Casual Sneakers Air', category: 'fashion', price: 64.99, original: 99.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', badge: '', desc: 'Breathable knit sneakers with responsive cushioning and a stylish street-ready silhouette.' },
  { id: 8, name: 'Leather Analog Watch', category: 'accessories', price: 44.99, original: 79.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80', badge: 'Limited', desc: 'Classic analog timepiece with genuine leather strap, sapphire crystal, and Japanese quartz movement.' },
  { id: 9, name: 'Wireless Gaming Mouse', category: 'gaming', price: 39.99, original: 69.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80', badge: '', desc: 'Ultra-lightweight wireless gaming mouse with 16000 DPI sensor, 60hr battery, and RGB lighting.' },
  { id: 10, name: 'Smart Home Speaker', category: 'electronics', price: 34.99, original: 59.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&q=80', badge: 'Sale', desc: 'Voice-controlled smart speaker with room-filling sound, multi-room support, and built-in assistant.' },
  { id: 11, name: 'Designer Cotton T-Shirt', category: 'fashion', price: 24.99, original: 44.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', badge: '', desc: 'Premium 100% organic cotton tee with a modern fit and minimalist designer aesthetic.' },
  { id: 12, name: 'Portable Bluetooth Speaker', category: 'electronics', price: 59.99, original: 89.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80', badge: 'Trending', desc: 'Rugged waterproof speaker with 360 sound, 20hr battery, and built-in power bank.' },
  { id: 13, name: 'RGB Gaming Headset', category: 'gaming', price: 59.99, original: 99.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80', badge: '', desc: '7.1 surround sound gaming headset with noise-cancelling mic, memory foam, and RGB lighting.' },
  { id: 14, name: 'Stainless Steel Water Bottle', category: 'accessories', price: 19.99, original: 34.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80', badge: 'Eco', desc: 'Double-wall vacuum insulated bottle. Keeps drinks cold 24hr or hot 12hr. BPA-free.' },
  { id: 15, name: 'Denim Jacket Classic', category: 'fashion', price: 74.99, original: 119.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80', badge: 'Trending', desc: 'Timeless denim jacket with a comfortable washed finish, chest pockets, and brass buttons.' },
  { id: 16, name: '4K Action Camera', category: 'electronics', price: 99.99, original: 169.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80', badge: 'Hot', desc: 'Waterproof 4K action camera with image stabilization, touch screen, and included mounting kit.' },
  { id: 17, name: 'Smart Home Bundle', category: 'deals', price: 129.99, original: 249.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80', badge: '70% OFF', desc: 'Complete smart home starter kit: speaker, lights, plug, and hub. Everything you need for a connected home at one unbeatable price.' },
  { id: 18, name: 'Premium Fashion Bundle', category: 'deals', price: 89.99, original: 219.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80', badge: '59% OFF', desc: 'Curated fashion bundle: designer sunglasses, premium watch, and leather wallet. Elevate your style with this exclusive set.' },
  { id: 19, name: 'Gaming Starter Pack', category: 'deals', price: 149.99, original: 329.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80', badge: '54% OFF', desc: 'Ultimate gaming bundle: mechanical keyboard, wireless mouse, RGB headset, and mouse pad. Everything a gamer needs to dominate.' },
  { id: 20, name: 'Audio Lovers Collection', category: 'deals', price: 109.99, original: 259.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80', badge: '58% OFF', desc: 'Premium audio bundle: noise-cancelling headphones, portable speaker, and wireless earbuds. Immerse yourself in crystal-clear sound.' },
];

let cart = JSON.parse(localStorage.getItem('ss_cart')) || [];
let currentCategory = 'all';
let detailQty = 1;

function saveCart() {
  localStorage.setItem('ss_cart', JSON.stringify(cart));
}

// ============================
// Product Card HTML
// ============================
function productCardHTML(p) {
  return `
    <div class="col-6 col-md-4 col-lg-3 col-xl-2">
      <div class="card product-card" onclick="goToProduct(${p.id})">
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <span class="product-rating"><i class="bi bi-star-fill"></i> ${p.rating}</span>
        </div>
        <div class="product-body">
          <div class="product-category">${p.category}</div>
          <div class="product-title">${p.name}</div>
          <div class="d-flex justify-content-between align-items-center mt-1">
            <div class="product-price">P${p.price.toFixed(2)} <span class="original">P${p.original.toFixed(2)}</span></div>
            <button class="btn btn-add" onclick="event.stopPropagation(); addToCart(${p.id})"><i class="bi bi-plus-lg me-1"></i>Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function goToProduct(id) {
  window.location.href = 'product.html?id=' + id;
}

// ============================
// Render Products (shared)
// ============================
function renderProducts(cat = 'all', containerId = 'productsContainer') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
  container.innerHTML = filtered.map(productCardHTML).join('');
}

// ============================
// Render Shop Page
// ============================
function renderShopProducts(cat = 'all') {
  const container = document.getElementById('shopProductsContainer');
  if (!container) return;
  currentCategory = cat;
  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
  container.innerHTML = filtered.map(productCardHTML).join('');
}

// ============================
// Category Filtering (index page)
// ============================
document.querySelectorAll('.category-card').forEach(el => {
  el.addEventListener('click', function() {
    document.querySelector('.category-card.active')?.classList.remove('active');
    this.classList.add('active');
    const cat = this.dataset.category;
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) {
      const titles = { 'all': 'Trending Now', 'deals': '🔥 Hot Deals' };
      sectionTitle.textContent = titles[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
    }
    if (document.getElementById('productsContainer')) {
      renderProducts(cat);
    }
    if (document.getElementById('shopProductsContainer')) {
      renderShopProducts(cat);
    }
  });
});

// ============================
// Shop filter buttons
// ============================
document.querySelectorAll('.filter-btn').forEach(el => {
  el.addEventListener('click', function() {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    this.classList.add('active');
    renderShopProducts(this.dataset.filter);
  });
});

// ============================
// Cart Functions
// ============================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById('cartCount');
  const cartSidebarCount = document.getElementById('cartSidebarCount');
  if (cartCount) cartCount.textContent = count;
  if (cartSidebarCount) cartSidebarCount.textContent = count;

  // Update sidebar cart
  const cartItems = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const cartTotal = document.getElementById('cartTotal');

  if (cartItems && emptyCart && cartTotal) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    cartTotal.textContent = `P${total.toFixed(2)}`;
    if (cart.length === 0) {
      emptyCart.style.display = 'block';
      cartItems.innerHTML = '';
    } else {
      emptyCart.style.display = 'none';
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">P${item.price.toFixed(2)}</div>
            <div class="cart-item-qty">
              <button onclick="changeQty(${item.id}, -1)"><i class="bi bi-dash"></i></button>
              <span>${item.qty}</span>
              <button onclick="changeQty(${item.id}, 1)"><i class="bi bi-plus"></i></button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="bi bi-trash3"></i></button>
        </div>
      `).join('');
    }
  }

  // Update cart page table if it exists
  renderCartPage();
  renderCheckout();
}

// ============================
// Cart Page
// ============================
function renderCartPage() {
  const tbody = document.getElementById('cartPageBody');
  const emptyState = document.getElementById('cartPageEmpty');
  const summaryContainer = document.getElementById('cartPageSummary');
  const cartPageContent = document.getElementById('cartPageContent');
  const cartItemCount = document.getElementById('cartItemCount');
  if (!tbody && !emptyState) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (cartPageContent) cartPageContent.style.display = 'none';
    if (cartItemCount) cartItemCount.textContent = '0 items in your cart';
    if (tbody) tbody.innerHTML = '';
    if (summaryContainer) {
      summaryContainer.innerHTML = `
        <div class="cart-summary">
          <h5>Order Summary</h5>
          <div class="summary-row"><span>Subtotal</span><span>P0.00</span></div>
          <div class="summary-row"><span>Shipping</span><span>P0.00</span></div>
          <div class="summary-row total"><span>Total</span><span>P0.00</span></div>
          <a href="shop.html" class="btn btn-danger w-100 fw-bold mt-3 rounded-1">Start Shopping</a>
        </div>
      `;
    }
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (cartPageContent) cartPageContent.style.display = '';
  if (cartItemCount) cartItemCount.textContent = cart.reduce((s, i) => s + i.qty, 0) + ' items in your cart';

  if (tbody) {
    tbody.innerHTML = cart.map(item => `
      <tr>
        <td>
          <div class="cart-page-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-page-item-info">
              <h6>${item.name}</h6>
              <small>${item.category}</small>
            </div>
          </div>
        </td>
        <td>P${item.price.toFixed(2)}</td>
        <td>
          <div class="cart-item-qty">
            <button onclick="changeQty(${item.id}, -1)"><i class="bi bi-dash"></i></button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id}, 1)"><i class="bi bi-plus"></i></button>
          </div>
        </td>
        <td class="fw-bold" style="color:#46d369">P${(item.price * item.qty).toFixed(2)}</td>
        <td><button class="btn btn-sm text-muted" onclick="removeFromCart(${item.id})"><i class="bi bi-x-lg"></i></button></td>
      </tr>
    `).join('');
  }

  if (summaryContainer) {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal >= 50 ? 0 : 9.99;
    const total = subtotal + shipping;
    summaryContainer.innerHTML = `
      <div class="cart-summary">
        <h5>Order Summary</h5>
        <div class="summary-row"><span>Subtotal</span><span>P${subtotal.toFixed(2)}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : 'P' + shipping.toFixed(2)}</span></div>
        <div class="summary-row total"><span>Total</span><span>P${total.toFixed(2)}</span></div>
        <a href="checkout.html" class="btn btn-danger w-100 fw-bold mt-3 rounded-1 d-block text-center">PROCEED TO CHECKOUT</a>
      </div>
    `;
  }
}

// ============================
// Product Detail Page
// ============================
function loadProductDetail() {
  const container = document.getElementById('productDetailContainer');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);

  if (!product) {
    container.innerHTML = '<div class="text-center py-5"><h4>Product not found</h4><a href="shop.html" class="btn btn-danger mt-3">Back to Shop</a></div>';
    return;
  }

  detailQty = 1;

  const breadcrumb = document.getElementById('breadcrumbProduct');
  if (breadcrumb) breadcrumb.textContent = product.name;

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6">
        <img src="${product.image}" alt="${product.name}" class="product-detail-img">
      </div>
      <div class="col-lg-6">
        ${product.badge ? `<span class="detail-badge mb-3 d-inline-block">${product.badge}</span>` : ''}
        <h1 class="detail-title mb-3">${product.name}</h1>
        <div class="d-flex align-items-center gap-3 mb-3">
          <span class="detail-price">P${product.price.toFixed(2)}</span>
          <span class="detail-original">P${product.original.toFixed(2)}</span>
          <span class="badge bg-success" style="font-size:0.75rem;">Save P${(product.original - product.price).toFixed(2)}</span>
        </div>
        <div class="detail-rating mb-3">
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          <span>${product.rating} (256 reviews)</span>
        </div>
        <p class="detail-desc mb-4">${product.desc}</p>
        <div class="detail-info-item"><i class="bi bi-truck"></i> Free shipping on orders over P50</div>
        <div class="detail-info-item"><i class="bi bi-arrow-counterclockwise"></i> 30-day easy returns</div>
        <div class="detail-info-item"><i class="bi bi-shield-check"></i> 1 year warranty included</div>
        <div class="mt-4 d-flex align-items-center gap-3 flex-wrap">
          <div class="qty-selector">
            <button onclick="changeDetailQty(-1)"><i class="bi bi-dash"></i></button>
            <span id="detailQtyDisplay">1</span>
            <button onclick="changeDetailQty(1)"><i class="bi bi-plus"></i></button>
          </div>
          <button class="btn-buy" onclick="addToCartDetail()"><i class="bi bi-cart3 me-2"></i>Add to Cart</button>
          <button class="btn-wishlist"><i class="bi bi-heart"></i></button>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h4 class="fw-bold mb-4">Customer Reviews</h4>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="review-card">
            <div class="d-flex gap-3 mb-2">
              <div class="review-avatar" style="background:#e50914">JD</div>
              <div><h6 class="mb-0 fw-bold">John D.</h6><small class="text-muted">Verified Purchase</small></div>
            </div>
            <div class="detail-rating mb-2" style="font-size:0.85rem"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
            <p class="text-muted small mb-0">Absolutely love this product! Exceeded my expectations. Fast shipping too.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="review-card">
            <div class="d-flex gap-3 mb-2">
              <div class="review-avatar" style="background:#46d369">SM</div>
              <div><h6 class="mb-0 fw-bold">Sarah M.</h6><small class="text-muted">Verified Purchase</small></div>
            </div>
            <div class="detail-rating mb-2" style="font-size:0.85rem"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
            <p class="text-muted small mb-0">Great quality for the price. Would definitely recommend to friends.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function changeDetailQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  const el = document.getElementById('detailQtyDisplay');
  if (el) el.textContent = detailQty;
}

function addToCartDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += detailQty;
  } else {
    cart.push({ ...product, qty: detailQty });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added!`);
  detailQty = 1;
  const el = document.getElementById('detailQtyDisplay');
  if (el) el.textContent = 1;
}

// ============================
// Checkout Page
// ============================
function renderCheckout() {
  const container = document.getElementById('checkoutItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p class="text-muted small">Your cart is empty.</p>';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="order-review-item">
      <div class="d-flex align-items-center gap-2">
        <img src="${item.image}" alt="${item.name}">
        <div><span>${item.name}</span><br><small class="text-muted">Qty: ${item.qty}</small></div>
      </div>
      <span class="fw-bold" style="font-size:0.85rem;">P${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const el = (id) => document.getElementById(id);
  if (el('checkoutSubtotal')) el('checkoutSubtotal').textContent = `P${subtotal.toFixed(2)}`;
  if (el('checkoutShipping')) el('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `P${shipping.toFixed(2)}`;
  if (el('checkoutTax')) el('checkoutTax').textContent = `P${tax.toFixed(2)}`;
  if (el('checkoutTotal')) el('checkoutTotal').textContent = `P${total.toFixed(2)}`;
}

function completeCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  const terms = document.getElementById('termsCheck');
  if (terms && !terms.checked) {
    showToast('Please agree to the Terms of Service.');
    return;
  }
  cart = [];
  saveCart();
  updateCartUI();
  renderCheckout();
  showToast('Order placed successfully! Thank you for your purchase.');
}

// ============================
// Toast
// ============================
function showToast(msg) {
  const container = document.getElementById('toastContainer') || (() => {
    const div = document.createElement('div');
    div.id = 'toastContainer';
    div.className = 'toast-container';
    document.body.appendChild(div);
    return div;
  })();
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// ============================
// Cart Sidebar Toggle
// ============================
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('show');
  });
}

const closeCartBtn = document.getElementById('closeCart');
if (closeCartBtn) {
  closeCartBtn.addEventListener('click', closeCart);
}

const cartOverlay = document.getElementById('cartOverlay');
if (cartOverlay) {
  cartOverlay.addEventListener('click', closeCart);
}

function closeCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

// ============================
// Search
// ============================
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    const term = this.value.toLowerCase().trim();
    const container = document.getElementById('productsContainer') || document.getElementById('shopProductsContainer');
    if (!container) return;
    if (!term) {
      if (document.getElementById('productsContainer')) renderProducts(currentCategory);
      if (document.getElementById('shopProductsContainer')) renderShopProducts(currentCategory);
      return;
    }
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    container.innerHTML = filtered.length
      ? filtered.map(productCardHTML).join('')
      : '<p class="text-muted text-center py-5 w-100">No products found.</p>';
  });
}

// ============================
// Scroll Effect
// ============================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// ============================
// Scroll to Products
// ============================
function scrollToProducts() {
  const el = document.getElementById('productsSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============================
// Init
// ============================
updateCartUI();
if (document.getElementById('productsContainer')) renderProducts();
if (document.getElementById('shopProductsContainer')) renderShopProducts();
if (document.getElementById('productDetailContainer')) loadProductDetail();
if (document.getElementById('cartPageBody')) renderCartPage();
if (document.getElementById('checkoutItems')) renderCheckout();

// Set active nav link based on page
const pageMap = {
  'index.html': 0, 'shop.html': 1, 'product.html': 1,
  'cart.html': 2, 'checkout.html': 3, 'contact.html': 4
};
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const idx = pageMap[currentPage];
if (idx !== undefined && navLinks[idx]) {
  navLinks.forEach(l => l.classList.remove('active-page'));
  navLinks[idx].classList.add('active-page');
}
