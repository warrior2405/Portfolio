// Navbar Toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });
}

// Scroll Sections Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  const top = window.scrollY;

  // Highlight active navigation link
  sections.forEach((section) => {
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Sticky Header
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", top > 100);
  }

  // Close Navbar on Scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// ScrollToTop Button Functionality
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top smoothly when the button is clicked
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Typed.js Animations
if (typeof Typed !== "undefined") {
  const typedStrings = [
    "Full Stack Developer",
    "Java Developer",
    "Python Programmer",
  ];
  new Typed(".multiple-text", {
    strings: typedStrings,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
} else {
  console.warn("Typed.js is not defined. Ensure it is loaded correctly.");
}

const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.opacity = "1";
});
