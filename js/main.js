// Sticky navbar translucent on scroll
const navbar = document.querySelector("header.navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hamburger menu open/close
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav on link click
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Parallax background for hero (fixed bg, lower part of image, desktop/tablet only)
(function () {
  var hero = document.getElementById("hero");
  if (!hero) return;
  var bg = hero.querySelector(".parallax-bg");
  if (!bg) return;

  // Only apply on wider viewports
  function isDesktop() {
    return window.matchMedia("(min-width: 769px)").matches;
  }

  // Lightweight, performant scroll handling
  var ticking = false;
  function onScroll() {
    if (!isDesktop()) return;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var offset = window.pageYOffset;
        bg.style.transform = "translateY(" + offset * 0.25 + "px)";
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();

(function () {
  var section = document.getElementById("services");
  if (!section) return;
  var bg = section.querySelector(".parallax-bg-nri");
  if (!bg) return;

  function isDesktop() {
    return window.matchMedia("(min-width: 769px)").matches;
  }

  var ticking = false;
  function onScroll() {
    if (!isDesktop()) return;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var offset = window.pageYOffset;
        bg.style.transform = "translateY(" + offset * 0.25 + "px)";
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();
