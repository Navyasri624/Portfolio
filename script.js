// script.js – Interactive behavior for Navya Sri portfolio

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
  typingEl.textContent = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
}
setInterval(typeTitle, 3000); // change every 3s

typeTitle(); // initial call

/* ---------- Mobile menu toggle ---------- */
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/* ---------- Navbar shrink on scroll ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("bg-glass/70", "shadow-md");
    navbar.classList.remove("py-4");
    navbar.classList.add("py-2");
  } else {
    navbar.classList.remove("bg-glass/70", "shadow-md");
    navbar.classList.remove("py-2");
    navbar.classList.add("py-4");
  }
});

/* ---------- Back to top button ---------- */
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- GSAP scroll-triggered fade‑in ---------- */nconst sections = document.querySelectorAll("section[data-scroll]");
sections.forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

/* ---------- Simple Three.js particle background ---------- */
if (typeof THREE !== "undefined") {
  const canvas = document.getElementById("hero-canvas");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // basic particle geometry
  const particles = new THREE.BufferGeometry();
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: 0x4f46e5, size: 0.03, transparent: true, opacity: 0.8 });
  const pointCloud = new THREE.Points(particles, material);
  scene.add(pointCloud);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    pointCloud.rotation.y += 0.0005;
    pointCloud.rotation.x += 0.0003;
    renderer.render(scene, camera);
  }
  animate();

  // Resize handling
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

/* ---------- Contact form – simple client validation ---------- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    // Basic validation – all fields are required (HTML already does this)
    // Show a temporary success message
    alert("Thank you! Your message has been received (demo only).");
    contactForm.reset();
  });
}
