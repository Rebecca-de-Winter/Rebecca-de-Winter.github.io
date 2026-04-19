document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      key: "intro",
      eyebrow: "Portfolio",
      title: "Becky Cole\nFull Stack Developer",
      subtitle:
        "React, Django REST, thoughtful UX, and real product work with a teacher's eye for clarity.",
      bullets: [
        "Frontend and backend product builds",
        "Workflow logic, permissions, and user journeys",
        "Clean presentation mode for live demos",
      ],
      image: "",
      logo: "",
      primaryLabel: "Case studies",
      primaryHref: "case-studies.html",
      secondaryLabel: "Projects",
      secondaryHref: "projects.html#developer",
      showIntroArt: true,
    },
    {
      key: "podflow",
      eyebrow: "Case Study",
      title: "PodFlow",
      subtitle:
        "Trust-first accountability for private pods, shared goals, and meaningful follow-through.",
      bullets: [
        "Private accountability pods",
        "Adaptive check-ins and verification",
        "Notifications built around action",
      ],
      image: "assets/showcase/podflow-slide.png",
      logo: "assets/showcase/podflow-logo.png",
      primaryLabel: "Open case study",
      primaryHref: "case-studies.html#podflow",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
      showIntroArt: false,
    },
    {
      key: "backyard",
      eyebrow: "Case Study",
      title: "Backyard Festival",
      subtitle:
        "Crowdfunding for grassroots events, with pledges for money, time, and items.",
      bullets: [
        "Support gigs, fundraisers, and community events",
        "Track live needs and rewards",
        "Built with React and Django REST",
      ],
      image: "assets/showcase/backyard-slide.png",
      logo: "",
      primaryLabel: "Open case study",
      primaryHref: "case-studies.html#backyard-festival",
      secondaryLabel: "View projects",
      secondaryHref: "projects.html#developer",
      showIntroArt: false,
    },
    {
      key: "wolfie",
      eyebrow: "Creative Tech",
      title: "Wolfie",
      subtitle:
        "Playful robotics and creative tech experiments beyond the browser.",
      bullets: [
        "Raspberry Pi and Python tinkering",
        "Fast debugging and hands-on experiments",
        "Technical work with personality",
      ],
      image: "assets/showcase/wolfie-slide.jpg",
      logo: "",
      primaryLabel: "Back to portfolio",
      primaryHref: "index.html",
      secondaryLabel: "Contact Becky",
      secondaryHref: "contact.html",
      showIntroArt: false,
    },
  ];

  const AUTO_MS = 7000;
  const FADE_MS = 220;

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
  const logoEl = document.getElementById("slideLogo");
  const primaryEl = document.getElementById("slidePrimary");
  const secondaryEl = document.getElementById("slideSecondary");
  const introVisual = document.getElementById("introVisual");
  const introWave = document.getElementById("introWave");
  const visualWrap = document.getElementById("slideVisualWrap");
  const visualImage = document.getElementById("slideVisualImage");
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
    !logoEl ||
    !primaryEl ||
    !secondaryEl ||
    !introVisual ||
    !introWave ||
    !visualWrap ||
    !visualImage ||
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

      if (slide.key === "intro") {
        bg.style.backgroundImage =
          "linear-gradient(180deg, rgba(0,0,8,1) 0%, rgba(2,0,36,1) 14%, rgba(9,9,121,1) 34%, rgba(173,218,233,1) 92%)";
      } else if (slide.image) {
        bg.style.backgroundImage = `url("${slide.image}")`;
      }

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
      btn.addEventListener("click", () => goTo(slideIndex));
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

  function renderSlideVisual(slide) {
    if (slide.showIntroArt || !slide.image) {
      visualWrap.hidden = true;
      visualWrap.classList.remove("is-missing");
      visualImage.removeAttribute("src");
      visualImage.alt = "";
      return;
    }

    visualWrap.hidden = false;
    visualWrap.classList.remove("is-missing");
    visualImage.src = slide.image;
    visualImage.alt = `${slide.key} showcase visual`;
  }

  function renderSlide() {
    const slide = slides[index];

    carousel.dataset.slide = slide.key;
    eyebrowEl.textContent = slide.eyebrow || "";
    titleEl.textContent = slide.title || "";
    subtitleEl.textContent = slide.subtitle || "";

    renderBullets(slide.bullets || []);

    if (slide.logo) {
      logoEl.hidden = false;
      logoEl.src = slide.logo;
      logoEl.alt = `${slide.key} logo`;
    } else {
      logoEl.hidden = true;
      logoEl.removeAttribute("src");
      logoEl.alt = "";
    }

    primaryEl.textContent = slide.primaryLabel || "View work";
    primaryEl.href = slide.primaryHref || "index.html";

    secondaryEl.textContent = slide.secondaryLabel || "Learn more";
    secondaryEl.href = slide.secondaryHref || "about.html";

    introVisual.hidden = !slide.showIntroArt;
    introWave.hidden = !slide.showIntroArt;

    renderSlideVisual(slide);
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

  visualImage.addEventListener("error", () => {
    visualWrap.classList.add("is-missing");
  });

  logoEl.addEventListener("error", () => {
    logoEl.hidden = true;
    logoEl.removeAttribute("src");
    logoEl.alt = "";
  });

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

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
    } else if (event.key === "ArrowRight") {
      goNext();
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