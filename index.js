const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

const navLinks = mobileMenu.querySelectorAll("a[href^='#']");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    mobileMenu.classList.remove("active");

    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const caseItems = document.querySelectorAll(".case-item");
  const projectImage = document.getElementById("projectImage");
  const projectRole = document.getElementById("projectRole");
  const projectOverview = document.getElementById("projectOverview");
  const projectSkills = document.querySelector(".skills");
  const liveStatus = document.querySelector(".live");
  const caseLink = document.querySelector(".links a");

  const projects = {
    1: {
      image: "./images/body.png",
      role: "Product Designer & Engineer",
      overview:
        "Designed and developed WanderLux, a curated luxury travel platform\nthat helps users discover personalized high-end destinations and\nexclusive travel offers.",
      skills: ["UX Design", "Frontend Development", "Animations"],
      caseLink:
        "https://www.figma.com/design/1OgTLu16xD5z66kVtvtzzR/Travel-webbsite?node-id=0-1&t=9li3b1V45Po5T0BR-1",
      liveLink: "https://kems-kelly.github.io/Newtravel/",
      live: "Live",
    },
    2: {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
      role: "Frontend Developer",
      overview:
        "Developed a modern analytics platform with real-time visual feedback and modular dashboard components.",
      skills: ["React", "API Integration", "Performance"],
      caseLink: "https://www.figma.com/file/example2",
      liveLink: "https://example2.com",
      live: "Live",
    },
    3: {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000",
      role: "UX Engineer",
      overview:
        "Redesigned a major e-commerce platform to increase conversions by 25% through improved UX flows.",
      skills: ["UX Design", "Prototyping", "Conversion Optimization"],
      caseLink: "https://www.figma.com/file/example3",
      liveLink: "https://example3.com",
      live: "Live",
    },
    4: {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000",
      role: "Brand Designer",
      overview:
        "Refreshed the company’s visual identity with a modernized logo, typography, and color system.",
      skills: ["Brand Design", "Typography", "Design Systems"],
      caseLink: "https://www.figma.com/file/example4",
      liveLink: "https://example4.com",
      live: "Live",
    },
    5: {
      image:
        "https://images.unsplash.com/photo-1581091012184-5c4f38b0d975?w=1000",
      role: "UX Researcher",
      overview:
        "Led qualitative and quantitative user research to guide product strategy and improve usability.",
      skills: ["User Interviews", "Data Analysis", "Research Synthesis"],
      caseLink: "https://www.figma.com/file/example5",
      liveLink: "https://example5.com",
      live: "Archived",
    },
  };

  caseItems.forEach((item) => {
    item.addEventListener("click", () => {
      caseItems.forEach((c) => c.classList.remove("active"));
      item.classList.add("active");

      const data = projects[item.dataset.id];
      if (data) {
        projectImage.style.opacity = "0";
        setTimeout(() => {
          projectImage.src = data.image;
          projectRole.textContent = data.role;
          projectOverview.textContent = data.overview;
          projectSkills.innerHTML = data.skills
            .map((s) => `<span>${s}</span>`)
            .join("");

          caseLink.href = data.caseLink || "#";
          caseLink.target = "_blank";
          caseLink.rel = "noopener noreferrer";

          liveStatus.href = data.liveLink || "#";
          liveStatus.target = "_blank";
          liveStatus.rel = "noopener noreferrer";
          liveStatus.textContent = data.live;

          projectImage.style.opacity = "1";
        }, 250);
      }
    });
  });

  toggleBtn.addEventListener("click", () => {
    const hiddenItems = document.querySelectorAll(".case-item.hidden");
    if (toggleBtn.textContent === "View More") {
      hiddenItems.forEach((item) => item.classList.remove("hidden"));
      toggleBtn.textContent = "View Less";
    } else {
      caseItems.forEach((item, index) => {
        if (index >= 3) item.classList.add("hidden");
      });
      toggleBtn.textContent = "View More";
    }
  });
});
document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");
    setTimeout(() => link.classList.remove("active"), 300);
  });
});
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();

    // Trigger when element is 100px above viewport bottom
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
