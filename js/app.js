// ================= USER CLASS =================
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  authenticate() {
    // Demo credentials
    return this.username === "admin" && this.password === "1234";
  }
}

// ================= PLANTATION CLASS =================
class Plantation {
  constructor(area, hours, rate) {
    this.area = area;
    this.hours = hours;
    this.rate = rate;
  }

  calculateCost() {
    return this.area * this.hours * this.rate;
  }
}

// ================= LOGIN FUNCTION =================
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  const user = new User(username, password);

  if (user.authenticate()) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    msg.innerText = "Invalid username or password";
    msg.style.color = "red";
  }
}

// ================= CALCULATION FUNCTION =================
function calculate() {
  const area = Number(document.getElementById("area").value);
  const hours = Number(document.getElementById("hours").value);
  const rate = Number(document.getElementById("rate").value);

  const plantation = new Plantation(area, hours, rate);
  const cost = plantation.calculateCost();

  localStorage.setItem("totalCost", cost);

  document.getElementById("result").innerText =
    "Total Operational Cost: RM " + cost;
}

// ================= NOTIFICATION DISPLAY =================
document.addEventListener("DOMContentLoaded", function () {
  const summary = document.getElementById("summary");
  if (summary) {
    const cost = localStorage.getItem("totalCost");
    summary.innerText =
      "Operation Completed Successfully.\nTotal Cost: RM " + cost;
  }
});

// ================= WHATSAPP NOTIFICATION =================
function sendWhatsApp() {
  const cost = localStorage.getItem("totalCost");

  const message =
    "AgroLinkX Report:%0A" +
    "Operation Cost Calculation Completed.%0A" +
    "Total Cost: RM " + cost + "%0A" +
    "Status: Successful.";

  const phoneNumber = "60123456789"; // Demo number
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, "_blank");
}
