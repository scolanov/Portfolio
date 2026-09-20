/* ==========================================================
   INDEX PAGE SCRIPT
   Reads PROJECTS from projects-data.js (loaded before this file).
   ========================================================== */

const grid = document.getElementById("projectGrid");

function statusLabel(status) {
  return status === "current" ? "In progress" : "Completed";
}

function renderProjects(filter = "all") {
  grid.innerHTML = "";
  const filtered = PROJECTS.filter(p => filter === "all" || p.status === filter);

  filtered.forEach(project => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = `project.html?id=${encodeURIComponent(project.id)}`;
    card.setAttribute("aria-label", `View details for ${project.title}`);

    card.innerHTML = `
      <div class="card-image">
        ${project.image
          ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
          : ""}
        <span class="card-image-label">DWG NO. ${project.id.toUpperCase()}</span>
      </div>
      <div class="card-body">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="card-tags">
          ${project.stack.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="card-titleblock">
        <div class="tb-cell"><span>Status</span><span class="${project.status === 'current' ? 'status-current' : 'status-past'}">${statusLabel(project.status)}</span></div>
        <div class="tb-cell"><span>Period</span>${project.period}</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ==========================================================
   FILTERING
   ========================================================== */
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderProjects(btn.dataset.filter);
  });
});

/* ==========================================================
   MOBILE NAV TOGGLE
   ========================================================== */
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ==========================================================
   ABOUT STATS — auto-fill project count from data
   ========================================================== */
const statProjectsEl = document.getElementById("statProjects");
if (statProjectsEl) statProjectsEl.textContent = PROJECTS.length;

/* ==========================================================
   INIT
   ========================================================== */
renderProjects("all");