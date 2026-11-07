(() => {
  "use strict";
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-nav");
  const year = document.getElementById("year");
  try { const saved = localStorage.getItem("tt-theme"); if(saved === "dark" || saved === "light") root.dataset.theme = saved; } catch (_) {}
  const updateTheme = () => themeButton?.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));
  updateTheme();
  themeButton?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("tt-theme", root.dataset.theme); } catch (_) {}
    updateTheme();
  });
  function closeMenu() {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", root.lang === "th" ? "เปิดเมนู" : "Open menu");
  }
  menuButton?.addEventListener("click", () => {
    if (!mobileMenu) return;
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    mobileMenu.hidden = isOpen;
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? (root.lang === "th" ? "เปิดเมนู" : "Open menu") : (root.lang === "th" ? "ปิดเมนู" : "Close menu"));
  });
  mobileMenu?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  if (year) year.textContent = String(new Date().getFullYear());
})();
