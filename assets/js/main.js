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

// Fungsi untuk mengubah tampilan konten kualifikasi
function toggleQualification(index) {
  const contents = document.querySelectorAll(".qualification__content");
  const buttons = document.querySelectorAll(".qualification__button");

  // Menyembunyikan semua konten kualifikasi
  contents.forEach((content) => {
    content.classList.remove("qualification__content-active");
  });

  // Menghapus kelas aktif dari semua tombol
  buttons.forEach((button) => {
    button.classList.remove("qualification__active");
  });

  // Menampilkan konten yang sesuai dengan indeks yang dipilih
  contents[index - 1].classList.add("qualification__content-active");
  buttons[index - 1].classList.add("qualification__active");
}

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
