const confirmationDetails = document.getElementById('confirmation-details');
const message = localStorage.getItem('confirmationMessage');

if (confirmationDetails && message) {
    confirmationDetails.textContent = message;
    localStorage.removeItem('confirmationMessage'); // Clear message
}