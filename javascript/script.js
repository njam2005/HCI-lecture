
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-button');
    const filterLinks = document.querySelectorAll('.filter');
    const items = document.querySelectorAll('.container-makanan');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent default action if it's a link
            if (this.tagName === 'A') event.preventDefault();

            // Close any open dropdowns except the one that is clicked
            const allDropdowns = document.querySelectorAll('.dropdown-content');
            allDropdowns.forEach(dropdown => {
                if (dropdown !== this.nextElementSibling) {
                    dropdown.style.display = 'none';
                }
            });

            // Reset all chevron icons except the one that is clicked
            const allIcons = document.querySelectorAll('.menu-button i');
            allIcons.forEach(icon => {
                if (icon !== this.querySelector('i')) {
                    icon.setAttribute('data-feather', 'chevron-down');
                }
            });

            // Open the clicked dropdown
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            const icon = this.querySelector('i');

            if (target.style.display === 'block') {
                target.style.display = 'none';
                icon.setAttribute('data-feather', 'chevron-down');
            } else {
                target.style.display = 'block';
                icon.setAttribute('data-feather', 'chevron-up');
            }

            feather.replace(); // Update icons
        });
    });

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.dataset.category;

            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Click outside to close dropdown
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-button') && !event.target.matches('.filter')) {
            const allDropdowns = document.querySelectorAll('.dropdown-content');
            allDropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
            const allIcons = document.querySelectorAll('.menu-button i');
            allIcons.forEach(icon => {
                icon.setAttribute('data-feather', 'chevron-down');
            });
            feather.replace(); // Update icons
        }
    });

    // Ensure all items are visible by default
    items.forEach(item => {
        item.classList.remove('hidden');
    });


    
});

let cart = [];

function addToCart(button) {
    const productCard = button.closest('.container-makanan');
    const name = productCard.dataset.name;
    const price = parseFloat(productCard.dataset.price);
    const image = productCard.querySelector('img').src;

    const existingProduct = cart.find(product => product.name === name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    renderCart();
}
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <span>${product.name}</span>
            <div class="quantity-controls">
                <button onclick="decreaseQuantity('${product.name}')">-</button>
                <span>${product.quantity}</span>
                <button onclick="increaseQuantity('${product.name}')">+</button>
            </div>
            <span>${formatPrice(product.price * product.quantity)}</span>
            <button class="remove-btn" onclick="removeFromCart('${product.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

function formatPrice(price) {
    // Format price in Indonesian Rupiah (Rp) format
    return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}
function removeFromCart(name) {
    cart = cart.filter(product => product.name !== name);
    renderCart();
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = cartElement.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
    const checkoutModal = document.getElementById('checkout-modal');
    const cartSummaryItems = document.getElementById('cart-summary-items');
    const productCount = document.getElementById('product-count');
    const productTotal = document.getElementById('product-total');
    const cartTotal = document.getElementById('cart-total');

    // Populate cart summary
    cartSummaryItems.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;
    cart.forEach(product => {
        totalItems += product.quantity;
        totalPrice += product.price * product.quantity;

        const summaryItem = document.createElement('div');
        summaryItem.className = 'cart-item';
        summaryItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="product-info">
                <span>${product.name}</span>
                <span>${formatPrice(product.price * product.quantity)}</span>
            </div>
        `;
        cartSummaryItems.appendChild(summaryItem);
    });

    productCount.textContent = totalItems;
    productTotal.textContent = formatPrice(totalPrice);
    cartTotal.textContent = formatPrice(totalPrice + 15000 + 7000); // Adding shipping and handling fees

    checkoutModal.style.display = 'block';
}

function formatPrice(price) {
    // Format price in Indonesian Rupiah (Rp) format
    return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'none';
}

function completeCheckout() {
    alert('Checkout completed!');
    closeCheckout();
    // Add more checkout completion logic as needed
}

window.addEventListener('click', function(event) {
    const checkoutModal = document.getElementById('checkout-modal');
    if (event.target == checkoutModal) {
        checkoutModal.style.display = 'none';
    }
});

// Add event listeners for checkout buttons
document.getElementById('checkout-button').addEventListener('click', checkout);

function increaseQuantity(name) {
    const product = cart.find(product => product.name === name);
    if (product) {
        product.quantity += 1;
        renderCart();
    }
}

function decreaseQuantity(name) {
    const product = cart.find(product => product.name === name);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        renderCart();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
function showSignInPopup() {
    document.getElementById('sign-in-popup').style.display = 'flex';
}

function closeSignInPopup() {
    document.getElementById('sign-in-popup').style.display = 'none';
}

function showSignUpPopup() {
    // Close sign-in popup
    closeSignInPopup();
    
    // You can add your logic to show the sign-up popup here
    // For example:
    document.getElementById('sign-up-popup').style.display = 'flex';
}

// Close the popup when clicking outside the content
window.onclick = function(event) {
    const popup = document.getElementById('sign-in-popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

// Add event listener for the close icon inside the sign-in popup
document.getElementById('close-sign-in-popup').addEventListener('click', function() {
    closeSignInPopup();
});

function toggleSearch() {
    var searchContainer = document.getElementById("searchContainer");
    if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  }
  
  function filterItems() {
    var input = document.getElementById("searchInput").value.trim().toUpperCase();
    var items = document.querySelectorAll(".container-makanan");

    console.log("Search input:", input); // Log the search input to the console

    items.forEach(function(item) {
        var name = item.getAttribute("data-name").toUpperCase();
        var itemName = item.querySelector('.merek').textContent.toUpperCase(); // Get the item name from its child element

        console.log("Item name:", itemName); // Log the item name to the console

        if (name.includes(input) || itemName.includes(input)) {
            item.style.display = "block"; // Display the item if its name or item name matches the search input
        } else {
            item.style.display = "none"; // Hide the item if its name or item name does not match the search input
        }
    });
}

  
  // Tambahkan event listener untuk event input change
  document.getElementById("searchInput").addEventListener("input", filterItems);
  
// scripts.js

function showProductDetails(image) {
    var container = image.parentNode;
    var name = container.getAttribute("data-name");
    var price = container.getAttribute("data-price");
    var category = container.getAttribute("data-category");

    // Populate modal with data
    document.getElementById("modal-name").textContent = name;
    document.getElementById("modal-price").textContent = "Price: Rp" + price;
    document.getElementById("modal-category").textContent = "Category: " + category;

    // Show the modal
    var modal = document.getElementById("productModal");
    modal.style.display = "block";
}

function closeModal() {
    // Close the modal
    var modal = document.getElementById("productModal");
    modal.style.display = "none";
}
    