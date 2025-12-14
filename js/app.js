// ================= SIGN UP =================
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Sign up successful");
  window.location.href = "dashboard.html";
}

// ================= LOGIN =================
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (
    email === localStorage.getItem("userEmail") &&
    password === localStorage.getItem("userPassword")
  ) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMsg").innerText =
      "Invalid email or password";
  }
}

// ================= LOGOUT =================
function logout() {
  window.location.href = "index.html";
}

// ================= CALCULATION =================
function calculate() {
  const area = Number(document.getElementById("area").value);
  const hours = Number(document.getElementById("hours").value);
  const rate = Number(document.getElementById("rate").value);

  const total = area * hours * rate;
  localStorage.setItem("totalCost", total);

  document.getElementById("result").innerText =
    "Total Cost: RM " + total;
}

// ================= EMAIL RECEIPT =================
function sendReceipt() {
  const email = localStorage.getItem("userEmail");
  const cost = localStorage.getItem("totalCost");

  fetch("https://YOUR-BACKEND-URL/send-receipt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, totalCost: cost })
  })
  .then(res => res.json())
  .then(() => alert("Receipt sent to " + email))
  .catch(() => alert("Failed to send receipt"));
}
