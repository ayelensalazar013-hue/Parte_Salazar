import { initTheme } from "./theme.js";
import { initAuthModule } from "./auth.js";
import { initDashboardModule, updateRBACView } from "./dashboard.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initAuthModule();
  initDashboardModule();

  const screens = {
    welcome: document.getElementById("screen-welcome"),
    register: document.getElementById("screen-register"),
    login: document.getElementById("screen-login"),
    dashboard: document.getElementById("screen-dashboard")
  };

  const navLinks = {
    home: document.getElementById("nav-home"),
    login: document.getElementById("nav-login"),
    register: document.getElementById("nav-register")
  };

  function navigateTo(targetScreen) {
    Object.values(screens).forEach((s) => s?.classList.add("hidden"));
    Object.values(navLinks).forEach((l) => l?.classList.remove("active"));

    if (screens[targetScreen]) screens[targetScreen].classList.remove("hidden");
    if (navLinks[targetScreen]) navLinks[targetScreen].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Control de navegación
  navLinks.home?.addEventListener("click", () => navigateTo("welcome"));
  navLinks.login?.addEventListener("click", () => navigateTo("login"));
  navLinks.register?.addEventListener("click", () => navigateTo("register"));
  document
    .getElementById("nav-brand-logo")
    ?.addEventListener("click", () => navigateTo("welcome"));

  document
    .getElementById("btn-hero-login")
    ?.addEventListener("click", () => navigateTo("login"));
  document
    .getElementById("btn-hero-register")
    ?.addEventListener("click", () => navigateTo("register"));

  document.querySelectorAll(".back-to-welcome").forEach((btn) => {
    btn.addEventListener("click", () => navigateTo("welcome"));
  });

  // Login Simulado
  document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const assignedRole = "Secretaría"; // Rol simulado de acceso por defecto

    document.getElementById("dash-user-title").textContent = `Sesión: ${email}`;
    updateRBACView(assignedRole);
    navigateTo("dashboard");
  });

  document
    .getElementById("btn-logout")
    ?.addEventListener("click", () => navigateTo("welcome"));
});
