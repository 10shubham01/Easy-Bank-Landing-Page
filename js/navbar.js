const navSlide = () => {
  const links = document.querySelectorAll(".link");
  links.forEach((btn) => {
    btn.addEventListener("click", () => {
      links.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      nav.classList.toggle("nav-active");
      if (nav.classList[1] == "nav-active") {
        img.src = "./images/icon-close.svg";
      } else {
        img.src = "./images/icon-hamburger.svg";
      }
    });
  });

  const burger = document.querySelector(".burger");
  const img = document.querySelector(".img-btn");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (nav.classList[1] == "nav-active") {
      img.src = "./images/icon-close.svg";
    } else {
      img.src = "./images/icon-hamburger.svg";
    }
  });
};
navSlide();
