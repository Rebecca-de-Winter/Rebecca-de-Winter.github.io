document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      key: "intro",
      eyebrow: "Full Stack Developer",
      title: "Becky Cole\nDeveloper, educator,\nand media creator.",
      subtitle:
        "Thoughtful software, polished interfaces, and a strong instinct for turning complexity into something people can actually use.",
      bullets: [
        "React and Django REST product work",
        "Workflow logic, permissions, and real user journeys",
        "A teacher’s eye for clarity, onboarding, and UX",
      ],
      image: "assets/stars.png",
      logo: "",
      primaryLabel: "View case studies",
      primaryHref: "case-studies.html",
      secondaryLabel: "About Becky",
      secondaryHref: "about.html",
      showIntroArt: true,
    },
    {
      key: "podflow",
      eyebrow: "Case study",
      title: "PodFlow\nTrust-first accountability\nwith real follow-through.",
      subtitle:
        "A private accountability platform designed for trusted pods, shared momentum, and meaningful next actions.",
      bullets: [
        "Private pods for real accountability",
        "Check-ins, progress, and shared momentum",
        "Permissions, verification, and action-driven workflow",
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
      eyebrow: "Case study",
      title: "Backyard Festival\nCrowdfunding for\ngrassroots events.",
      subtitle:
        "A community-powered platform where supporters can pledge money, time, or items to help bring events to life.",
      bullets: [
        "Support gigs, fundraisers, and community events",
        "Pledge money, time, or items",
        "Track live needs, rewards, and organiser progress",
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
      eyebrow: "Creative tech",
      title: "Wolfie\nPlayful experiments\nbeyond the browser.",
      subtitle:
        "Raspberry Pi robotics, creative coding, and curious technical problem solving with a bit of personality.",
      bullets: [
        "Python, hardware tinkering, and robotics",
        "Fast debugging and hands-on experimentation",
        "Creative tech that makes people smile and ask questions",
      ],
      image: "assets/showcase/wolfie-slide.png",
      logo: "",
      primaryLabel: "View portfolio",
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
      bg.className = "carousel__bg" + (slideIndex === index ? " is-active" : "");

      if (slide.key === "intro") {
        bg.style.backgroundImage =
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 10%, rgba(9,9,121,1) 22%, rgba(173,218,233,1) 82%)";
      } else {
        bg.style.backgroundImage = 'url("' + slide.image + '")';
      }

      bgStack.appendChild(bg);
    });
  }

  function renderDots() {
    dotsWrap.innerHTML = "";

    slides.forEach((slide, slideIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "carousel__dot" + (slideIndex === index ? " is-active" : "");
      btn.setAttribute("aria-label", "Go to slide " + (slideIndex + 1));
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
      logoEl.alt = slide.key + " logo";
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

    renderBackgrounds();
    renderDots();
  }

  function goTo(nextIndex) {
    index = clampIndex(nextIndex);
    fadeLayer.classList.add("is-on");

    window.setTimeout(() => {
      renderSlide();

      window.setTimeout(() => {
        fadeLayer.classList.remove("is-on");
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
      index = clampIndex(index + 1);
      renderSlide();
    }, AUTO_MS);
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);
  carousel.addEventListener("focusin", stopAuto);
  carousel.addEventListener("focusout", startAuto);

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      goPrev();
    } else if (event.key === "ArrowRight") {
      goNext();
    }
  });

  renderSlide();
  startAuto();
});