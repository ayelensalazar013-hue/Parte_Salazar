export function initTheme() {
  const themeBtn = document.getElementById("theme-toggle");
  if (!themeBtn) return;

  const icon = themeBtn.querySelector("i");
  const savedTheme = localStorage.getItem("educore_theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (icon) icon.className = "fas fa-sun";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("educore_theme", isDark ? "dark" : "light");
    if (icon) icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  });
}
