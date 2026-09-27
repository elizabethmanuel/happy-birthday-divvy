// ---- EDIT YOUR CONTENT HERE ----

// Videos: use "file" for a video you host in a /videos folder, or "embed" for a YouTube/Drive embed link.
const videos = [
  {
    from: "Dada",
    type: "file",
    src: "videos/WhatsApp Video 2026-09-27 at 10.59.18.mp4",
  },
  {
    from: "Mashi",
    type: "file",
    src: "videos/WhatsApp Video 2026-09-27 at 10.59.18 (1).mp4",
  },
  {
    from: "Papa",
    type: "file",
    src: "videos/WhatsApp Video 2026-09-27 at 11.28.38.mp4",
  },
  {
    from: "Dadu and the Bangalore Party",
    type: "file",
    src: "videos/WhatsApp Video 2026-09-27 at 11.33.03.mp4",
  },
  {
    from: "Mama",
    type: "file",
    src: "videos/WhatsApp Video 2026-09-27 at 11.59.45.mp4",
  },
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

// ---- RENDER VIDEOS (spotlight + thumbnail strip) ----
const videoGrid = document.getElementById("video-grid");
const videoSpotlight = document.getElementById("video-spotlight");

function renderSpotlight(v) {
  const media =
    v.type === "embed"
      ? `<iframe src="${v.src}" allowfullscreen></iframe>`
      : `<video controls src="${v.src}"></video>`;
  videoSpotlight.innerHTML = `${media}<p>${v.from}</p>`;
}

function setActiveThumb(index) {
  [...videoGrid.children].forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

videos.forEach((v, i) => {
  const card = document.createElement("div");
  card.className = "video-card" + (i === 0 ? " active" : "");
  const thumbMedia =
    v.type === "embed"
      ? `<iframe src="${v.src}"></iframe>`
      : `<video muted src="${v.src}#t=0.1" preload="metadata"></video>`;
  card.innerHTML = `${thumbMedia}<p>${v.from}</p>`;
  card.addEventListener("click", () => {
    renderSpotlight(v);
    setActiveThumb(i);
  });
  videoGrid.appendChild(card);
});

if (videos.length) {
  renderSpotlight(videos[0]);
}

// ---- RENDER LETTERS CAROUSEL ----
const carousel = document.getElementById("letter-carousel");
const modal = document.getElementById("letter-modal");
const modalFrom = document.getElementById("modal-from");
const modalBody = document.getElementById("modal-body");

letters.forEach((letter) => {
  const card = document.createElement("div");
  card.className = "letter-card";
  card.innerHTML = `<div class="envelope">✦</div><div class="from">${letter.from}</div>`;
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

document.getElementById("video-carousel-left").addEventListener("click", () => {
  videoGrid.scrollBy({ left: -320, behavior: "smooth" });
});
document.getElementById("video-carousel-right").addEventListener("click", () => {
  videoGrid.scrollBy({ left: 320, behavior: "smooth" });
});
