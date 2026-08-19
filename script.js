const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#mainNav a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});
