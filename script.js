// ===============================
// EASY SETTINGS — change these
// ===============================

// Put your meeting date here. Example:
// const MEETING_DATE = "2027-02-14T12:00:00+08:00";
const MEETING_DATE = "2027-03-25T12:00:00+08:00";

// ===============================

const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {
  content.classList.add("show");
  document.body.classList.remove("locked");
  setTimeout(() => {
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
});

musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.innerHTML = "♫ <span>Music ON</span>";
    } catch {
      musicBtn.innerHTML = "♫ <span>Add music.mp3</span>";
    }
  } else {
    bgMusic.pause();
    musicBtn.innerHTML = "♫ <span>Music OFF</span>";
  }
});

// Secret messages
const secret = document.getElementById("secretMessage");
document.querySelectorAll(".note-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".note-buttons button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    secret.textContent = btn.dataset.message;
  });
});

// Miss-me surprise
document.getElementById("missBtn").addEventListener("click", () => {
  document.getElementById("missCard").classList.toggle("show");
});

// Letter
document.getElementById("letterBtn").addEventListener("click", () => {
  document.getElementById("letterPaper").classList.toggle("show");
});

// Countdown
const els = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const target = new Date(MEETING_DATE).getTime();
  const now = Date.now();
  let diff = target - now;

  if (diff <= 0) {
    els.days.textContent = "0";
    els.hours.textContent = "0";
    els.minutes.textContent = "0";
    els.seconds.textContent = "0";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  els.days.textContent = Math.floor(diff / day);
  diff %= day;
  els.hours.textContent = Math.floor(diff / hour);
  diff %= hour;
  els.minutes.textContent = Math.floor(diff / minute);
  diff %= minute;
  els.seconds.textContent = Math.floor(diff / second);
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));

// Star/particle background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  stars = Array.from({length: Math.min(150, Math.floor(window.innerWidth / 8))}, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.3 + .15,
    a: Math.random() * .65 + .15,
    s: Math.random() * .15 + .03
  }));
}
function drawStars() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (const s of stars) {
    s.y -= s.s;
    if (s.y < -2) { s.y = window.innerHeight + 2; s.x = Math.random() * window.innerWidth; }
    ctx.globalAlpha = s.a;
    ctx.fillStyle = "#d9c8ca";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawStars);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawStars();
