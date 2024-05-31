const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function (event) {
  event.stopPropagation(); // Mencegah penyebaran ke event klik dokumen
  nav.classList.toggle("slide");
});
document.addEventListener("click", function (event) {
  // Memeriksa apakah yang diklik bukanlah bagian dari menu
  if (!nav.contains(event.target)) {
    nav.classList.remove("slide"); // Menghilangkan menu jika diklik di luar menu
  }
});

//Clear form//
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
// Fungsi untuk memulai animasi pengetikan
function startTypingAnimation() {
  const text = document.getElementById("typing-text");
  text.classList.add("typing");
}

// Jalankan animasi pengetikan saat dokumen dimuat
document.addEventListener("DOMContentLoaded", startTypingAnimation);
