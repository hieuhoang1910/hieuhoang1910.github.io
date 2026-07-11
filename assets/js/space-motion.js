import * as THREE from "../vendor/three.module.min.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const featuredSection = document.querySelector(".featured-scroll");
const featuredStage = document.querySelector(".featured-stage");
const contactSection = document.querySelector(".contact-section");
const contactStage = document.querySelector(".contact-stage");

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(value) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

function createStarTunnel(host, { count, baseSpeed, trailLength, opacity }) {
  if (!host || !window.WebGLRenderingContext) return null;

  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(64, 1, 0.1, 120);
    camera.position.z = 0;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.4));
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const stars = [];
    const positions = new Float32Array(count * 6);
    const colors = new Float32Array(count * 6);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const lines = new THREE.LineSegments(geometry, material);
    scene.add(lines);

    function resetStar(star, initial = false) {
      star.x = (Math.random() - 0.5) * 54;
      star.y = (Math.random() - 0.5) * 32;
      star.z = initial ? -4 - Math.random() * 86 : -82 - Math.random() * 14;
      star.brightness = 0.42 + Math.random() * 0.58;
    }

    for (let index = 0; index < count; index += 1) {
      const star = {};
      resetStar(star, true);
      stars.push(star);
      const colorOffset = index * 6;
      const cool = star.brightness;
      colors[colorOffset] = cool * 0.78;
      colors[colorOffset + 1] = cool * 0.9;
      colors[colorOffset + 2] = cool;
      colors[colorOffset + 3] = cool * 0.52;
      colors[colorOffset + 4] = cool * 0.68;
      colors[colorOffset + 5] = cool * 0.82;
    }

    let boost = 0;
    let targetBoost = 0;
    let raf = 0;
    let visible = true;
    const visibilityObserver = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
    }, { rootMargin: "120px" });
    visibilityObserver.observe(host);

    function resize() {
      const rect = host.getBoundingClientRect();
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
      camera.aspect = rect.width / Math.max(1, rect.height);
      camera.updateProjectionMatrix();
    }

    function drawFrame() {
      if (visible || reduceMotion.matches) {
        boost = THREE.MathUtils.lerp(boost, targetBoost, 0.12);
        targetBoost *= 0.91;
        const speed = baseSpeed + boost;

        stars.forEach((star, index) => {
          star.z += speed;
          if (star.z > -1.2) resetStar(star);
          const offset = index * 6;
          const trail = trailLength + boost * 5.2;
          positions[offset] = star.x;
          positions[offset + 1] = star.y;
          positions[offset + 2] = star.z;
          positions[offset + 3] = star.x;
          positions[offset + 4] = star.y;
          positions[offset + 5] = star.z - trail;
        });
        geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      }
      if (!reduceMotion.matches) raf = requestAnimationFrame(drawFrame);
    }

    resize();
    drawFrame();
    window.addEventListener("resize", resize);

    return {
      pulse(amount) {
        targetBoost = Math.max(targetBoost, amount);
      },
      dispose() {
        cancelAnimationFrame(raf);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        visibilityObserver.disconnect();
      }
    };
  } catch (error) {
    console.warn("Starfield unavailable", error);
    return null;
  }
}

const compact = window.innerWidth < 720;
const featuredStars = createStarTunnel(document.querySelector("#featured-starfield"), {
  count: compact ? 300 : 620,
  baseSpeed: 0.055,
  trailLength: 0.16,
  opacity: 0.82
});
const contactStars = createStarTunnel(document.querySelector("#contact-starfield"), {
  count: compact ? 180 : 360,
  baseSpeed: 0.012,
  trailLength: 0.05,
  opacity: 0.62
});

let previousScroll = window.scrollY;
let previousFeaturedIndex = document.querySelector("#featured-current")?.textContent;
let ticking = false;

function updateContact() {
  if (!contactSection || !contactStage) return;
  const rect = contactSection.getBoundingClientRect();
  const maxScroll = Math.max(1, rect.height - window.innerHeight);
  const progress = reduceMotion.matches ? 1 : clamp(-rect.top / maxScroll);
  const titlePhase = smoothstep(progress / 0.54);
  const ctaPhase = smoothstep((progress - 0.2) / 0.3);
  const detailPhase = smoothstep((progress - 0.46) / 0.28);
  const moonPhase = smoothstep(progress / 0.72);

  contactStage.style.setProperty("--contact-title-y", `${((1 - titlePhase) * 250).toFixed(1)}px`);
  contactStage.style.setProperty("--contact-title-opacity", (0.42 + titlePhase * 0.58).toFixed(3));
  contactStage.style.setProperty("--contact-cta-opacity", ctaPhase.toFixed(3));
  contactStage.style.setProperty("--contact-cta-y", `${((1 - ctaPhase) * 28).toFixed(1)}px`);
  contactStage.style.setProperty("--contact-cta-scale", (0.96 + ctaPhase * 0.04).toFixed(3));
  contactStage.style.setProperty("--contact-details-opacity", detailPhase.toFixed(3));
  contactStage.style.setProperty("--contact-details-y", `${((1 - detailPhase) * 24).toFixed(1)}px`);
  contactStage.style.setProperty("--contact-moon-scale", (0.72 + moonPhase * 0.68).toFixed(3));
  contactStage.style.setProperty("--contact-moon-y", `${(-18 + moonPhase * 42).toFixed(1)}px`);
  contactStage.classList.toggle("is-contact-ready", ctaPhase > 0.94);
}

function updateMotion() {
  ticking = false;
  const delta = Math.abs(window.scrollY - previousScroll);
  previousScroll = window.scrollY;

  if (featuredSection) {
    const rect = featuredSection.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      featuredStars?.pulse(clamp(delta * 0.018, 0, 1.25));
      const currentIndex = document.querySelector("#featured-current")?.textContent;
      if (currentIndex !== previousFeaturedIndex) featuredStars?.pulse(1.45);
      previousFeaturedIndex = currentIndex;
    }
  }

  if (contactSection) {
    const rect = contactSection.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) contactStars?.pulse(clamp(delta * 0.003, 0, 0.16));
  }
  updateContact();
}

function requestUpdate() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateMotion);
}

updateContact();
window.addEventListener("scroll", requestUpdate, { passive: true });
window.addEventListener("resize", requestUpdate);
window.addEventListener("pagehide", () => {
  featuredStars?.dispose();
  contactStars?.dispose();
}, { once: true });
