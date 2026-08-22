// script.js – Interactive behavior for Navya Sri portfolio

// Initialize Feather Icons
if (typeof feather !== 'undefined') {
  feather.replace();
}

/* ---------- Theme Toggling (Light / Dark) ---------- */
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlEl = document.documentElement;

// Check local storage for theme preference, default to dark
let currentTheme = localStorage.getItem("theme") || "dark";
setTheme(currentTheme);

function setTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  
  if (theme === "light") {
    if(themeIcon && typeof feather !== 'undefined') {
      themeIcon.setAttribute("data-feather", "moon");
      feather.replace();
    }
  } else {
    if(themeIcon && typeof feather !== 'undefined') {
      themeIcon.setAttribute("data-feather", "sun");
      feather.replace();
    }
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
  });
}

/* ---------- Typing animation (titles) ---------- */
const titles = [
  "Generative AI Engineer",
  "Python Developer",
  "AI Enthusiast",
  "LLM & RAG Developer"
];
let titleIndex = 0;
const typingEl = document.getElementById("typing");
function typeTitle() {
  if (typingEl) {
    typingEl.textContent = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
  }
}
setInterval(typeTitle, 3000);
typeTitle();

/* ---------- Mobile menu toggle ---------- */
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

/* ---------- Navbar shrink on scroll ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

/* ---------- Back to top button ---------- */
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (backToTopBtn) {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }
});
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- GSAP scroll-triggered fade-in ---------- */
if (typeof gsap !== 'undefined') {
  const scrollElements = document.querySelectorAll("[data-scroll]");
  scrollElements.forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

/* ---------- Contact form ---------- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been received (demo only).");
    contactForm.reset();
  });
}

/* ---------- Interactive Resume Modal Logic ---------- */
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (typeof feather !== 'undefined') feather.replace();
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("resume-modal");
  if (e.target === modal) {
    closeResumeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeResumeModal();
  }
});
