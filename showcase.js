document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      key: "intro",
      eyebrow: "Full Stack Developer",
      title: "Becky Cole",
      subtitle:
        "Full stack developer building thoughtful interfaces, real workflow logic, and polished user experiences.",
      bullets: [
        "React and Django REST product work",
        "Clear UX shaped by a teacher's eye for structure",
        "Portfolio highlights rotating for showcase night",
      ],
      image: "assets/showcase/becky-showcase.jpg",
      position: "center center",
      primaryLabel: "Case studies",
      primaryHref: "case-studies.html",
      secondaryLabel: "Projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "podflow-notifications",
      eyebrow: "PodFlow",
      title: "Workflow visibility\nthrough notifications",
      subtitle:
        "PodFlow ties the product together with action-based notifications for invites, approvals, verification requests, and other next-step moments.",
      bullets: [
        "Notifications built around real actions",
        "Guides users through complex workflows",
        "Responsive, mobile-friendly, and dark mode ready",
      ],
      image: "assets/showcase/podflow-notifications.jpg",
      position: "center top",
      primaryLabel: "PodFlow case study",
      primaryHref: "case-studies.html#podflow",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "podflow-goals",
      eyebrow: "PodFlow",
      title: "Adaptive goals\nand naming logic",
      subtitle:
        "The interface adapts across done-or-not-done, number-based, and duration-based goals, while keeping labels and progress language consistent.",
      bullets: [
        "Custom goal tracking modes",
        "Naming carries across the whole product",
        "Built to feel personal and intuitive",
      ],
      image: "assets/showcase/podflow-goals.jpg",
      position: "center top",
      primaryLabel: "PodFlow case study",
      primaryHref: "case-studies.html#podflow",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "podflow-pods",
      eyebrow: "PodFlow",
      title: "Trust-first pods\nand layered permissions",
      subtitle:
        "Private pods, connection-first invitations, verification, and role-based permissions were designed to make accountability supportive and intentional.",
      bullets: [
        "Private pods with trusted people",
        "Verification beyond self-reporting",
        "Layered permissions across connections, goals, and pods",
      ],
      image: "assets/showcase/podflow-pods.jpg",
      position: "center center",
      primaryLabel: "PodFlow case study",
      primaryHref: "case-studies.html#podflow",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "backyard-support",
      eyebrow: "Backyard Festival",
      title: "Flexible support\nfor real events",
      subtitle:
        "Backyard Festival goes beyond cash-only crowdfunding with support for money, volunteer time, and physical items, including donated or loaned gear.",
      bullets: [
        "Money, time, and item pledges",
        "Donation and loan tracking for items",
        "Built for practical community event planning",
      ],
      image: "assets/showcase/backyard-support.jpg",
      position: "center top",
      primaryLabel: "Backyard Festival case study",
      primaryHref: "case-studies.html#backyard-festival",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "backyard-live",
      eyebrow: "Backyard Festival",
      title: "Live pledge feedback\nand progress tracking",
      subtitle:
        "As pledges come in, organisers and supporters can immediately see remaining spots, updated needs, and changing fundraiser progress.",
      bullets: [
        "Live updates as support is approved",
        "Clear feedback for organisers and supporters",
        "Designed to feel active and responsive",
      ],
      image: "assets/showcase/backyard-live.jpg",
      position: "center center",
      primaryLabel: "Backyard Festival case study",
      primaryHref: "case-studies.html#backyard-festival",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "backyard-dashboard",
      eyebrow: "Backyard Festival",
      title: "Organiser control,\napprovals, and dashboards",
      subtitle:
        "Dedicated organiser and supporter views make it easier to manage fundraisers, review pledges, and handle more complex workflows as the platform grows.",
      bullets: [
        "Organiser and supporter dashboard views",
        "Approval flows for incoming pledges",
        "Workflow control shaped by real event needs",
      ],
      image: "assets/showcase/backyard-dashboard.jpg",
      position: "center top",
      primaryLabel: "Backyard Festival case study",
      primaryHref: "case-studies.html#backyard-festival",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
    },
    {
      key: "wolfie",
      eyebrow: "Creative Tech",
      title: "Wolfie",
      subtitle:
        "Playful robotics, Raspberry Pi experimentation, and hands-on technical curiosity beyond the browser.",
      bullets: [
        "Python and hardware tinkering",
        "Fast debugging and practical experimentation",
        "Technical work with personality",
      ],
      image: "assets/showcase/wolfie-slide.jpg",
      position: "center center",
      primaryLabel: "Back to portfolio",
      primaryHref: "index.html",
      secondaryLabel: "Contact Becky",
      secondaryHref: "contact.html",
    },
  ];

  const AUTO_MS = 8000;
  const FADE_MS = 240;

  let index = 0;
  let intervalId = null;
  let isTransitioning = false;

  const carousel = document.getElementById("showcaseCarousel");
  const bgStack = document.getElementById("carouselBg");
  const fadeLayer = document.getElementById("carouselFade");
  const dotsWrap = document.getElementById("carouselDots");
  const titleEl = document.getElementById("slideTitle");
  const subtitleEl = document.getElementById("slideSubtitle");
  const eyebrowEl = document.getElementById("slideEyebrow");
  const bulletsEl = document.getElementById("slideBullets");
  const primaryEl = document.getElementById("slidePrimary");
  const secondaryEl = document.getElementById("slideSecondary");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (
    !carousel ||
    !bgStack ||
    !fadeLayer ||
    !dotsWrap ||
    !titleEl ||
    !subtitleEl ||
    !eyebrowEl ||
    !bulletsEl ||
    !primaryEl ||
    !secondaryEl ||
    !prevBtn ||
    !nextBtn
  ) {
    console.error("Showcase carousel: one or more required elements were not found.");
    return;
  }

  function clampIndex(i) {
    return (i + slides.length) % slides.length;
  }

  function renderBackgrounds() {
    bgStack.innerHTML = "";

    slides.forEach((slide, slideIndex) => {
      const bg = document.createElement("div");
      bg.className =
        "showcase-carousel__bg" + (slideIndex === index ? " is-active" : "");

      if (slide.image) {
        bg.style.backgroundImage = `url("${slide.image}")`;
      } else {
        bg.style.backgroundImage =
          "linear-gradient(180deg, rgba(0,0,8,1) 0%, rgba(2,0,36,1) 14%, rgba(9,9,121,1) 34%, rgba(173,218,233,1) 92%)";
      }

      bg.style.backgroundPosition = slide.position || "center center";
      bgStack.appendChild(bg);
    });
  }

  function renderDots() {
    dotsWrap.innerHTML = "";

    slides.forEach((slide, slideIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "showcase-carousel__dot" + (slideIndex === index ? " is-active" : "");
      btn.setAttribute("aria-label", `Go to slide ${slideIndex + 1}`);
      btn.addEventListener("click", () => {
        goTo(slideIndex);
        restartAuto();
      });
      dotsWrap.appendChild(btn);
    });
  }

  function renderBullets(items) {
    bulletsEl.innerHTML = "";

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      bulletsEl.appendChild(li);
    });
  }

  function renderSlide() {
    const slide = slides[index];

    carousel.dataset.slide = slide.key;
    eyebrowEl.textContent = slide.eyebrow || "";
    titleEl.textContent = slide.title || "";
    subtitleEl.textContent = slide.subtitle || "";

    renderBullets(slide.bullets || []);
    primaryEl.textContent = slide.primaryLabel || "View work";
    primaryEl.href = slide.primaryHref || "index.html";
    secondaryEl.textContent = slide.secondaryLabel || "Learn more";
    secondaryEl.href = slide.secondaryHref || "about.html";

    renderBackgrounds();
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

  prevBtn.addEventListener("click", () => {
    goPrev();
    restartAuto();
  });

  nextBtn.addEventListener("click", () => {
    goNext();
    restartAuto();
  });

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);
  carousel.addEventListener("focusin", stopAuto);
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      startAuto();
    }
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      goPrev();
      restartAuto();
    } else if (event.key === "ArrowRight") {
      goNext();
      restartAuto();
    }
  });

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
