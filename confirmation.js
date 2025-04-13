document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const seatPref = urlParams.get('seat-pref');

    const confirmationDetailsDiv = document.getElementById('confirmation-details');
    if (name && email && phone && seatPref) {
        confirmationDetailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Seat Preference:</strong> ${seatPref}</p>
            <p>Your booking has been confirmed!</p>
        `;
    } else {
        confirmationDetailsDiv.innerHTML = '<p>Booking details not found.</p>';
    }
});