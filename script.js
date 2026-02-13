// Guardian Angel site JS: nav toggle + small helpers
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Finance calculator (optional)
  const form = document.getElementById("calc");
  if (form) {
    const fmt = (n) => {
      if (!Number.isFinite(n)) return "—";
      return new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const budget = Number(document.getElementById("budget")?.value || 0);
      const owners = Math.max(1, Number(document.getElementById("owners")?.value || 5));
      const reserve = Number(document.getElementById("reserve")?.value || 0);

      const per = budget / owners;
      const per2 = (budget + reserve) / owners;

      const out1 = document.getElementById("out-per");
      const out2 = document.getElementById("out-per2");
      if (out1) out1.textContent = fmt(per);
      if (out2) out2.textContent = fmt(per2);
    });
  }
})();
