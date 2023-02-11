//This is an example where you can add your validation or any other logic in JS
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Incorrect username or password.");
    }
  });
  