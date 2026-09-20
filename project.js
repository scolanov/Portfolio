/* ==========================================================
   PROJECT DETAIL PAGE
   Reads the project id from the URL (?id=sk-014) and renders
   that project's full details, including an optional photo
   gallery and design-process write-up sections.
   PROJECTS comes from projects-data.js, loaded before this file.
   ========================================================== */

function statusLabel(status) {
  return status === "current" ? "In progress" : "Completed";
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = PROJECTS.find(p => p.id === id);

const page = document.getElementById("projectPage");

if (!project) {
  page.innerHTML = `
    <div class="project-notfound">
      <p class="section-eyebrow">Sheet not found</p>
      <h1 class="section-title">We couldn't find that project</h1>
      <p>It may have been renamed or removed.</p>
      <a href="index.html#work" class="btn btn-primary">Back to all projects</a>
    </div>
  `;
} else {
  document.title = `${project.title} — Engineering Portfolio`;
  document.getElementById("pageTitle").textContent = `${project.title} — Engineering Portfolio`;

  const index = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS[index - 1];
  const nextProject = PROJECTS[index + 1];

  const gallery = project.gallery || [];
  const process = project.process || [];

  /* -------- Gallery: full-width photo + caption blocks, this project only -------- */
  const galleryHTML = gallery.length
    ? `
      <div class="project-gallery-block">
        <p class="section-eyebrow">Photos &amp; Notes</p>
        ${gallery.map(item => `
          <figure class="gallery-photo-block">
            <img src="${item.image}" alt="${item.caption || project.title}" loading="lazy" class="gallery-photo">
            ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    `
    : "";

  /* -------- Design process sections -------- */
  const processHTML = process.length
    ? `
      <div class="project-process-block">
        <p class="section-eyebrow">Design Process</p>
        ${process.map(section => `
          <div class="process-section">
            <h3>${section.heading}</h3>
            ${section.image ? `<img class="process-image" src="${section.image}" alt="${section.heading}" loading="lazy">` : ""}
            <p>${section.text}</p>
          </div>
        `).join("")}
      </div>
    `
    : "";

  page.innerHTML = `
    <a href="index.html#work" class="back-link">&larr; Back to all projects</a>

    <div class="project-hero">
      <div class="project-hero-image">
        ${project.image
          ? `<img src="${project.image}" alt="${project.title}">`
          : `<span class="svg-label">DWG NO. ${project.id.toUpperCase()}</span>`}
      </div>
      <div class="project-hero-info">
        <p class="section-eyebrow">DWG NO. ${project.id.toUpperCase()}</p>
        <h1 class="project-title">${project.title}</h1>
        <div class="project-meta-row">
          <div>
            <span>Status</span>
            <strong class="${project.status === 'current' ? 'status-current' : 'status-past'}">${statusLabel(project.status)}</strong>
          </div>
          <div>
            <span>Period</span>
            <strong>${project.period}</strong>
          </div>
          <div>
            <span>Role</span>
            <strong>${project.role}</strong>
          </div>
        </div>
        <div class="card-tags">
          ${project.stack.map(t => `<span class="tag tag-dark">${t}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="project-body">
      <p class="section-eyebrow">Overview</p>
      <p class="project-description">${project.description}</p>

      ${project.link && project.link !== "#"
        ? `<a href="${project.link}" class="btn btn-ghost" target="_blank" rel="noopener">View more &rarr;</a>`
        : ""}
    </div>

    ${galleryHTML}
    ${processHTML}

    <nav class="project-pager">
      ${prevProject
        ? `<a href="project.html?id=${prevProject.id}" class="pager-link pager-prev">
             <span>&larr; Previous</span>
             <strong>${prevProject.title}</strong>
           </a>`
        : `<span></span>`}
      ${nextProject
        ? `<a href="project.html?id=${nextProject.id}" class="pager-link pager-next">
             <span>Next &rarr;</span>
             <strong>${nextProject.title}</strong>
           </a>`
        : `<span></span>`}
    </nav>
  `;

  /* -------- Simple lightbox: click a gallery photo to view it larger -------- */
  document.querySelectorAll(".gallery-photo").forEach(img => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });
}

/* ==========================================================
   LIGHTBOX (click a gallery photo to enlarge it)
   ========================================================== */
function openLightbox(src, alt) {
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = `
    <div class="lightbox-overlay" data-lb-close></div>
    <img src="${src}" alt="${alt}">
    <button class="lightbox-close" data-lb-close aria-label="Close">&times;</button>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  overlay.querySelectorAll("[data-lb-close]").forEach(el =>
    el.addEventListener("click", () => {
      overlay.remove();
      document.body.style.overflow = "";
    })
  );
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const lb = document.querySelector(".lightbox");
    if (lb) {
      lb.remove();
      document.body.style.overflow = "";
    }
  }
});

/* ==========================================================
   MOBILE NAV TOGGLE (same behavior as index page)
   ========================================================== */
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});