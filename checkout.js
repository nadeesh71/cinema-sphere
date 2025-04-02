const cart = JSON.parse(localStorage.getItem('checkoutCart')) || []; // Corrected key

function populateCheckoutSummary() {
    const cartTableBody = document.querySelector("#checkout-cart-table tbody");
    const totalPriceElement = document.getElementById("checkout-total-price");
    if (!cartTableBody || !totalPriceElement) return;

    cartTableBody.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item) => {
        const row = document.createElement("tr");
        let displayPrice = item.price;
        if (typeof item.price === 'number') {
            displayPrice = `Rs. ${(item.price * item.quantity).toFixed(2)}`; // Using Rs. here
            totalPrice += item.price * item.quantity;
        } else {
            displayPrice = item.price; // Display "TBA" or similar
        }
        row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.quantity}</td>
            <td>${displayPrice}</td>
        `;
        cartTableBody.appendChild(row);

    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

populateCheckoutSummary();

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate payment processing and generate booking details
    const bookingReference = Math.random().toString(36).substring(2, 10).toUpperCase();
    const movieTimes = cart.map(item => `${item.title}: [Simulated Time]`).join(', ');
    const seatDetails = document.getElementById('seat-pref').value;

    // Construct the confirmation message
    const confirmationMessage = `
        Thank you for your purchase!
        Booking Reference: ${bookingReference}
        Movie Times: ${movieTimes}
        Seat Preference: ${seatDetails}
    `;

    // Redirect to confirmation page with message
    localStorage.setItem('confirmationMessage', confirmationMessage);
    localStorage.removeItem('checkoutCart'); // Remove the cart.
    window.location.href = 'confirmation.html';
});