const confirmationDetails = document.getElementById('confirmation-details');
const message = localStorage.getItem('confirmationMessage');

if (confirmationDetails && message) {
    confirmationDetails.textContent = message;
    localStorage.removeItem('confirmationMessage'); // Clear message
}
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate a random time in HH:MM format
    function generateRandomTime() {
        const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0'); // 00 to 23
        const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0'); // 00 to 59
        return `${hours}:${minutes}`;
    }

    // Generate random booking reference
    function generateBookingReference() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let reference = '';
        for (let i = 0; i < 8; i++) {
            reference += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return reference;
    }

    // Generate random seat preference (for demonstration)
    function generateSeatPreference() {
        const seatOptions = ['Any', 'Front Row', 'Middle Row', 'Back Row', 'Aisle'];
        return seatOptions[Math.floor(Math.random() * seatOptions.length)];
    }

    // Get the confirmation details div
    const confirmationDetailsDiv = document.getElementById('confirmation-details');

    // Create the message with random data
    const message = `
        <p>Thank you for your purchase!</p>
        <p>Booking Reference: ${generateBookingReference()}</p>
        <p>Movie Time: ${generateRandomTime()}</p>
        <p>Seat Preference: ${generateSeatPreference()}</p>
    `;

    // Set the message in the div
    confirmationDetailsDiv.innerHTML = message;
});