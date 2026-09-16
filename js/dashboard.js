import { MODULES_DATA, RBAC_PERMISSIONS } from "./modulesData.js";

export function initDashboardModule() {
  const selector = document.getElementById("modules-selector");
  if (!selector) return;

  selector.addEventListener("click", (e) => {
    const btn = e.target.closest(".module-pill");
    if (!btn) return;

    document
      .querySelectorAll(".module-pill")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    renderModuleData(btn.dataset.module);
  });

  renderModuleData("jardin_pub");
}

export function updateRBACView(roleName) {
  const badge = document.getElementById("dash-role-badge");
  const desc = document.getElementById("rbac-description");

  if (badge) badge.textContent = `Rol: ${roleName || "Usuario"}`;
  if (desc)
    desc.textContent =
      RBAC_PERMISSIONS[roleName] ||
      "Acceso restringido según el perfil institucional asignado.";
}

function renderModuleData(key) {
  const container = document.getElementById("dashboard-table-content");
  if (!container) return;

  const data = MODULES_DATA[key] || {
    title: "Módulo Seleccionado",
    records: []
  };

  const rowsHTML = data.records
    .map(
      (rec) => `
        <tr>
            <td><strong>${rec.id}</strong></td>
            <td>${rec.student}</td>
            <td>${rec.doc}</td>
            <td><span style="color: var(--valid-color); font-weight: 700;">${rec.status}</span></td>
        </tr>
    `
    )
    .join("");

  container.innerHTML = `
        <h4 style="margin-bottom: 12px; font-weight: 700;">Registros — ${data.title}</h4>
        <table>
            <thead>
                <tr>
                    <th>Código Legajo</th>
                    <th>Titular Registrar</th>
                    <th>Documento</th>
                    <th>Estado Académico</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML || '<tr><td colspan="4">Sin datos.</td></tr>'}
            </tbody>
        </table>
    `;
}
