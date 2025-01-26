document.addEventListener("DOMContentLoaded", () => {
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
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const top = window.scrollY;

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

    // Sticky Navbar
    if (header) {
      header.classList.toggle("sticky", top > 100);
    }

    // Close menu on scroll
    if (menuIcon && navbar) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });

  // Scroll Reveal Animations
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
      ".home-img, .services-container, .project-box, .contact form",
      { origin: "bottom" }
    );
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content, .about-content", { origin: "right" });
  } else {
    console.warn("ScrollReveal is not defined. Ensure it is loaded correctly.");
  }

  // Typed.js Animations
  if (typeof Typed !== "undefined") {
    new Typed(".multiple-text", {
      strings: ["Full Stack Developer", "Java Developer", "Python Programmer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  } else {
    console.warn("Typed.js is not defined. Ensure it is loaded correctly.");
    const fallbackText = document.querySelector(".multiple-text");
    if (fallbackText) fallbackText.textContent = "Software Developer";
  }

  // Custom Cursor Effect
  const cursor = document.querySelector(".cursor");
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      requestAnimationFrame(() => {
        cursor.style.top = `${e.pageY}px`;
        cursor.style.left = `${e.pageX}px`;
        cursor.style.opacity = "1";
      });
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });

    // Hide cursor after inactivity
    let timeout;
    document.addEventListener("mousemove", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cursor.style.opacity = "0";
      }, 3000); // 3 seconds inactivity
    });
  }
});
