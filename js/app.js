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
