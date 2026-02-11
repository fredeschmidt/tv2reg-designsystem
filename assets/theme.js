const THEMES = ["tv2Oj", "tv2Nord", "tv2Syd", "tv2Fyn", "tv2East", "kosmopol"];
const STORAGE_KEY = "tv2-region-theme";

function applyTheme(theme) {
  const validTheme = THEMES.includes(theme) ? theme : THEMES[0];
  document.documentElement.setAttribute("data-theme", validTheme);
  localStorage.setItem(STORAGE_KEY, validTheme);
  return validTheme;
}

function initThemeSwitcher() {
  const select = document.getElementById("themeSelect");
  if (!select) return;

  select.innerHTML = THEMES.map((theme) => `<option value="${theme}">${theme}</option>`).join("");

  const saved = localStorage.getItem(STORAGE_KEY);
  const current = applyTheme(saved || document.documentElement.dataset.theme);
  select.value = current;

  select.addEventListener("change", (event) => {
    applyTheme(event.target.value);
  });
}
export { initThemeSwitcher };
