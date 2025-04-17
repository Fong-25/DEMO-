const login1 = document.getElementById("login1")
const login2 = document.getElementById("login2")


checkLogin();

async function checkLogin() {
  const response = await fetch('http://localhost:3000/api/auth/isloggedin', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json();
  if (data.loggedin) {
    console.log(true);
    updateButtonsToLoggedIn();
    return true
  } else {
    console.log(false);
    return false
  }
}

function updateButtonsToLoggedIn() {
  // Update sidebar login button
  if (login1) {
    login1.innerHTML = '<i class="fa-solid fa-user-check" style="margin-right: 5px;"></i>Logged In';
    login1.classList.add("logged-in");
    login1.onclick = null; // Remove login redirect function
  }

  // Update navbar login button
  if (login2) {
    login2.innerHTML = '<i class="fa-solid fa-user-check" style="margin-right: 5px;"></i>Logged In';
    login2.classList.add("logged-in");
    login2.onclick = null; // Remove login redirect function
  }
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
function redirectToLogin() {
  window.location.href = "login.html";
} function redirectToContact() {
  window.location.href = "contact.html";
}