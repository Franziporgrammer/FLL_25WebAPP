const form = document.getElementById('submissionForm');
const photoUpload = document.getElementById('photoUpload');
const positionInput = document.getElementById('position');
const textEntry = document.getElementById('textEntry');
const timeLog = document.getElementById('timeLog');

// Function to get user's location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    positionInput.value = "Geolocation is not supported by this browser.";
  }
}

// Function to display the position
function showPosition(position) {
  positionInput.value = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}

// Function to handle geolocation errors
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      positionInput.value = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      positionInput.value = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      positionInput.value = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      positionInput.value = "An unknown error occurred.";
      break;
  }
}

// Call the function to get the location when the page loads
window.onload = getLocation;

// Form submission handling (rest of the code remains the same)
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // ... (Rest of your form submission code)
});

// ... (rest of the script.js code)

// Function to display the position
function showPosition(position) {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Format the time for display
  
    positionInput.value = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}, Time: ${formattedTime}`;
  }
  
// ... (rest of the script.js code)

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get the values from the input fields
    const position = positionInput.value;
    const text = textEntry.value;
    const time = timeLog.value; // This is the datetime-local input
  
    // Get the current timestamp
    const now = new Date();
    const timestamp = now.toLocaleString(); // Format the time for display
  
    // Add the timestamp to the text
    const textWithTimestamp = `[${timestamp}] ${text}`;
  
    // Handle file upload (you'll need to implement a backend to handle this)
    // Example using FormData
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('position', position);
    formData.append('text', textWithTimestamp); // Send the text with timestamp
    formData.append('time', time);
  
    // ... (rest of the form submission code)
  });