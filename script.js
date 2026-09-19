/* ==========================================================
   PROJECT DATA
   Edit this array to add / remove / update your projects.
   status: "current" | "past"
   ========================================================== */
const PROJECTS = [
  {
    id: "sk-014",
    title: "Autonomous Line-Following Rover",
    status: "current",
    period: "2026 — Ongoing",
    role: "Lead Mechanical + Firmware",
    stack: ["SolidWorks", "STM32", "C++"],
    summary: "A 4-wheel rover with a custom differential drive chassis and closed-loop PID line tracking.",
    description:
      "Full redesign of a rover chassis to cut weight by 30% while keeping torque margins for a 2kg payload. Wrote the PID control loop for line-following on an STM32, tuned in the lab against a printed test track, and iterated the drivetrain through three prototype revisions.",
    link: "#"
  },
  {
    id: "sk-011",
    title: "Modular Drone Frame",
    status: "past",
    period: "2025",
    role: "Mechanical Design",
    stack: ["Fusion 360", "3D Printing", "Carbon Fiber"],
    summary: "A quick-swap quadcopter frame designed for field repair in under 5 minutes, no tools required.",
    description:
      "Designed a snap-fit arm system so a damaged arm could be replaced in the field without a screwdriver. Ran drop tests from 1.5m onto concrete and iterated the arm-to-body joint geometry across 6 print revisions to eliminate stress cracking at the mount points.",
    link: "#"
  },
  {
    id: "sk-009",
    title: "Bench Power Supply, 0–30V",
    status: "past",
    period: "2024",
    role: "Electrical + Enclosure",
    stack: ["KiCad", "Sheet Metal", "Analog Design"],
    summary: "A linear regulated bench supply built from scratch, including a folded-aluminum enclosure.",
    description:
      "Built a linear regulated 0-30V/3A supply around an LM317 current-boost topology, with a custom folded and powder-coated aluminum enclosure. Included overcurrent protection and a analog meter face for current draw.",
    link: "#"
  },
  {
    id: "sk-007",
    title: "Assistive Grip Trainer",
    status: "past",
    period: "2023",
    role: "Product + Mechanism Design",
    stack: ["SolidWorks", "Silicone Molding", "User Testing"],
    summary: "A rehab hand-grip device with adjustable resistance, developed with a physical therapy clinic.",
    description:
      "Worked directly with a physical therapy clinic to design an adjustable-resistance hand trainer for post-surgical rehab. Iterated the grip geometry through five rounds of patient feedback and cast the grip surfaces in medical-grade silicone.",
    link: "#"
  },
  {
    id: "sk-018",
    title: "Warehouse Pick-Path Optimizer",
    status: "current",
    period: "2026 — Ongoing",
    role: "Controls + Software",
    stack: ["Python", "ROS", "Path Planning"],
    summary: "Path-planning software layer for a small fleet of warehouse picking robots.",
    description:
      "Building a path-planning layer on top of ROS2 that reduces average pick-path length by re-sequencing multi-item orders. Currently benchmarking against a simulated warehouse floor before field deployment.",
    link: "#"
  },
  {
    id: "sk-003",
    title: "Solar Tracker Test Rig",
    status: "past",
    period: "2022",
    role: "Mechanical + Controls",
    stack: ["Arduino", "Servo Control", "CAD"],
    summary: "A dual-axis solar tracker prototype built to benchmark energy gain versus a fixed panel.",
    description:
      "Built a dual-axis tracking rig with light-dependent resistors feeding a simple hill-climbing control algorithm. Logged energy output over 3 weeks against a fixed-mount control panel and measured a 19% gain in daily yield.",
    link: "#"
  }
];

/* ==========================================================
   RENDER PROJECT CARDS
   ========================================================== */
const grid = document.getElementById("projectGrid");

function statusLabel(status) {
  return status === "current" ? "In progress" : "Completed";
}

function renderProjects(filter = "all") {
  grid.innerHTML = "";
  const filtered = PROJECTS.filter(p => filter === "all" || p.status === filter);

  filtered.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${project.title}`);

    card.innerHTML = `
      <div class="card-image">DWG NO. ${project.id.toUpperCase()}</div>
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

    card.addEventListener("click", () => openModal(project));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(project);
      }
    });

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
   MODAL
   ========================================================== */
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openModal(project) {
  modalContent.innerHTML = `
    <h3>${project.title}</h3>
    <div class="modal-meta">
      <div><span>Role</span><strong>${project.role}</strong></div>
      <div><span>Period</span><strong>${project.period}</strong></div>
      <div><span>Status</span><strong>${statusLabel(project.status)}</strong></div>
    </div>
    <p>${project.description}</p>
    <div class="card-tags">
      ${project.stack.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
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
document.getElementById("statProjects").textContent = PROJECTS.length;

/* ==========================================================
   INIT
   ========================================================== */
renderProjects("all");