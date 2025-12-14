class User {
  login(username) {
    if (username === "") {
      alert("Please enter username");
      return false;
    }
    window.location.href = "dashboard.html";
  }
}

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

function login() {
  const username = document.getElementById("username").value;
  const user = new User();
  user.login(username);
}

function calculate() {
  const area = document.getElementById("area").value;
  const hours = document.getElementById("hours").value;
  const rate = document.getElementById("rate").value;

  const plantation = new Plantation(area, hours, rate);
  const cost = plantation.calculateCost();

  document.getElementById("result").innerText =
    "Total Operational Cost: RM " + cost;
}
