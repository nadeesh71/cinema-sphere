document.addEventListener('DOMContentLoaded', function() {
    // Display Cart Items
    let cart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    let cartTableBody = document.querySelector('#checkout-cart-table tbody');
    let totalPriceElement = document.getElementById('checkout-total-price');
    let totalPrice = 0;

    cart.forEach(item => {
        let row = cartTableBody.insertRow();
        let movieCell = row.insertCell();
        let quantityCell = row.insertCell();
        let priceCell = row.insertCell();

        movieCell.textContent = item.title;
        quantityCell.textContent = item.quantity;
        priceCell.textContent = 'Rs. ' + (item.price * item.quantity).toFixed(2);

        totalPrice += item.price * item.quantity;
    });

    if (totalPriceElement) {
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Form Submission
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const seatPref = document.getElementById('seat-pref').value;
        //Do not send card details via url.

        // Redirect to confirmation.html with URL parameters.
        window.location.href = `confirmation.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&seat-pref=${encodeURIComponent(seatPref)}`;

    });
});