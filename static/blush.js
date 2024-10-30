// blush.js

// Variables del carrito
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');

// Función para actualizar el contador del carrito
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
  renderCart();
}

// Función para agregar un producto al carrito
function addToCart(name, price) {
  const product = { name, price: parseFloat(price) };
  cart.push(product);
  updateCartCount();
  renderCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCart();
}

// Función para renderizar los elementos del carrito
function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    const itemInfo = document.createElement('div');
    itemInfo.innerHTML = `<h4>${item.name}</h4><p>$${item.price.toFixed(2)}</p>`;
    
    const removeBtn = document.createElement('span');
    removeBtn.classList.add('remove-item');
    removeBtn.innerHTML = '&times;';
    removeBtn.onclick = () => removeFromCart(index);
    
    cartItem.appendChild(itemInfo);
    cartItem.appendChild(removeBtn);
    
    cartItemsContainer.appendChild(cartItem);
  });

  totalPriceEl.textContent = total.toFixed(2);
}

// Función para finalizar la compra
function checkout() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío.');
    return;
  }
  // Aquí puedes agregar la lógica para procesar el pago
  alert('Gracias por tu compra!');
  cart = [];
  updateCartCount();
  renderCart();
  toggleCart();
}

// Event Listeners para los botones "Agregar al Carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    addToCart(name, price);
  });
});

// Cerrar el carrito al hacer clic fuera del modal
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
}

// Funciones de carrusel existentes
// Carrusel principal
let slideIndex = 0;
const slides = document.querySelectorAll('.carusel-body');

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  document.querySelector('.carousel-slide').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Carrusel de productos
let productoSlideIndex = 0;
const productoSlides = document.querySelectorAll('.carousel-slide-productos .producto');
const totalProductos = productoSlides.length;

function moveProductoSlide(n) {
  productoSlideIndex += n;
  if (productoSlideIndex >= totalProductos) productoSlideIndex = 0;
  if (productoSlideIndex < 0) productoSlideIndex = totalProductos - 1;
  document.querySelector('.carousel-slide-productos').style.transform = `translateX(${-productoSlideIndex * 100}%)`;
}
