const projects = [
  {
    slug: "resistojet-nozzle-thruster",
    title: "Resistojet Nozzle Thruster Upgrade",
    subtitle: "Warm-gas CubeSat propulsion concept using an R134a cold-gas baseline",
    source: "Academic propulsion",
    category: ["Propulsion", "Thermal", "Spacecraft"],
    tags: ["Resistojet", "CubeSat", "R134a", "Heat Transfer", "Python", "Arduino"],
    tools: ["Python", "LaTeX", "Arduino MEGA 2560", "Excel", "thermal resistance modeling"],
    visual: "propulsion",
    colors: ["#0d3447", "#432815"],
    image: "assets/images/projects/msat-mr-mrs-thruster.jpg",
    imageAlt: "M-SAT MR and MRS SAT cold-gas thruster hardware",
    imageCredit: "Photo: M-SAT public propulsion page",
    summary:
      "Led a propulsion research effort to upgrade an existing R134a cold-gas CubeSat-class system into a warm-gas resistojet concept. The work linked cold-gas baseline data, gas-side heat transfer, cylindrical conduction, heater wire sizing, and future vacuum-test planning.",
    role: "Propulsion Research Team Five Lead",
    date: "Spring 2025",
    metrics: "35.64 W heat estimate, 380-385 deg C inner wall estimate, 18.76 mN single-thruster baseline",
    highlights: [
      "Estimated power needed to raise R134a from about 25 deg C to 127 deg C.",
      "Reviewed vacuum-chamber cold-gas thrust data and diagnosed non-linear multi-thruster scaling.",
      "Connected target exhaust velocity to heat addition using energy balance logic.",
      "Recommended future thermocouple instrumentation, PEEK-class hardware revision, and higher-fidelity thermal simulation."
    ]
  },
  {
    slug: "cold-gas-r134a-analysis",
    title: "Cold-Gas R134a Thruster Test Analysis",
    subtitle: "Vacuum test interpretation for a multi-valve cold-gas propulsion setup",
    source: "Academic propulsion",
    category: ["Propulsion", "Testing", "Data"],
    tags: ["Cold Gas", "Vacuum Chamber", "R134a", "Test Data"],
    tools: ["Excel", "Python", "experimental data reduction", "test planning"],
    visual: "data",
    colors: ["#12324a", "#183c2a"],
    image: "assets/images/projects/mst-satellite-lab-pcb.png",
    imageAlt: "Missouri S&T Satellite Research Team members working on a printed circuit board",
    imageCredit: "Photo: Missouri S&T News, Joseph Nguyen",
    summary:
      "Interpreted thrust measurements from a multi-thruster R134a cold-gas system and identified likely flow-starvation, distributor-pressure, turbulence, and chamber-pressure limits that prevented linear thrust scaling.",
    role: "Propulsion analysis contributor",
    date: "Spring 2025",
    metrics: "1 thruster: about 18.76 mN; 6 thrusters: about 12.56 mN",
    highlights: [
      "Compared one-through-six thruster firing cases from scale readings.",
      "Separated measured thrust behavior from ideal linear scaling assumptions.",
      "Flagged distributor and pressure recovery limits as practical hardware constraints.",
      "Converted test observations into specific next-step redesign and measurement recommendations."
    ]
  },
  {
    slug: "vinnotek-master-baseline-viewer",
    title: "Cold Plate Master Baseline Viewer",
    subtitle: "Interactive copper-AM GPU cold-plate design baseline and candidate viewer",
    source: "Vinnotek master baseline",
    category: ["Thermal", "Additive Manufacturing", "Software", "Python"],
    tags: ["Cold Plate", "Copper AM", "R_jc", "R_th_conv", "React", "Three.js", "Validation"],
    tools: [
      "Python validated solvers",
      "React/TypeScript UI",
      "Three.js implicit geometry viewer",
      "candidate comparison",
      "CSV/JSON/Markdown reporting"
    ],
    visual: "thermal",
    colors: ["#183a3a", "#54331a"],
    image: "assets/images/projects/vinnotek-master-baseline-viewer.png",
    imageAlt: "Vinnotek Cold Plate Master Baseline Viewer interface showing candidate table, 3D viewer, and junction-to-coolant KPI",
    imageCredit: "Screenshot: local Vinnotek Master Baseline Viewer",
    summary:
      "Built and documented the Cold Plate Master Baseline workflow for copper-AM GPU cold-plate design: a reusable baseline framework plus an internal viewer that compares geometry families, surfaces build gates, and keeps browser KPIs tied to validated Python solvers instead of a second ad-hoc physics model.",
    role: "Thermal analysis, solver packaging, and internal tool development",
    date: "2026",
    metrics: "Viewer default captured 8 candidates; M1 primary view shows 14.52 mK/W R_jc and 0.122 W pump",
    highlights: [
      "Separated R_th_conv for geometry ranking from R_jc for build and claim decisions.",
      "Created a reusable master baseline path for wavy fins, straight fins, pin fins, TPMS/gyroid, lattice, and hybrid core studies.",
      "Exposed candidate comparison, KPI stack, 3D geometry tuning, optimizer, report export, and manufacturability status in one internal review tool.",
      "Kept coverage, pressure drop, pump power, supplier coupon, CFD/CHT, roughness, and open-channel-area gates visible before external claims."
    ]
  },
  {
    slug: "atlas-ai-presales",
    title: "ATLAS Local AI Pre-Sales Automation",
    subtitle: "One-click local ranking workflow for industrial AM sales leads",
    source: "Vinnotek automation",
    category: ["AI Automation", "Data", "Business Engineering"],
    tags: ["Ollama", "qwen3:14b", "n8n", "Excel", "Scraping", "Lead Scoring"],
    tools: ["PowerShell", "Node.js", "n8n", "Ollama", "Excel reporting", "JSON pipelines"],
    visual: "data",
    colors: ["#19304c", "#26341f"],
    summary:
      "Designed a local automation workflow that pulls company data, applies an editable scoring template, asks a local LLM to rank companies A/B/C/D, and generates a reviewed Excel lead workbook for industrial 3D-printing sales.",
    role: "Automation builder",
    date: "2026",
    metrics: "281 exhibitors pulled, 93 Vietnamese companies scored, 6 mold/die-maker leads surfaced in latest noted run",
    highlights: [
      "Kept the scoring engine local with qwen3:14b instead of cloud calls.",
      "Used an Excel template as the controllable scoring contract.",
      "Created a run flow that starts local AI, Docker/n8n, scraping, scoring, reporting, and workbook output.",
      "Built the workflow around human review before CRM handoff."
    ]
  },
  {
    slug: "adaptive-fdm-drone-frame",
    title: "Adaptive FDM Drone Frame Thesis Program",
    subtitle: "Parametric FDM and continuous-fiber drone-frame validation roadmap",
    source: "Vinnotek research brief",
    category: ["Additive Manufacturing", "Structures", "CAD"],
    tags: ["FDM", "Continuous Fiber", "Drone Frame", "DfAM", "Testing"],
    tools: ["CAD planning", "test matrix design", "DfAM rules", "mechanical validation"],
    visual: "propulsion",
    colors: ["#172d43", "#28351b"],
    image: "assets/images/projects/msat-structure-closeup-2.jpg",
    imageAlt: "Machined aluminum satellite structure closeup",
    imageCredit: "Photo: M-SAT public structures page",
    summary:
      "Created a thesis-style engineering roadmap for lightweight modular drone frames manufactured by FDM and continuous-fiber FDM. The brief defines design variables, testing gates, success criteria, and intern subtopics.",
    role: "Technical brief author",
    date: "2026",
    metrics: "5-7 inch quadcopter class, modular arm replacement target under 10 minutes",
    highlights: [
      "Framed the work as a repeatable design method rather than a simple printed prototype.",
      "Defined stiffness, mass, vibration, repairability, anisotropy, and fiber-path constraints.",
      "Split the work into parametric CAD, materials/process, simulation, and validation tracks.",
      "Positioned continuous fiber as a load-path tool that must be validated against geometry and test data."
    ]
  },
  {
    slug: "shock-tube-fanno-flow",
    title: "Shock Tube Fanno Flow Analysis",
    subtitle: "Friction coefficient estimation from pressure transducer data",
    source: "GitHub / coursework",
    category: ["Data", "Compressible Flow", "Python"],
    tags: ["Shock Tube", "Fanno Flow", "Pressure Transducers", "Python"],
    tools: ["Python", "pressure conversion", "signal filtering", "normal shock relations", "Fanno flow equations"],
    visual: "data",
    colors: ["#102f49", "#51301f"],
    summary:
      "Processed shock-tube pressure transducer voltage data, converted voltage to pressure, estimated Mach numbers, and applied normal-shock and Fanno-flow relations to evaluate duct friction behavior.",
    role: "Data analysis",
    date: "Academic lab",
    metrics: "13 in sensor spacing, Kistler 211B3 transducers, gamma = 1.4",
    highlights: [
      "Converted voltage data to pressure with calibrated sensitivity values.",
      "Estimated pressure ratios and Mach states from transient signals.",
      "Used Fanno flow relations to estimate friction coefficient.",
      "Documented uncertainty from timing, reflected shocks, and inconsistent pressure states."
    ]
  },
  {
    slug: "sr30-gas-turbine",
    title: "SR-30 Gas Turbine Performance Analysis",
    subtitle: "Turbojet lab data reduction at 50,000 and 70,000 RPM",
    source: "GitHub / coursework",
    category: ["Propulsion", "Thermal", "Data"],
    tags: ["Gas Turbine", "SR-30", "Thermodynamics", "Python", "Excel"],
    tools: ["Python", "Excel", "ideal gas relations", "efficiency calculations", "plotting"],
    visual: "thermal",
    colors: ["#17394a", "#5a2e18"],
    summary:
      "Analyzed SR-30 gas turbine lab data to estimate thrust trends, compressor and turbine work, thermal efficiency, fuel-flow behavior, and station-based performance metrics.",
    role: "Thermodynamic analysis",
    date: "Academic lab",
    metrics: "Reported average thrust around 50.71 N with caveats on sign and unit consistency",
    highlights: [
      "Mapped P/T station data from inlet through exhaust.",
      "Computed compressor work, turbine work, thrust, and thermal efficiency trends.",
      "Generated performance plots across RPM cases.",
      "Flagged data-quality issues where computed values were physically suspect."
    ]
  },
  {
    slug: "wind-tunnel-wing",
    title: "Wind Tunnel Wing Aerodynamics Analysis",
    subtitle: "Lift, drag, moment, and drag-polar extraction from wind-tunnel data",
    source: "GitHub / coursework",
    category: ["Aerodynamics", "Data", "Testing"],
    tags: ["Wind Tunnel", "CL", "CD", "CM", "Python", "Reynolds Number"],
    tools: ["Python", "Excel", "coefficient extraction", "aerodynamic plotting"],
    visual: "data",
    colors: ["#14334b", "#322d18"],
    summary:
      "Processed wind-tunnel force and moment data to compute aerodynamic coefficients and produce plots of lift, drag, pitching moment, and drag polar behavior across angle-of-attack sweeps.",
    role: "Aerodynamic data reduction",
    date: "Academic lab",
    metrics: "16 in chord, 16 in span, about Re 200k and Re 500k test cases",
    highlights: [
      "Computed CL, CD, and CM from raw experimental readings.",
      "Compared coefficient behavior across angle-of-attack sweeps.",
      "Generated drag polar and trend plots.",
      "Maintained geometry and density assumptions explicitly in the workflow."
    ]
  },
  {
    slug: "modal-wing-analysis",
    title: "Modal Wing Vibration Analysis",
    subtitle: "Frequency, damping, amplitude, and quality-factor mapping",
    source: "GitHub / coursework",
    category: ["Structures", "Data", "Python"],
    tags: ["Modal Analysis", "Vibration", "Damping", "Python", "Contour Maps"],
    tools: ["Python", "grid data processing", "damping estimates", "contour visualization"],
    visual: "data",
    colors: ["#22324a", "#163529"],
    summary:
      "Analyzed wing modal response data across measurement nodes to identify natural frequency behavior, amplitude distribution, damping, and quality-factor trends.",
    role: "Structural data analysis",
    date: "Academic lab",
    metrics: "Natural frequency range noted around 16.67-16.93 Hz",
    highlights: [
      "Processed node-based modal response data.",
      "Generated spatial contour maps across the wing.",
      "Compared amplitude and quality-factor behavior.",
      "Connected vibration response to structural interpretation."
    ]
  },
  {
    slug: "turbofan-cycle-modeling",
    title: "Turbofan Cycle Performance Modeling",
    subtitle: "Specific thrust and TSFC sweeps over pressure ratio and bypass ratio",
    source: "Profile / code",
    category: ["Propulsion", "Python", "MATLAB"],
    tags: ["Turbofan", "TSFC", "Cycle Analysis", "MATLAB", "Python"],
    tools: ["MATLAB", "Python", "cycle equations", "parameter sweeps", "plotting"],
    visual: "propulsion",
    colors: ["#102e45", "#3f361b"],
    image: "assets/images/projects/mst-satellite-team-photo.png",
    imageAlt: "Missouri S&T Satellite Research Team group photo outside Toomey Hall",
    imageCredit: "Photo: Missouri S&T News, Joseph Nguyen",
    summary:
      "Modeled turbofan performance across compressor pressure ratio and bypass-ratio sweeps to study specific thrust, TSFC, fuel flow, and operating tradeoffs.",
    role: "Cycle modeling",
    date: "Academic project",
    metrics: "M0 = 2.5 case, compressor pressure ratio sweep from 1 to 15",
    highlights: [
      "Built parameter sweeps for propulsion cycle trade studies.",
      "Compared TSFC and specific thrust trends.",
      "Connected design variables to performance behavior.",
      "Created plots suitable for technical explanation."
    ]
  },
  {
    slug: "engineering-code-collection",
    title: "Engineering and Software Code Collection",
    subtitle: "Public repository spanning embedded systems, FEA, data analysis, and propulsion computation",
    source: "GitHub",
    category: ["Software", "Python", "C++"],
    tags: ["C++", "Python", "MATLAB", "FEA", "Embedded", "GitHub"],
    tools: ["C++", "C", "Python", "MATLAB", "Git", "VS Code"],
    visual: "data",
    colors: ["#173449", "#1f3524"],
    summary:
      "Curated public repository containing engineering code projects such as FEA beam analysis, shock tube processing, turbojet performance, uncertainty/RSM analysis, vehicle efficiency modeling, and an embedded-style endoscopy camera system.",
    role: "Repository owner",
    date: "Updated Nov 18, 2025 on public GitHub page",
    metrics: "C++ 42.1%, MATLAB 29.2%, Python 24.4%, C 4.3%",
    highlights: [
      "Shows C++ OOP and HAL-style architecture through the endoscopy camera system.",
      "Includes FEA, uncertainty modeling, and vehicle efficiency computations.",
      "Collects aerospace experimental data processing work into a public proof point.",
      "Provides links recruiters can inspect directly."
    ]
  }
];

const repoItems = [
  {
    title: "Endoscopy Camera System",
    text: "C++ OOP, independent camera classes, threaded capture loop, and HAL-style device abstraction."
  },
  {
    title: "FEA Beam Problem",
    text: "1D axial deformation solver with stiffness assembly, boundary conditions, displacement, and reactions."
  },
  {
    title: "Shock Tube Analysis",
    text: "Pressure transducer conversion, shock strength and Mach estimation, filtering, and visualization."
  },
  {
    title: "Turbojet Engine Performance",
    text: "SR-30 thermodynamic analysis using station data, ideal gas relations, thrust, and efficiency estimates."
  },
  {
    title: "Uncertainty RSM Analysis",
    text: "Monte Carlo and response surface methods for probabilistic engineering design and sensitivity."
  },
  {
    title: "Vehicle Efficiency Model",
    text: "Power demand model using aerodynamic drag, rolling resistance, and drivetrain efficiency."
  }
];

const skillGroups = [
  {
    title: "Aerospace analysis",
    skills: [
      "Propulsion systems",
      "Compressible flow",
      "Gas turbine analysis",
      "Turbofan cycle modeling",
      "Aerodynamics",
      "Thermal analysis",
      "Heat transfer",
      "Experimental data reduction"
    ]
  },
  {
    title: "Programming",
    skills: ["Python", "MATLAB", "Octave", "C++", "C", "Arduino", "PowerShell", "Node.js", "TypeScript", "React", "Three.js"]
  },
  {
    title: "CAD and documentation",
    skills: ["AutoCAD", "SolidWorks", "Fusion 360", "FreeCAD", "CQ-Editor", "LaTeX", "Overleaf", "AIAA formatting", "Technical reports"]
  },
  {
    title: "Hardware and testing",
    skills: [
      "Arduino MEGA 2560",
      "Solenoid valve control",
      "Pressure transducers",
      "Vacuum test planning",
      "Wire harnessing",
      "Cleanroom assembly",
      "Wind-tunnel data",
      "Gas turbine lab data"
    ]
  },
  {
    title: "Additive manufacturing",
    skills: ["Copper AM", "LPBF screening", "FDM/FFF", "Continuous-fiber FDM", "DfAM", "Material/process comparison"]
  },
  {
    title: "AI and automation",
    skills: ["AI-assisted coding", "Local LLM workflows", "n8n pipelines", "Excel scoring contracts", "Data scraping strategy"]
  },
  {
    title: "Data methods",
    skills: ["NumPy", "Matplotlib", "Monte Carlo", "RSM", "Root solving", "Sensitivity analysis", "Data cleaning"]
  },
  {
    title: "Engineering judgment",
    skills: ["Assumption tracking", "Validation gates", "Public/private project framing", "Testable recommendations"]
  }
];

const iconPaths = {
  grid: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/>',
  mail: '<path d="M4 4h16v16H4z"/><path d="m4 7 8 6 8-6"/>',
  github:
    '<path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.6 4.7 4.7 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.7 0C5.7.4 4.6.7 4.6.7a4.7 4.7 0 0 0-.1 3.6A5.1 5.1 0 0 0 3.1 8c0 5.1 3.1 6.6 6.1 6.6a3.4 3.4 0 0 0-1 2.6V22"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v6H4V3h6"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  close: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>'
};

function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.getAttribute("data-icon");
    const path = iconPaths[name];
    if (!path) return;
    node.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  });
}

let activeCategory = "All";
let searchTerm = "";
let revealObserver = null;

const projectGrid = document.querySelector("#project-grid");
const filterRow = document.querySelector("#filter-row");
const searchInput = document.querySelector("#project-search");
const dialog = document.querySelector("#project-dialog");

function uniqueCategories() {
  return ["All", ...Array.from(new Set(projects.flatMap((project) => project.category))).sort()];
}

function renderFilters() {
  filterRow.innerHTML = uniqueCategories()
    .map(
      (category) =>
        `<button type="button" class="filter-chip ${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`
    )
    .join("");
}

function projectMatches(project) {
  const haystack = [
    project.title,
    project.subtitle,
    project.source,
    project.summary,
    ...project.category,
    ...project.tags,
    ...project.tools
  ]
    .join(" ")
    .toLowerCase();
  const categoryMatch = activeCategory === "All" || project.category.includes(activeCategory);
  const searchMatch = !searchTerm || haystack.includes(searchTerm.toLowerCase());
  return categoryMatch && searchMatch;
}

function renderProjects() {
  const visible = projects.filter(projectMatches);
  if (!visible.length) {
    projectGrid.innerHTML = '<div class="empty-state">No projects match this filter.</div>';
    prepareContentAnimations(projectGrid);
    return;
  }

  projectGrid.innerHTML = visible
    .map((project) => {
      const tagMarkup = project.tags
        .slice(0, 5)
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");
      const mediaMarkup = project.image
        ? `<div class="project-visual has-image" data-type="${project.visual}">
             <img src="${project.image}" alt="${project.imageAlt || project.title}" loading="lazy" />
             <span>${project.imageCredit || "Project image"}</span>
           </div>`
        : `<div class="project-visual" data-type="${project.visual}"></div>`;
      return `
        <article class="project-card" style="--visual-a:${project.colors[0]}; --visual-b:${project.colors[1]}">
          ${mediaMarkup}
          <div class="project-body">
            <header>
              <span class="source-pill">${project.source}</span>
              <h3>${project.title}</h3>
              <p>${project.subtitle}</p>
            </header>
            <div class="tag-row">${tagMarkup}</div>
            <button class="button secondary" type="button" data-project="${project.slug}">
              <span data-icon="search"></span>
              Inspect project
            </button>
          </div>
        </article>
      `;
    })
    .join("");
  renderIcons(projectGrid);
  prepareContentAnimations(projectGrid);
}

function renderRepoIndex() {
  document.querySelector("#repo-index").innerHTML = repoItems
    .map(
      (item) => `
        <article>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  document.querySelector("#skills-grid").innerHTML = skillGroups
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${group.title}</h3>
          <ul class="skill-list">
            ${group.skills.map((skill) => `<li>${skill}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function prepareContentAnimations(root = document) {
  const selectors = [
    ".section-heading",
    ".about-photo",
    ".about-copy",
    ".principles-panel",
    ".metric-band div",
    ".project-toolbar",
    ".project-card",
    ".empty-state",
    ".repo-card",
    ".repo-index article",
    ".skills-grid article",
    ".timeline article",
    ".resume-summary",
    ".contact-panel"
  ];
  root.querySelectorAll(selectors.join(",")).forEach((node, index) => {
    if (node.classList.contains("content-reveal")) return;
    node.classList.add("content-reveal");
    node.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 55, 330)}ms`);
    if (revealObserver) revealObserver.observe(node);
  });
}

function initContentAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  prepareContentAnimations();
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".content-reveal").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
  );
  document.querySelectorAll(".content-reveal:not(.is-visible)").forEach((node) => revealObserver.observe(node));
}

function openProject(slug) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return;
  const dialogMedia = document.querySelector("#dialog-media");
  dialogMedia.style.setProperty("--visual-a", project.colors[0]);
  dialogMedia.style.setProperty("--visual-b", project.colors[1]);
  dialogMedia.innerHTML = project.image
    ? `<img class="dialog-image" src="${project.image}" alt="${project.imageAlt || project.title}" />
       <span class="image-credit">${project.imageCredit || "Project image"}</span>`
    : "";
  document.querySelector("#dialog-kicker").textContent = project.source;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-summary").textContent = project.summary;
  document.querySelector("#dialog-details").innerHTML = [
    ["Role", project.role],
    ["Date", project.date],
    ["Categories", project.category.join(", ")],
    ["Metrics", project.metrics]
  ]
    .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
  document.querySelector("#dialog-highlights").innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#dialog-tools").innerHTML = project.tools.map((tool) => `<span>${tool}</span>`).join("");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  history.replaceState(null, "", `#project=${project.slug}`);
}

function closeProject() {
  if (dialog.open) dialog.close();
  if (location.hash.startsWith("#project=")) {
    history.replaceState(null, "", "#projects");
  }
}

function initNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
}

function initProjectInteractions() {
  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderProjects();
  });

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProjects();
  });

  projectGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project]");
    if (!button) return;
    openProject(button.dataset.project);
  });

  document.querySelector(".close-dialog").addEventListener("click", closeProject);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });
  dialog.addEventListener("cancel", () => {
    history.replaceState(null, "", "#projects");
  });
}

function initZoomStory() {
  const story = document.querySelector(".zoom-story");
  const stage = document.querySelector(".zoom-stage");
  if (!story || !stage) return;
  const scenes = [...document.querySelectorAll("[data-story-scene]")];
  const layers = [...document.querySelectorAll("[data-story-layer]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let ticking = false;

  function clamp(value, min = 0, max = 1) {
    return Math.min(max, Math.max(min, value));
  }

  function update() {
    ticking = false;
    const rect = story.getBoundingClientRect();
    const maxScroll = Math.max(1, rect.height - window.innerHeight);
    const rawProgress = clamp(-rect.top / maxScroll);
    const progress = reduceMotion.matches ? 1 : rawProgress;
    const sceneFloat = progress * (scenes.length - 1);
    const activeScene = Math.min(scenes.length - 1, Math.round(sceneFloat));
    const localProgress = sceneFloat - Math.floor(sceneFloat);

    stage.style.setProperty("--story-progress", progress.toFixed(4));
    stage.style.setProperty("--scene-progress", localProgress.toFixed(4));
    stage.style.setProperty("--scene-index", activeScene);

    scenes.forEach((scene, index) => {
      const isActive = index === activeScene;
      scene.classList.toggle("is-active", isActive);
      scene.setAttribute("aria-hidden", String(!isActive));
    });

    layers.forEach((layer, index) => {
      const distance = Math.abs(index - sceneFloat);
      const intensity = clamp(1 - distance);
      const easedIntensity = intensity * intensity * (3 - 2 * intensity);
      const scale = 0.92 + easedIntensity * 0.08 + progress * 0.06;
      const y = (index - sceneFloat) * 3;
      layer.style.opacity = String(0.05 + easedIntensity * 0.68);
      layer.style.transform = `translate3d(0, ${y}vh, 0) scale(${scale.toFixed(3)})`;
      layer.style.filter = `blur(${((1 - easedIntensity) * 4.5).toFixed(2)}px) saturate(${(0.86 + easedIntensity * 0.18).toFixed(2)}) contrast(1.04)`;
      layer.classList.toggle("is-active", easedIntensity > 0.42);
    });
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  reduceMotion.addEventListener?.("change", requestUpdate);
}

function initHashProject() {
  const slug = location.hash.startsWith("#project=") ? location.hash.replace("#project=", "") : "";
  if (slug) {
    requestAnimationFrame(() => openProject(slug));
  }
}

function initMissionCanvas() {
  const canvas = document.querySelector("#mission-canvas");
  const ctx = canvas.getContext("2d");
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  let particles = [];
  let raf = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = Math.max(640, Math.floor(rect.width * scale));
    canvas.height = Math.max(420, Math.floor(rect.height * scale));
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    const count = Math.max(22, Math.floor(rect.width / 15));
    particles = Array.from({ length: count }, (_, index) => ({
      x: -40 - index * 18,
      y: 0.42 + Math.sin(index) * 0.08,
      speed: 0.45 + (index % 5) * 0.08,
      size: 1.5 + (index % 4) * 0.35
    }));
  }

  function drawGrid(width, height) {
    ctx.strokeStyle = "rgba(172, 219, 230, 0.12)";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 28) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 28) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  function drawSchematic(width, height, time) {
    const cx = width * 0.54;
    const cy = height * 0.43;
    const tubeLength = width * 0.56;
    const tubeHeight = height * 0.13;
    const inletX = cx - tubeLength * 0.52;
    const outletX = cx + tubeLength * 0.28;

    ctx.fillStyle = "#071118";
    ctx.fillRect(0, 0, width, height);
    drawGrid(width, height);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-0.06);
    ctx.fillStyle = "rgba(92, 200, 255, 0.08)";
    ctx.strokeStyle = "rgba(92, 200, 255, 0.62)";
    ctx.lineWidth = 2;
    roundedRect(ctx, -tubeLength / 2, -tubeHeight / 2, tubeLength * 0.72, tubeHeight, 16);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(tubeLength * 0.2, -tubeHeight / 2);
    ctx.lineTo(tubeLength * 0.48, -tubeHeight * 1.15);
    ctx.lineTo(tubeLength * 0.48, tubeHeight * 1.15);
    ctx.lineTo(tubeLength * 0.2, tubeHeight / 2);
    ctx.closePath();
    ctx.fillStyle = "rgba(246, 177, 75, 0.1)";
    ctx.strokeStyle = "rgba(246, 177, 75, 0.72)";
    ctx.fill();
    ctx.stroke();

    for (let i = 0; i < 9; i += 1) {
      const x = -tubeLength * 0.4 + i * tubeLength * 0.07;
      ctx.beginPath();
      ctx.arc(x, 0, 8 + Math.sin(time * 0.004 + i) * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = i % 2 ? "rgba(246, 177, 75, 0.8)" : "rgba(103, 210, 143, 0.8)";
      ctx.stroke();
    }
    ctx.restore();

    ctx.strokeStyle = "rgba(255,255,255,0.28)";
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(width * 0.18, height * 0.7);
    ctx.bezierCurveTo(width * 0.33, height * 0.57, width * 0.55, height * 0.82, width * 0.78, height * 0.61);
    ctx.stroke();
    ctx.setLineDash([]);

    particles.forEach((particle) => {
      particle.x += particle.speed;
      const pathLength = outletX - inletX + 160;
      if (particle.x > pathLength) particle.x = -60;
      const px = inletX + particle.x;
      const py = cy + Math.sin((particle.x + time * 0.06) * 0.04) * 20 + particle.y * 20;
      ctx.beginPath();
      ctx.arc(px, py, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.x > pathLength * 0.68 ? "rgba(246, 177, 75, 0.9)" : "rgba(92, 200, 255, 0.88)";
      ctx.fill();
    });

    drawLabel(ctx, "R134a baseline", width * 0.11, height * 0.24, "#5cc8ff");
    drawLabel(ctx, "heater model", width * 0.39, height * 0.18, "#f6b14b");
    drawLabel(ctx, "test plan", width * 0.68, height * 0.78, "#67d28f");
    drawMiniChart(ctx, width * 0.12, height * 0.77, width * 0.28, height * 0.12, time);
  }

  function loop(time = 0) {
    const rect = canvas.getBoundingClientRect();
    drawSchematic(rect.width, rect.height, time);
    if (!media.matches) raf = requestAnimationFrame(loop);
  }

  resize();
  loop();
  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    resize();
    loop();
  });
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawLabel(ctx, text, x, y, color) {
  ctx.fillStyle = "rgba(7, 17, 24, 0.76)";
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  roundedRect(ctx, x, y, 138, 34, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.font = "700 12px Inter, system-ui, sans-serif";
  ctx.fillText(text, x + 12, y + 22);
}

function drawMiniChart(ctx, x, y, width, height, time) {
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.strokeRect(x, y, width, height);
  ctx.beginPath();
  for (let i = 0; i < 10; i += 1) {
    const px = x + (i / 9) * width;
    const py = y + height * 0.75 - Math.sin(i * 0.9 + time * 0.002) * height * 0.25 - i * 2;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = "rgba(103, 210, 143, 0.9)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.lineWidth = 1;
}

renderIcons();
renderFilters();
renderProjects();
renderRepoIndex();
renderSkills();
initContentAnimations();
initNavigation();
initProjectInteractions();
initZoomStory();
initMissionCanvas();
initHashProject();
