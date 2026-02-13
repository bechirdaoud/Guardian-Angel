// Active nav highlighting
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();

// Ownership calculator
(function () {
  const el = (id) => document.getElementById(id);
  const fmt = (n) => {
    if (!isFinite(n)) return "—";
    return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Math.round(n));
  };

  const calc = () => {
    const owners = Number(el("owners")?.value || 5);
    const acquisition = Number(el("acq")?.value || 1955000);
    const immediate = Number(el("immediate")?.value || 550000);
    const contingency = Number(el("cont")?.value || 0);
    const annual = Number(el("annual")?.value || 420000);

    const initialTotal = acquisition + immediate + contingency;
    const perOwnerInitial = initialTotal / owners;
    const perOwnerAnnual = annual / owners;

    const out = el("out");
    if (!out) return;
    out.innerHTML = `
      <div class="kpis">
        <div class="kpi"><b>€ ${fmt(initialTotal)}</b><span>Total initial budget</span></div>
        <div class="kpi"><b>€ ${fmt(perOwnerInitial)}</b><span>Per owner (initial)</span></div>
        <div class="kpi"><b>€ ${fmt(perOwnerAnnual)}</b><span>Per owner / year (fixed)</span></div>
      </div>
      <div class="note">
        Fixed costs are assumed shared equally. Food/drinks/guest provisioning while an owner is onboard can be handled separately per trip.
      </div>
    `;
  };

  ["owners","acq","immediate","cont","annual"].forEach(id => {
    const i = document.getElementById(id);
    if (i) i.addEventListener("input", calc);
  });
  calc();
})();
