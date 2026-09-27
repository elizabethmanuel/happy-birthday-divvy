// ---- EDIT YOUR CONTENT HERE ----

// Videos: use "file" for a video you host in a /videos folder, or "embed" for a YouTube/Drive embed link.
const videos = [
  {
    from: "Example Friend",
    type: "file", // "file" or "embed"
    src: "videos/example.mp4", // path to file, or embed URL
  },
  // {
  //   from: "Another Friend",
  //   type: "embed",
  //   src: "https://www.youtube.com/embed/VIDEO_ID",
  // },
];

// Letters: each one becomes a clickable card in the carousel.
const letters = [
  {
    from: "Example Friend",
    body: "Happy birthday! Replace this with a real letter in script.js.",
  },
  {
    from: "Another Friend",
    body: "Wishing you the best day ever!",
  },
];

// ---- TAB SWITCHING ----
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ---- RENDER VIDEOS ----
const videoGrid = document.getElementById("video-grid");
videos.forEach((v) => {
  const card = document.createElement("div");
  card.className = "video-card";
  const media =
    v.type === "embed"
      ? `<iframe src="${v.src}" allowfullscreen></iframe>`
      : `<video controls src="${v.src}"></video>`;
  card.innerHTML = `${media}<p>From: ${v.from}</p>`;
  videoGrid.appendChild(card);
});

// ---- RENDER LETTERS CAROUSEL ----
const carousel = document.getElementById("letter-carousel");
const modal = document.getElementById("letter-modal");
const modalFrom = document.getElementById("modal-from");
const modalBody = document.getElementById("modal-body");

letters.forEach((letter) => {
  const card = document.createElement("div");
  card.className = "letter-card";
  card.innerHTML = `<div class="envelope">💌</div><div class="from">From: ${letter.from}</div>`;
  card.addEventListener("click", () => {
    modalFrom.textContent = `From: ${letter.from}`;
    modalBody.textContent = letter.body;
    modal.classList.add("open");
  });
  carousel.appendChild(card);
});

document.getElementById("modal-close").addEventListener("click", () => {
  modal.classList.remove("open");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

// ---- CAROUSEL ARROWS ----
document.getElementById("carousel-left").addEventListener("click", () => {
  carousel.scrollBy({ left: -240, behavior: "smooth" });
});
document.getElementById("carousel-right").addEventListener("click", () => {
  carousel.scrollBy({ left: 240, behavior: "smooth" });
});
