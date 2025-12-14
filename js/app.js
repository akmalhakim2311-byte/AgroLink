class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  authenticate() {
    // Simple demo credentials
    if (this.username === "admin" && this.password === "1234") {
      return true;
    }
    return false;
  }
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  const user = new User(username, password);

  if (user.authenticate()) {
    window.location.href = "dashboard.html";
  } else {
    msg.innerText = "Invalid username or password";
    msg.style.color = "red";
  }
}

function sendWhatsApp() {
  const message = 
    "AgroLinkX Report:%0A" +
    "Operation Cost Calculation Completed.%0A" +
    "Status: Successful.%0A" +
    "Thank you.";

  const phoneNumber = "60123456789"; // demo number
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, "_blank");
}
