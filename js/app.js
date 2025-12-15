// ================= SESSION CHECK =================
function checkSession() {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
  }
}

// ================= SIGN UP =================
function signup() {
  const email = signupEmail.value;
  const password = signupPassword.value;

  if (!email || !password) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created");
  window.location.href = "index.html";
}

// ================= LOGIN =================
function login() {
  const email = loginEmail.value;
  const password = loginPassword.value;

  if (
    email === localStorage.getItem("userEmail") &&
    password === localStorage.getItem("userPassword")
  ) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("email", email);
    window.location.href = "dashboard.html";
  } else {
    loginMsg.innerText = "Invalid credentials";
  }
}

// ================= LOGOUT =================
function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

// ================= CALCULATION =================
function calculate() {
  const area = Number(areaInput.value);
  const hours = Number(hoursInput.value);
  const rate = Number(rateInput.value);

  if (!area || !hours || !rate) {
    alert("Enter all values");
    return;
  }

  const total = area * hours * rate;
  localStorage.setItem("totalCost", total);

  result.innerText = "Total Cost: RM " + total;
}

// ================= EMAIL + PDF =================
function sendEmailInvoice() {
  const email = sessionStorage.getItem("email");
  const totalCost = localStorage.getItem("totalCost");

  fetch("https://YOUR-BACKEND-URL/send-invoice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, totalCost })
  })
  .then(() => alert("Email + PDF Invoice sent"))
  .catch(() => alert("Email failed"));
}

// ================= WHATSAPP =================
function sendWhatsApp() {
  const cost = localStorage.getItem("totalCost");

  const message =
    "AgroLinkX Invoice Notification%0A%0A" +
    "Total Cost: RM " + cost + "%0A" +
    "Invoice sent to your email.";

  const url = "https://wa.me/60174909836?text=" + message;
  window.open(url, "_blank");
}
