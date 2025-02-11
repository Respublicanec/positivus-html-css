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

$(document).ready(function () {
  $(".testimonials_top-block").slick({
    dots: true,
    appendDots: $(".dots-container"),
    speed: 300,
    centerMode: true,
    centerPadding: "287px",
    adaptiveHeight: true,
    nextArrow: $(".slick-next"),
    prevArrow: $(".slick-prev"),
    customPaging: function (slider, i) {
      return `
        <div class="dot-icon" data-index="${i}">
          <svg id="vector" viewBox="0 0 14 14"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" />
</svg>
        </div>`;
    },
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: "0%",
        },
      },
    ],
  });
});
