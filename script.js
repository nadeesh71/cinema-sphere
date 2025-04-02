document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.movie-card button');
    const cartTableBody = document.querySelector('#cart-table tbody');
    const totalPriceElement = document.querySelector('#total-price');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() { 
            const movieCard = this.parentElement;
            const movieTitle = movieCard.querySelector('h3').textContent;
            const priceText = movieCard.querySelector('p').textContent;
            const moviePrice = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            const quantityInput = movieCard.querySelector('input[type="number"]');
            const quantity = parseInt(quantityInput.value)
            const movieImage = movieCard.querySelector('img').src;

            if (quantity > 0) {
                const existingItem = cart.find(item => item.title === movieTitle);
                if (existingItem) {
                    existingItem.quantity += quantity; // Increase quantity if the movie already exists in the cart
                } else {
                    cart.push({
                        title: movieTitle,
                        price: moviePrice,
                        quantity: quantity,
                        image: movieImage
                    });
                }
                updateCartDisplay();
            }
        }); 
    });

    function updateCartDisplay() {
        cartTableBody.innerHTML = ''; // Clear the cart table body
        let total = 0;

        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.title}</td>
                <td>${item.quantity}</td>
                <td>Rs. ${(item.price * item.quantity).toFixed(2)}</td>
            `;
            cartTableBody.appendChild(row);
            total += item.price * item.quantity;
        });

        if (totalPriceElement) {
            totalPriceElement.textContent = total.toFixed(2);
        }
    }

    // Save as Favourite
    document.querySelector('#save-favourite').addEventListener('click', function() {
        localStorage.setItem('favouriteCart', JSON.stringify(cart));
        alert('Cart saved as favourite!');
    });

    // Apply Favourite
    document.querySelector('#apply-favourite').addEventListener('click', function() {
        const favouriteCart = JSON.parse(localStorage.getItem('favouriteCart'));
        console.log('favouriteCart from localStorage:', favouriteCart);

        if (favouriteCart && Array.isArray(favouriteCart)) {
            cart = favouriteCart;
            console.log('Cart after applying favourite:', cart);
            updateCartDisplay();
            alert('Favourite cart applied!');
        } else {
            alert('No favourite cart found or invalid data.');
        }
    });

    // Proceed to Checkout
    document.querySelector('#proceed-checkout').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add movies to your cart.');
        } else {
            localStorage.setItem('checkoutCart', JSON.stringify(cart)); // Store cart data
            window.location.href = 'checkout.html';
        }
    });

    // Toggle Navigation (responsive menu)
    document.querySelector('#nav-toggle').addEventListener('click', toggleNav);

    function toggleNav() {
        const nav = document.getElementById("main-nav");   
        if (nav.className === "responsive") {
            nav.className = "";
        } else {
            nav.className = "responsive";
        }
    }
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}