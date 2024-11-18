const showMenu = (showMenu) => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.add("show-menu");
};

const closeMenu = (closeMenu) => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

const toggleModal = (modal) => {
  const modalElement = document.getElementById(modal);
  modalElement.classList.toggle("active-modal");
};

const toggleQualification = () => {
  const qualificationButton1 = document.getElementById(
    "qualification__button1"
  );
  const qualificationButton2 = document.getElementById(
    "qualification__button2"
  );
  qualificationButton1.classList.toggle("qualification__active");
  qualificationButton2.classList.toggle("qualification__active");
  const qualificationContent1 = document.getElementById(
    "qualification__content1"
  );
  const qualificationContent2 = document.getElementById(
    "qualification__content2"
  );
  qualificationContent1.classList.toggle("qualification__content-active");
  qualificationContent2.classList.toggle("qualification__content-active");
};

window.addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});
