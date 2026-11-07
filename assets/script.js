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
  // Jump straight to a selected section and keep its title visible below the sticky header.
  const siteHeader = document.querySelector(".site-header");
  const sectionLinks = [...document.querySelectorAll('a[href^="#"]')];
  function activateLink(hash) {
    document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(link => {
      if (link.getAttribute("href") === hash) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  function jumpToSection(hash, updateUrl = true) {
    if (!/^#[A-Za-z][A-Za-z0-9_-]*$/.test(hash)) return false;
    const target = document.getElementById(hash.slice(1));
    if (!target) return false;
    closeMenu();
    // Recalculate after closing the mobile menu; fixed offset prevents covered headings.
    const headerHeight = siteHeader?.getBoundingClientRect().height || 0;
    const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
    const top = hash === "#top" ? 0 : Math.max(0, absoluteTop - headerHeight - 18);
    window.scrollTo({ top, behavior: "instant" });
    if (updateUrl && window.location.hash !== hash) {
      try { window.history.pushState(null, "", hash); } catch (_) { window.location.hash = hash; }
    }
    activateLink(hash);
    return true;
  }
  sectionLinks.forEach(link => {
    link.addEventListener("click", event => {
      const hash = link.getAttribute("href");
      if (!hash || !document.getElementById(hash.slice(1))) return;
      event.preventDefault();
      jumpToSection(hash);
    });
  });
  if (window.location.hash) {
    window.addEventListener("load", () => jumpToSection(window.location.hash, false), { once: true });
    activateLink(window.location.hash);
  }
  window.addEventListener("popstate", () => {
    if (window.location.hash) jumpToSection(window.location.hash, false);
    else jumpToSection("#top", false);
  });
  if (year) year.textContent = String(new Date().getFullYear());
})();
