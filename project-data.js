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
    role: "Electrical + Enclosure",
    stack: ["KiCad", "Sheet Metal", "Analog Design"],
    summary: "A linear regulated bench supply built from scratch, including a folded-aluminum enclosure.",
    description:
      "Built a linear regulated 0-30V/3A supply around an LM317 current-boost topology, with a custom folded and powder-coated aluminum enclosure. Included overcurrent protection and a analog meter face for current draw.",
    gallery: [],
    process: [],
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
    gallery: [],
    process: [],
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
    gallery: [],
    process: [],
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
    gallery: [],
    process: [],
    link: "#"
  }
];