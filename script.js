/* ==========================================================
   PROJECT DATA
   Shared by index.html (script.js) and project.html (project.js).
   Edit this array to add / remove / update your projects.

   FIELD GUIDE
   -----------
   id           short unique slug, used in the URL: project.html?id=sk-014
   status       "current" | "past"
   image        (optional) hero photo path, e.g. "images/rover.jpg" —
                shown on the index card and at the top of the project page
   gallery      (optional) array of extra photos for THIS project only.
                Each entry is { image, caption }.
   process      (optional) array of write-up sections — { heading, text, image }
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
    gallery: [],
    process: [],
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
    gallery: [],
    process: [],
    link: "#"
  },
  {
    id: "sk-009",
    title: "Bench Power Supply, 0–30V",
    status: "past",
    period: "2024",
    role: "Electrical +