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
    window.location.href = "index.html";
}function redirectToContact() {
  window.location.href = "contact.html";
}