document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      key: "intro",
      eyebrow: "Full Stack Developer",
      title: "Becky Cole",
      subtitle:
        "Thoughtful software, polished interfaces, and real workflow design with a playful creative edge.",
      bullets: [
        "React and Django REST product work",
        "UX shaped by a teacher's eye for clarity",
        "Portfolio highlights",
      ],
      image: "assets/showcase/becky-cartoon.jpg",
      alt: "Cartoon Becky showcase illustration",
      imageFit: "contain",
      imagePosition: "center center",
      accent: "#fdaf69",
      washA: "rgba(253, 175, 105, 0.22)",
      washB: "rgba(122, 223, 219, 0.14)",
      primaryLabel: "Case studies",
      primaryHref: "case-studies.html",
      secondaryLabel: "Projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "podflow-notifications",
      eyebrow: "PodFlow",
      title: "Workflow visibility through notifications",
      subtitle:
        "Action-based notifications help guide users through invites, approvals, verification requests, and other important next steps.",
      bullets: [
        "Notifications built around real actions",
        "Connects complex workflows across the product",
        "Responsive, mobile-friendly, and dark mode ready",
      ],
      image: "assets/showcase/podflow-notifications.jpg",
      alt: "PodFlow notifications screen",
      imageFit: "contain",
      imagePosition: "center center",
      accent: "#8f84ff",
      washA: "rgba(143, 132, 255, 0.22)",
      washB: "rgba(253, 175, 105, 0.14)",
      primaryLabel: "PodFlow case study",
      primaryHref: "case-studies.html#podflow",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "podflow-goals",
      eyebrow: "PodFlow",
      title: "Adaptive goals and naming logic",
      subtitle:
        "The interface adapts across different tracking types while keeping labels, progress language, and history consistent.",
      bullets: [
        "Done-or-not-done, count, and duration flows",
        "Naming conventions carry across the product",
        "Designed to feel intuitive and personal",
      ],
      image: "assets/showcase/podflow-goals.jpg",
      alt: "PodFlow adaptive goals screen",
      imageFit: "contain",
      imagePosition: "50% center",
      accent: "#fdaf69",
      washA: "rgba(253, 175, 105, 0.2)",
      washB: "rgba(143, 132, 255, 0.14)",
      primaryLabel: "PodFlow case study",
      primaryHref: "case-studies.html#podflow",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "podflow-pods",
      eyebrow: "PodFlow",
      title: "Trust-first pods and layered permissions",
      subtitle:
        "Private pods, verification, and role-based permissions make accountability feel more intentional and more meaningful.",
      bullets: [
        "Private pods with trusted people",
        "Verification beyond self-reporting",
        "Layered permissions across connections, goals, and pods",
      ],
      image: "assets/showcase/podflow-pods.jpg",
      alt: "PodFlow pods and permissions screen",
      imageFit: "cover",
      imagePosition: "50% center",
      accent: "#7adfdb",
      washA: "rgba(122, 223, 219, 0.22)",
      washB: "rgba(143, 132, 255, 0.14)",
      primaryLabel: "PodFlow case study",
      primaryHref: "case-studies.html#podflow",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
  key: "backyard-support",
  eyebrow: "Backyard Festival",
  title: "Flexible support for real events",
  subtitle:
    "Backyard Festival supports money, volunteer time, and physical items, making the platform more practical for grassroots event planning.",
  bullets: [
    "Money, time, and item pledges",
    "Donation and loan tracking for items",
    "Built for real community organisers",
  ],
  image: "assets/showcase/backyard-support.png",
  alt: "Backyard Festival flexible support screen",
  imageFit: "cover",
  imagePosition: "50% 40%",
  imageScale: 1,
  accent: "#7adfdb",
  washA: "rgba(122, 223, 219, 0.24)",
  washB: "rgba(101, 224, 165, 0.16)",
  primaryLabel: "Backyard Festival case study",
  primaryHref: "case-studies.html#backyard-festival",
  secondaryLabel: "View projects",
  secondaryHref: "projects.html#developer",
},
    {
      key: "backyard-live",
      eyebrow: "Backyard Festival",
      title: "Live pledge feedback and progress tracking",
      subtitle:
        "As support comes in, organisers and supporters can immediately see needs update, spots change, and fundraiser progress move.",
      bullets: [
        "Live updates as support is approved",
        "Clear feedback for organisers and supporters",
        "Designed to feel active and responsive",
      ],
      image: "assets/showcase/backyard-live.jpg",
      alt: "Backyard Festival live updates screen",
      imageFit: "cover",
      imagePosition: "50% center",
      accent: "#65e0a5",
      washA: "rgba(101, 224, 165, 0.22)",
      washB: "rgba(122, 223, 219, 0.16)",
      primaryLabel: "Backyard Festival case study",
      primaryHref: "case-studies.html#backyard-festival",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
  key: "backyard-dashboard",
  eyebrow: "Backyard Festival",
  title: "Organiser control, approvals, and dashboards",
  subtitle:
    "Dedicated organiser and supporter views make it easier to manage fundraisers, review pledges, and handle more complex workflows cleanly.",
  bullets: [
    "Organiser and supporter dashboard views",
    "Approval flows for incoming pledges",
    "Workflow design shaped by real event needs",
  ],
  image: "assets/showcase/backyard-dashboard.jpg",
  alt: "Backyard Festival organiser dashboard screen",
  imageFit: "cover",
  imagePosition: "50% 34%",
  imageScale: 1.01,
  accent: "#fdaf69",
  washA: "rgba(101, 224, 165, 0.2)",
  washB: "rgba(253, 175, 105, 0.16)",
  primaryLabel: "Backyard Festival case study",
  primaryHref: "case-studies.html#backyard-festival",
  secondaryLabel: "View projects",
  secondaryHref: "projects.html#developer",
},
    {
  key: "outro",
  eyebrow: "Built by Becky",
  title: "Passion for building. Inventive and curious.",
  subtitle:
    "Full stack development, thoughtful UX, and playful technical exploration, including creative tech experiments with Wolfie.",
  bullets: [
    "React, Django REST, and workflow-heavy product builds",
    "Strong UI thinking and practical problem-solving",
    "Creative tech curiosity with Wolfie in the mix",
  ],
  image: "assets/showcase/becky-real.jpg",
  alt: "Photo of Becky",
  imageFit: "cover",
  imagePosition: "50% 34%",
  imageScale: 0.92,
  accent: "#ff9fbb",
  washA: "rgba(255, 159, 187, 0.2)",
  washB: "rgba(253, 175, 105, 0.14)",
  primaryLabel: "Visit portfolio",
  primaryHref: "index.html",
  secondaryLabel: "Contact Becky",
  secondaryHref: "contact.html",
},
  ];

  const AUTO_MS = 8000;
  const FADE_MS = 240;
  const SWIPE_THRESHOLD = 50;

  let index = 0;
  let intervalId = null;
  let isTransitioning = false;
  let touchStartX = 0;

  const stage = document.getElementById("showcaseCarousel");
  const fadeLayer = document.getElementById("carouselFade");
  const dotsWrap = document.getElementById("carouselDots");
  const titleEl = document.getElementById("slideTitle");
  const subtitleEl = document.getElementById("slideSubtitle");
  const eyebrowEl = document.getElementById("slideEyebrow");
  const bulletsEl = document.getElementById("slideBullets");
  const primaryEl = document.getElementById("slidePrimary");
  const secondaryEl = document.getElementById("slideSecondary");
  const mediaWrap = document.getElementById("slideMediaWrap");
  const imageEl = document.getElementById("slideImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (
    !stage ||
    !fadeLayer ||
    !dotsWrap ||
    !titleEl ||
    !subtitleEl ||
    !eyebrowEl ||
    !bulletsEl ||
    !primaryEl ||
    !secondaryEl ||
    !mediaWrap ||
    !imageEl ||
    !prevBtn ||
    !nextBtn
  ) {
    console.error("Showcase carousel: one or more required elements were not found.");
    return;
  }

  function clampIndex(i) {
    return (i + slides.length) % slides.length;
  }

  function setAction(linkEl, label, href, fallbackLabel, fallbackHref) {
    const hasLabel = typeof label === "string" && label.trim() !== "";
    const hasHref = typeof href === "string" && href.trim() !== "";

    if (!hasLabel && !hasHref) {
      linkEl.hidden = true;
      return;
    }

    linkEl.hidden = false;
    linkEl.textContent = hasLabel ? label : fallbackLabel;
    linkEl.href = hasHref ? href : fallbackHref;
  }

  function renderBullets(items) {
    bulletsEl.innerHTML = "";

    if (!Array.isArray(items) || items.length === 0) {
      bulletsEl.hidden = true;
      return;
    }

    bulletsEl.hidden = false;

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      bulletsEl.appendChild(li);
    });
  }

  function renderDots() {
    dotsWrap.innerHTML = "";

    slides.forEach((slide, slideIndex) => {
      const btn = document.createElement("button");
      const labelTitle = slide.title || `Slide ${slideIndex + 1}`;

      btn.type = "button";
      btn.className =
        "showcase-copy__dot" + (slideIndex === index ? " is-active" : "");
      btn.setAttribute("aria-label", `Go to ${labelTitle}`);
      btn.setAttribute("aria-current", slideIndex === index ? "true" : "false");

      btn.addEventListener("click", () => {
        goTo(slideIndex);
        restartAuto();
      });

      dotsWrap.appendChild(btn);
    });
  }

  function applyTheme(slide) {
    stage.style.setProperty("--accent", slide.accent || "#fdaf69");
    stage.style.setProperty("--wash-a", slide.washA || "rgba(253, 175, 105, 0.2)");
    stage.style.setProperty("--wash-b", slide.washB || "rgba(122, 223, 219, 0.14)");
  }

function renderMedia(slide) {
  if (!slide.image) {
    mediaWrap.classList.add("is-hidden");
    imageEl.removeAttribute("src");
    imageEl.alt = "";
    imageEl.style.transform = "scale(1)";
    return;
  }

  mediaWrap.classList.remove("is-hidden");
  imageEl.src = slide.image;
  imageEl.alt = slide.alt || `${slide.key} showcase image`;
  imageEl.style.objectFit = slide.imageFit || "contain";
  imageEl.style.objectPosition = slide.imagePosition || "center center";
  imageEl.style.transform = `scale(${slide.imageScale || 1})`;
}

  function renderSlide() {
    const slide = slides[index];

    stage.dataset.slide = slide.key;
    stage.setAttribute(
      "aria-label",
      `Rebecca Cole showcase carousel. Current slide: ${slide.eyebrow || ""} ${slide.title || ""}`.trim()
    );

    eyebrowEl.textContent = slide.eyebrow || "";
    titleEl.textContent = slide.title || "";
    subtitleEl.textContent = slide.subtitle || "";

    setAction(
      primaryEl,
      slide.primaryLabel,
      slide.primaryHref,
      "View work",
      "index.html"
    );

    setAction(
      secondaryEl,
      slide.secondaryLabel,
      slide.secondaryHref,
      "Learn more",
      "about.html"
    );

    applyTheme(slide);
    renderBullets(slide.bullets || []);
    renderMedia(slide);
    renderDots();
  }

  function goTo(nextIndex) {
    if (isTransitioning) return;

    isTransitioning = true;
    fadeLayer.classList.add("is-on");

    window.setTimeout(() => {
      index = clampIndex(nextIndex);
      renderSlide();

      window.setTimeout(() => {
        fadeLayer.classList.remove("is-on");
        isTransitioning = false;
      }, FADE_MS);
    }, FADE_MS);
  }

  function goPrev() {
    goTo(index - 1);
  }

  function goNext() {
    goTo(index + 1);
  }

  function stopAuto() {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  }

  function startAuto() {
    stopAuto();
    intervalId = window.setInterval(() => {
      goTo(index + 1);
    }, AUTO_MS);
  }

  function restartAuto() {
    startAuto();
  }

  imageEl.addEventListener("error", () => {
    mediaWrap.classList.add("is-hidden");
  });

  prevBtn.addEventListener("click", () => {
    goPrev();
    restartAuto();
  });

  nextBtn.addEventListener("click", () => {
    goNext();
    restartAuto();
  });

  stage.addEventListener("mouseenter", stopAuto);
  stage.addEventListener("mouseleave", startAuto);

  stage.addEventListener("focusin", stopAuto);
  stage.addEventListener("focusout", (event) => {
    if (!stage.contains(event.relatedTarget)) {
      startAuto();
    }
  });

  stage.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      goPrev();
      restartAuto();
    } else if (event.key === "ArrowRight") {
      goNext();
      restartAuto();
    }
  });

  stage.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  stage.addEventListener(
    "touchend",
    (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

      if (deltaX > 0) {
        goPrev();
      } else {
        goNext();
      }

      restartAuto();
    },
    { passive: true }
  );

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAuto();
    } else {
      startAuto();
    }
  });

  renderSlide();
  startAuto();
});