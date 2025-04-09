document.addEventListener('DOMContentLoaded', function() {
    // Get the payment form
    const paymentForm = document.getElementById('payment-form');

    // Add event listener to the form submission (Pay button click)
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate payment processing (replace with actual logic if needed)
        console.log("Payment processing...");

        // Redirect to the confirmation page
        window.location.href = 'confirmation.htcdml';
    });
});
