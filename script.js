/* =========================================================
   SIX MONTHS WITH YOU
   FINAL INTERACTION SCRIPT
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const MEETING_DATE =
  "2028-10-26T12:00:00+08:00";

const RELATIONSHIP_START =
  "2026-03-26T00:00:00+08:00";


/* =========================================================
   ELEMENTS
========================================================= */

const enterBtn =
  document.getElementById("enterBtn");

const content =
  document.getElementById("content");

const musicBtn =
  document.getElementById("musicBtn");

const bgMusic =
  document.getElementById("bgMusic");

const missBtn =
  document.getElementById("missBtn");

const missCard =
  document.getElementById("missCard");

const letterBtn =
  document.getElementById("letterBtn");

const letterPaper =
  document.getElementById("letterPaper");

const secretMessage =
  document.getElementById("secretMessage");


/* =========================================================
   OPEN
========================================================= */

if (enterBtn && content) {

  enterBtn.addEventListener("click", () => {

    content.classList.add("show");

    setTimeout(() => {

      content.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 100);

  });

}


/* =========================================================
   MUSIC
========================================================= */

if (musicBtn && bgMusic) {

  musicBtn.addEventListener("click", async () => {

    if (bgMusic.paused) {

      try {

        await bgMusic.play();

        musicBtn.innerHTML = `
          <span class="music-icon">♫</span>
          <span class="music-label">Music ON</span>
        `;

      } catch (error) {

        musicBtn.innerHTML = `
          <span class="music-icon">♫</span>
          <span class="music-label">Add music.mp3</span>
        `;

      }

    } else {

      bgMusic.pause();

      musicBtn.innerHTML = `
        <span class="music-icon">♫</span>
        <span class="music-label">Music OFF</span>
      `;

    }

  });

}


/* =========================================================
   DAYS TOGETHER
========================================================= */

const daysTogether =
  document.getElementById("daysTogether");


function updateDaysTogether() {

  if (!daysTogether) {
    return;
  }

  const start =
    new Date(RELATIONSHIP_START);

  const now =
    new Date();

  const difference =
    now.getTime() -
    start.getTime();

  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  daysTogether.textContent =
    Math.max(0, days);

}


updateDaysTogether();

setInterval(
  updateDaysTogether,
  60 * 60 * 1000
);


<!-- SECRET NOTES -->

<section class="section secret-section">

  <div class="section-number">
    05
  </div>

  <div class="section-title reveal-on-scroll">

    <span>
      LITTLE SECRETS
    </span>

    <h2>
      Open one.
      <em>Any one.</em>
    </h2>

  </div>


  <div class="note-buttons reveal-on-scroll">

    <!-- WHEN I MISS YOU -->
    <button
      data-message="I don't only miss you when you're gone. Sometimes I miss you while we're still talking — when I wish the distance between us could disappear for just one night. I miss your voice in the quiet hours, the little things you tell me, and the feeling of falling asleep knowing you're still there. Maybe that's what missing someone really is — wanting their presence in moments that don't even need anyone else."
    >
      WHEN I MISS YOU
    </button>


    <!-- WHEN YOU FEEL SAD -->
    <button
      data-message="You don't have to make yourself okay for me. You don't have to hide the messy parts, or find the right words for everything you feel. If one day your heart feels too heavy, you can simply put it down beside me. I may not always know how to fix everything, but I will never ask you to carry it alone."
    >
      WHEN YOU FEEL SAD
    </button>


    <!-- WHEN YOU NEED ME -->
    <button
      data-message="You don't have to wonder whether you can call me. You don't have to wait for the perfect moment. If you need me, come to me. Even if it's late. Even if you have nothing to say. Even if all we do is stay on a call in silence. You never have to earn your way back to me. Just come home."
    >
      WHEN YOU NEED ME
    </button>


    <!-- WHEN YOU FEEL ALONE -->
    <button
      data-message="Sometimes I think it's strange how two people living under different skies can become so familiar to each other. Malaysia and Kazakhstan are far apart, but somehow your voice became part of my nights, and your little place in my life became something distance couldn't take away. So when you feel alone, remember this — somewhere in this world, there is someone who knows your voice, knows your little habits, and is still choosing you."
    >
      WHEN YOU FEEL ALONE
    </button>


    <!-- JUST BECAUSE -->
    <button
      data-message="I don't have a perfect reason for loving you. It wasn't one moment. It wasn't one photograph, one call, or one beautiful night. It happened quietly. Somewhere between “Do we know each other?” and all the nights that came after. You became familiar. Then important. Then someone I couldn't imagine my days without. And if I ever have to choose again, I don't want you to wonder where I stand. I am here. I chose you. And I am still choosing you."
    >
      JUST BECAUSE
    </button>

  </div>


  <div
    class="secret-message"
    id="secretMessage"
  >
    Choose one.
  </div>

</section>


/* =========================================================
   MISS ME
========================================================= */

if (
  missBtn &&
  missCard
) {

  missBtn.addEventListener(
    "click",
    () => {

      missCard.classList.toggle("show");

      if (
        missCard.classList.contains("show")
      ) {

        missBtn.textContent =
          "CLOSE";

      } else {

        missBtn.textContent =
          "OPEN THIS";

      }

    }
  );

}


/* =========================================================
   LETTER
========================================================= */

if (
  letterBtn &&
  letterPaper
) {

  letterBtn.addEventListener(
    "click",
    () => {

      letterPaper.classList.toggle(
        "show"
      );

      if (
        letterPaper.classList.contains("show")
      ) {

        letterBtn.textContent =
          "CLOSE LETTER";

      } else {

        letterBtn.textContent =
          "READ IT";

      }

    }
  );

}


/* =========================================================
   COUNTDOWN
========================================================= */

const daysElement =
  document.getElementById("days");

const hoursElement =
  document.getElementById("hours");

const minutesElement =
  document.getElementById("minutes");

const secondsElement =
  document.getElementById("seconds");


function updateCountdown() {

  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {
    return;
  }

  const target =
    new Date(
      MEETING_DATE
    ).getTime();

  const now =
    Date.now();

  let difference =
    target - now;


  if (difference <= 0) {

    daysElement.textContent =
      "0";

    hoursElement.textContent =
      "00";

    minutesElement.textContent =
      "00";

    secondsElement.textContent =
      "00";

    return;
  }


  const second =
    1000;

  const minute =
    second * 60;

  const hour =
    minute * 60;

  const day =
    hour * 24;


  const days =
    Math.floor(
      difference / day
    );

  difference %= day;


  const hours =
    Math.floor(
      difference / hour
    );

  difference %= hour;


  const minutes =
    Math.floor(
      difference / minute
    );

  difference %= minute;


  const seconds =
    Math.floor(
      difference / second
    );


  daysElement.textContent =
    days;

  hoursElement.textContent =
    String(hours)
    .padStart(2, "0");

  minutesElement.textContent =
    String(minutes)
    .padStart(2, "0");

  secondsElement.textContent =
    String(seconds)
    .padStart(2, "0");

}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal-on-scroll"
  );


if (
  "IntersectionObserver"
  in window
) {

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: .12,
        rootMargin:
          "0px 0px -40px 0px"
      }
    );


  revealElements.forEach(
    element => {
      observer.observe(element);
    }
  );

} else {

  revealElements.forEach(
    element => {
      element.classList.add(
        "visible"
      );
    }
  );

}


/* =========================================================
   STARFIELD
========================================================= */

const canvas =
  document.getElementById("stars");


if (canvas) {

  const ctx =
    canvas.getContext("2d");

  let stars = [];

  let width =
    window.innerWidth;

  let height =
    window.innerHeight;


  function createStars() {

    const amount =
      Math.min(
        230,
        Math.max(
          90,
          Math.floor(
            width / 5
          )
        )
      );


    stars =
      Array.from(
        {
          length: amount
        },
        () => ({

          x:
            Math.random() * width,

          y:
            Math.random() * height,

          radius:
            Math.random() * 1.2 + .12,

          opacity:
            Math.random() * .65 + .12,

          speed:
            Math.random() * .18 + .025,

          phase:
            Math.random() *
            Math.PI *
            2,

          twinkle:
            Math.random() *
            .018 +
            .004

        })
      );

  }


  function resizeCanvas() {

    const ratio =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );


    width =
      window.innerWidth;

    height =
      window.innerHeight;


    canvas.width =
      width * ratio;

    canvas.height =
      height * ratio;


    canvas.style.width =
      width + "px";

    canvas.style.height =
      height + "px";


    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );


    createStars();

  }


  function drawStars(
    time = 0
  ) {

    ctx.clearRect(
      0,
      0,
      width,
      height
    );


    stars.forEach(
      star => {

        star.y -=
          star.speed;


        if (
          star.y < -5
        ) {

          star.y =
            height + 5;

          star.x =
            Math.random() * width;

        }


        const twinkle =
          Math.sin(
            time *
            star.twinkle +
            star.phase
          );


        const opacity =
          Math.max(
            .04,
            star.opacity +
            twinkle * .17
          );


        ctx.beginPath();

        ctx.globalAlpha =
          opacity;

        ctx.fillStyle =
          "#e8dadd";

        ctx.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();

      }
    );


    ctx.globalAlpha =
      1;

    requestAnimationFrame(
      drawStars
    );

  }


  window.addEventListener(
    "resize",
    resizeCanvas
  );


  resizeCanvas();

  requestAnimationFrame(
    drawStars
  );

}


/* =========================================================
   AMBIENT PARTICLES
========================================================= */

const particleContainer =
  document.getElementById(
    "ambientParticles"
  );


function createAmbientParticles() {

  if (!particleContainer) {
    return;
  }


  const amount =
    window.innerWidth < 650
      ? 14
      : 30;


  particleContainer.innerHTML =
    "";


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const particle =
      document.createElement(
        "span"
      );


    particle.className =
      "ambient-particle";


    particle.style.left =
      `${Math.random() * 100}%`;

    particle.style.bottom =
      `${-10 - Math.random() * 30}%`;


    particle.style.setProperty(
      "--duration",
      `${10 + Math.random() * 18}s`
    );


    particle.style.setProperty(
      "--opacity",
      .15 +
      Math.random() * .45
    );


    particle.style.setProperty(
      "--drift",
      `${(Math.random() - .5) * 100}px`
    );


    particle.style.animationDelay =
      `${Math.random() * -20}s`;


    particleContainer.appendChild(
      particle
    );

  }

}


createAmbientParticles();


window.addEventListener(
  "resize",
  createAmbientParticles
);


/* =========================================================
   MOUSE PARALLAX
========================================================= */

let mouseX =
  0;

let mouseY =
  0;

let currentX =
  0;

let currentY =
  0;


window.addEventListener(
  "mousemove",
  event => {

    mouseX =
      event.clientX /
      window.innerWidth -
      .5;

    mouseY =
      event.clientY /
      window.innerHeight -
      .5;

  }
);


function animateParallax() {

  currentX +=
    (mouseX - currentX) *
    .035;

  currentY +=
    (mouseY - currentY) *
    .035;


  document.documentElement.style.setProperty(
    "--mouse-x",
    currentX
  );

  document.documentElement.style.setProperty(
    "--mouse-y",
    currentY
  );


  requestAnimationFrame(
    animateParallax
  );

}


animateParallax();


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }


    if (
      missCard &&
      missCard.classList.contains("show")
    ) {

      missCard.classList.remove(
        "show"
      );

      if (missBtn) {

        missBtn.textContent =
          "OPEN THIS";

      }

    }


    if (
      letterPaper &&
      letterPaper.classList.contains("show")
    ) {

      letterPaper.classList.remove(
        "show"
      );

      if (letterBtn) {

        letterBtn.textContent =
          "READ IT";

      }

    }

  }
);

