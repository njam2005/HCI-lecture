document.addEventListener("DOMContentLoaded", function() {
    const cartBtn = document.getElementById('cart-btn');
    const searchBtn = document.getElementById('search-btn');
    const profileBtn = document.getElementById('profile-btn');
    const cartDropdown = document.getElementById('cart-dropdown');
    const searchBar = document.getElementById('search-bar');
    const profilePopup = document.getElementById('profile-popup');
    const cancelBtn = document.getElementById('cancel-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const cartItem = document.querySelector('.cart-item');
    
    cartBtn.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    searchBtn.addEventListener('click', () => {
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    });

    profileBtn.addEventListener('click', () => {
        profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';
    });

    cancelBtn.addEventListener('click', () => {
        cartItem.style.display = 'none';
        emptyCartMessage.style.display = 'block';
    });

    checkoutBtn.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

});

// Slider Functionality
let currentSlide = 0;

        function showSlide(index) {
            const slider = document.getElementById('slider');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            slider.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }