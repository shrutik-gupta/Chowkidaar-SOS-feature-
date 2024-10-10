const email = "shrutikgupta07@gmail.com";

// Function to get the user's current location and send an emergency email
function getLocationAndSendEmail() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Callback function when the position is retrieved successfully
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const subject = encodeURIComponent("Emergency");
  const body = encodeURIComponent(`Please assist with an emergency situation!\nLocation: https://www.google.com/maps?q=${latitude},${longitude}`);
  
  // Sending email with geolocation link
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// Handle errors during geolocation fetching
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

// Function to handle emergency contact dialing
function callEmergencyService(phoneNumber) {
  window.location.href = `tel:${phoneNumber}`;
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
  const universalEmergencyBtn = document.querySelector('button[onclick="universalEmergency()"]');
  if (universalEmergencyBtn) {
    // When the button is clicked, get the location and then send the email
    universalEmergencyBtn.addEventListener('click', getLocationAndSendEmail);
  }

  const emergencyButtons = document.querySelectorAll('button[onclick^="callEmergencyService"]');
  emergencyButtons.forEach(button => {
    const phoneNumber = button.getAttribute('onclick').match(/'(\d+)'/)[1];
    button.addEventListener('click', () => callEmergencyService(phoneNumber));
  });
});

// Add animation to icons
const icons = document.querySelectorAll('.col i');
icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease';
  });
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});
