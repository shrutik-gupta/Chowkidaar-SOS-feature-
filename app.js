const email = "example@gmail.com";

// Function to handle emergency button click
function universalEmergency() {
  const subject = encodeURIComponent("Emergency");
  const body = encodeURIComponent("Please assist with an emergency situation!");
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// Function to handle emergency contact dialing
function callEmergencyService(phoneNumber) {
  window.location.href = `tel:${phoneNumber}`;
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
  const universalEmergencyBtn = document.querySelector('button[onclick="universalEmergency()"]');
  if (universalEmergencyBtn) {
    universalEmergencyBtn.addEventListener('click', universalEmergency);
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