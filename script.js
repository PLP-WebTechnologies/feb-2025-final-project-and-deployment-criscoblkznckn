function showAlert() {
  alert("Thanks for clicking! 🚀");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
    return false;
  }

  msg.textContent = "Thank you! We'll get back to you.";
  msg.style.color = "green";
  return false; // Prevent real submission
}
