import * as THREE from "../vendor/three.module.min.js";

const host = document.querySelector("#atlas-canvas-host");
const section = document.querySelector(".atlas-section");

if (host && section && window.WebGLRenderingContext) {
  const config = window.featuredProjectConfig || [];
  const projects = window.portfolioProjects || [];
  const items = config.map((item) => ({
    ...item,
    ...projects.find((project) => project.slug === item.slug)
  }));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const controls = document.querySelector("#atlas-controls");
  const currentLabel = document.querySelector("#atlas-current");
  const arcDot = document.querySelector("#atlas-arc-dot");
  const fallback = document.querySelector("#atlas-fallback");

  controls.innerHTML = items
    .map(
      (item, index) => `
        <button type="button" data-atlas-index="${index}" aria-label="Show ${item.label}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${item.label}</strong>
        </button>`
    )
    .join("");
  fallback.innerHTML = items
    .map((item) => `<img src="${item.image}" alt="" />`)
    .join("");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.05, 8.6);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  const textureLoader = new THREE.TextureLoader();
  const groups = [];
  const photoGeometry = new THREE.PlaneGeometry(2.6, 2.12);
  const footerGeometry = new THREE.PlaneGeometry(2.6, 0.62);
  const backGeometry = new THREE.PlaneGeometry(2.7, 2.84);
  const frameMaterial = new THREE.MeshBasicMaterial({ color: 0xf7f9fb });
  const footerMaterial = new THREE.MeshBasicMaterial({ color: 0xeef1f4 });

  items.forEach((item) => {
    const group = new THREE.Group();
    const frame = new THREE.Mesh(backGeometry, frameMaterial.clone());
    frame.position.z = -0.025;
    group.add(frame);

    const texture = textureLoader.load(item.image);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const photo = new THREE.Mesh(photoGeometry, new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff }));
    photo.position.set(0, 0.31, 0);
    group.add(photo);

    const footer = new THREE.Mesh(footerGeometry, footerMaterial.clone());
    footer.position.set(0, -1.06, 0);
    group.add(footer);
    group.userData.slug = item.slug;
    scene.add(group);
    groups.push(group);
  });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let targetIndex = 0;
  let displayIndex = 0;
  let activeIndex = -1;
  let raf = 0;

  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = index;
    currentLabel.textContent = String(index + 1).padStart(2, "0");
    controls.querySelectorAll("button").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
      button.setAttribute("aria-current", buttonIndex === index ? "true" : "false");
    });
    arcDot.style.setProperty("--atlas-dot", `${index / Math.max(1, items.length - 1)}`);
    section.dataset.activeProject = items[index].label.toLowerCase().replace(/\s+/g, "-");
  }

  function updateScrollTarget() {
    const rect = section.getBoundingClientRect();
    const maxScroll = Math.max(1, rect.height - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / maxScroll));
    targetIndex = progress * (items.length - 1);
    setActive(Math.round(targetIndex));
  }

  function positionCards() {
    const compact = window.innerWidth < 720;
    groups.forEach((group, index) => {
      const relative = index - displayIndex;
      const angle = relative * (compact ? 0.58 : 0.43);
      const x = Math.sin(angle) * (compact ? 5.1 : 6.7);
      const y = -0.5 - Math.pow(Math.min(Math.abs(relative), 3), 1.45) * (compact ? 0.2 : 0.14);
      const z = -Math.abs(relative) * (compact ? 1.35 : 0.9);
      group.position.set(x, y, z);
      group.rotation.y = -angle * 0.8;
      group.rotation.z = Math.sin(angle) * -0.035;
      const emphasis = Math.max(0, 1 - Math.abs(relative) * 0.2);
      group.scale.setScalar(0.86 + emphasis * 0.14);
      group.visible = Math.abs(relative) < 3.4;
    });
  }

  function render() {
    displayIndex = reduceMotion.matches ? targetIndex : THREE.MathUtils.lerp(displayIndex, targetIndex, 0.075);
    positionCards();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  }

  function resize() {
    const rect = host.getBoundingClientRect();
    renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
    camera.aspect = rect.width / Math.max(1, rect.height);
    camera.fov = window.innerWidth < 720 ? 43 : 34;
    camera.updateProjectionMatrix();
    updateScrollTarget();
  }

  function scrollToItem(index) {
    const maxScroll = section.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: section.offsetTop + (index / Math.max(1, items.length - 1)) * maxScroll,
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });
  }

  controls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-atlas-index]");
    if (button) scrollToItem(Number(button.dataset.atlasIndex));
  });

  renderer.domElement.addEventListener("click", (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(groups, true);
    if (!hits.length) return;
    const selected = groups.findIndex((group) => group === hits[0].object.parent);
    if (selected >= 0) scrollToItem(selected);
  });

  window.addEventListener("scroll", updateScrollTarget, { passive: true });
  window.addEventListener("resize", resize);
  setActive(0);
  resize();
  render();

  window.addEventListener("pagehide", () => cancelAnimationFrame(raf), { once: true });
} else if (section) {
  section.classList.add("no-webgl");
}
