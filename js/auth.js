// VALIDACIONES REGEX SINTÁCTICAS (SIN NOMBRES REALES EN CÓDIGO)
const REGEX_PATTERNS = {
  fullname: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,60}$/,
  doc: /^\d{7,11}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};

export function initAuthModule() {
  setupPasswordToggles();
  setupLiveValidation();
}

function setupPasswordToggles() {
  document.querySelectorAll(".toggle-password-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";

      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isPassword ? "fas fa-eye-slash" : "fas fa-eye";
      }
    });
  });
}

function setupLiveValidation() {
  const form = document.getElementById("register-form");
  if (!form) return;

  const fullnameInput = document.getElementById("reg-fullname");
  const docInput = document.getElementById("reg-doc");
  const emailInput = document.getElementById("reg-email");
  const roleSelect = document.getElementById("reg-role");
  const passwordInput = document.getElementById("reg-password");
  const consentCheck = document.getElementById("reg-consent");
  const submitBtn = document.getElementById("btn-submit-register");

  const rules = {
    length: { reg: /.{10,}/, el: document.getElementById("req-length") },
    upper: { reg: /[A-Z]/, el: document.getElementById("req-upper") },
    number: { reg: /\d/, el: document.getElementById("req-number") },
    special: { reg: /[@$!%*?&]/, el: document.getElementById("req-special") }
  };

  function validateFormState() {
    const isNameValid = REGEX_PATTERNS.fullname.test(
      fullnameInput.value.trim()
    );
    const isDocValid = REGEX_PATTERNS.doc.test(docInput.value.trim());
    const isEmailValid = REGEX_PATTERNS.email.test(emailInput.value.trim());
    const isRoleValid = roleSelect.value !== "";
    const isPassValid = Object.values(rules).every((r) =>
      r.reg.test(passwordInput.value)
    );
    const isConsentValid = consentCheck.checked;

    submitBtn.disabled = !(
      isNameValid &&
      isDocValid &&
      isEmailValid &&
      isRoleValid &&
      isPassValid &&
      isConsentValid
    );
  }

  // Eventos de entrada para validación en tiempo real
  [fullnameInput, docInput, emailInput].forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.id.replace("reg-", "");
      const isValid = REGEX_PATTERNS[key].test(input.value.trim());
      input.classList.toggle("valid-field", isValid && input.value.length > 0);
      input.classList.toggle(
        "invalid-field",
        !isValid && input.value.length > 0
      );
      validateFormState();
    });
  });

  roleSelect.addEventListener("change", validateFormState);
  consentCheck.addEventListener("change", validateFormState);

  passwordInput.addEventListener("input", () => {
    const val = passwordInput.value;
    Object.keys(rules).forEach((key) => {
      const rule = rules[key];
      const passed = rule.reg.test(val);
      rule.el.classList.toggle("passed", passed);
      const icon = rule.el.querySelector("i");
      if (icon)
        icon.className = passed ? "fas fa-circle-check" : "fas fa-circle-xmark";
    });
    validateFormState();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msgBox = document.getElementById("register-msg");
    msgBox.textContent =
      "Solicitud de alta procesada correctamente. Su acceso será validado por la administración.";
    msgBox.className = "alert-box success";
    msgBox.classList.remove("hidden");
  });
}
