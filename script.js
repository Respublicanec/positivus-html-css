const toggles = document.querySelectorAll(".working_block");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.querySelector(".working_content");
    if (content.classList.contains("working_content_open")) {
      content.classList.remove("working_content_open");
    } else if (content.classList.contains("working_content")) {
      content.classList.add("working_content_open");
    }
    const bgColor = toggle;
    if (bgColor.classList.contains("working_bg_dark")) {
      bgColor.classList.remove("working_bg_dark");
      bgColor.classList.add("working_bg_green");
    } else if (bgColor.classList.contains("working_bg_green")) {
      bgColor.classList.remove("working_bg_green");
      bgColor.classList.add("working_bg_dark");
    }
    const icon = toggle.querySelector(".icon_plus, .icon_minus");
    if (icon.classList.contains("icon_plus")) {
      icon.classList.remove("icon_plus");
      icon.classList.add("icon_minus");
    } else if (icon.classList.contains("icon_minus")) {
      icon.classList.remove("icon_minus");
      icon.classList.add("icon_plus");
    }
  });
});

document.getElementById("menu").addEventListener("click", () => {
  document.getElementById("nav-header").style.transform = "none";
});

document.querySelector(".link_close_button").addEventListener("click", () => {
  document.getElementById("nav-header").style.transform = "translateX(100%)";
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-header").style.transform = "translateX(100%)";
  });
});

document.getElementById("team-all").addEventListener("click", () => {
  const teamContainers = document.querySelectorAll(".team_card");
  const button = document.getElementById("team-all");

  teamContainers.forEach(function (teamContainer) {
    if (teamContainer.classList.contains("team_card_hidden")) {
      teamContainer.classList.remove("team_card_hidden");
      button.textContent = "Hide command";
    } else {
      teamContainer.classList.add("team_card_hidden");
      button.textContent = "See all team";
    }
  });
});

const date = new Date().getFullYear();

document.getElementById("date").textContent = date;

document.addEventListener("DOMContentLoaded", function () {
  const glide = new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    perView: 2,
    gap: 90,
    rewind: false,
    breakpoints: {
      1300: {
        perView: 1,
      },
    },
  }).mount();
});
