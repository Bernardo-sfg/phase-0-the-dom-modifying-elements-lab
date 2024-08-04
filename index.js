
// Remove the existing <main> element
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id to 'victory'
newHeader.id = "victory";

// Set the text content with your name
newHeader.textContent = "YourName is the champion"; // Replace 'YourName' with your actual name

// Append the <h1> element to the body
document.body.appendChild(newHeader);