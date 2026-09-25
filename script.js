// ======================================================
// SIX MONTHS WITH ULYA
// MAIN JAVASCRIPT
// ======================================================


// ======================================================
// EASY SETTINGS
// ======================================================

// Put your real meeting date here.
//
// Malaysia timezone = +08:00
//
// Example:
// "2027-03-25T12:00:00+08:00"

const MEETING_DATE =
    "2027-03-25T12:00:00+08:00";


// ======================================================
// BASIC ELEMENTS
// ======================================================

const enterBtn =
    document.getElementById("enterBtn");

const content =
    document.getElementById("content");

const musicBtn =
    document.getElementById("musicBtn");

const bgMusic =
    document.getElementById("bgMusic");


// ======================================================
// OPEN THE WEBSITE
// ======================================================

if (enterBtn && content) {

    enterBtn.addEventListener("click", () => {

        content.classList.add("show");

        document.body.classList.remove("locked");

        setTimeout(() => {

            content.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    });

}


// ======================================================
// BACKGROUND MUSIC
// ======================================================

if (musicBtn && bgMusic) {

    musicBtn.addEventListener(
        "click",
        async () => {

            if (bgMusic.paused) {

                try {

                    await bgMusic.play();

                    musicBtn.innerHTML =
                        "♫ <span>Music ON</span>";

                } catch (error) {

                    musicBtn.innerHTML =
                        "♫ <span>Add music.mp3</span>";

                }

            } else {

                bgMusic.pause();

                musicBtn.innerHTML =
                    "♫ <span>Music OFF</span>";

            }

        }
    );

}


// ======================================================
// SECRET MESSAGES
// ======================================================

const secret =
    document.getElementById("secretMessage");

const secretButtons =
    document.querySelectorAll(
        ".note-buttons button"
    );


if (secret) {

    secretButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                secretButtons.forEach(
                    otherButton => {

                        otherButton.classList.remove(
                            "active"
                        );

                    }
                );

                button.classList.add("active");

                secret.textContent =
                    button.dataset.message;

            }
        );

    });

}


// ======================================================
// "OPEN THIS WHEN YOU MISS ME"
// ======================================================

const missBtn =
    document.getElementById("missBtn");

const missCard =
    document.getElementById("missCard");


if (missBtn && missCard) {

    missBtn.addEventListener(
        "click",
        () => {

            missCard.classList.toggle("show");

        }
    );

}


// ======================================================
// LETTER
// ======================================================

const letterBtn =
    document.getElementById("letterBtn");

const letterPaper =
    document.getElementById("letterPaper");


if (letterBtn && letterPaper) {

    letterBtn.addEventListener(
        "click",
        () => {

            letterPaper.classList.toggle(
                "show"
            );

        }
    );

}


// ======================================================
// COUNTDOWN
// ======================================================

const countdownElements = {

    days:
        document.getElementById("days"),

    hours:
        document.getElementById("hours"),

    minutes:
        document.getElementById("minutes"),

    seconds:
        document.getElementById("seconds")

};


function updateCountdown() {

    const target =
        new Date(MEETING_DATE).getTime();

    const now =
        Date.now();

    let difference =
        target - now;


    // Meeting date has arrived

    if (difference <= 0) {

        if (countdownElements.days)
            countdownElements.days.textContent = "0";

        if (countdownElements.hours)
            countdownElements.hours.textContent = "0";

        if (countdownElements.minutes)
            countdownElements.minutes.textContent = "0";

        if (countdownElements.seconds)
            countdownElements.seconds.textContent = "0";

        return;

    }


    const SECOND =
        1000;

    const MINUTE =
        SECOND * 60;

    const HOUR =
        MINUTE * 60;

    const DAY =
        HOUR * 24;


    const days =
        Math.floor(
            difference / DAY
        );

    difference %= DAY;


    const hours =
        Math.floor(
            difference / HOUR
        );

    difference %= HOUR;


    const minutes =
        Math.floor(
            difference / MINUTE
        );

    difference %= MINUTE;


    const seconds =
        Math.floor(
            difference / SECOND
        );


    if (countdownElements.days)
        countdownElements.days.textContent =
            days;

    if (countdownElements.hours)
        countdownElements.hours.textContent =
            hours;

    if (countdownElements.minutes)
        countdownElements.minutes.textContent =
            minutes;

    if (countdownElements.seconds)
        countdownElements.seconds.textContent =
            seconds;

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


// ======================================================
// SCROLL REVEAL
// ======================================================

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

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            observer.observe(element);

        }
    );

} else {

    // Fallback for older browsers

    revealElements.forEach(
        element => {

            element.classList.add(
                "visible"
            );

        }
    );

}


// ======================================================
// STAR / PARTICLE BACKGROUND
// ======================================================

const canvas =
    document.getElementById("stars");


if (canvas) {

    const ctx =
        canvas.getContext("2d");


    let stars = [];


    function resizeCanvas() {

        const width =
            window.innerWidth;

        const height =
            window.innerHeight;

        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


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


        // Fewer particles on small screens

        const amount =
            width < 600
                ? 90
                : Math.min(
                    170,
                    Math.floor(width / 7)
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
                        Math.random() * 1.25 + .15,

                    opacity:
                        Math.random() * .65 + .15,

                    speed:
                        Math.random() * .12 + .025,

                    twinkle:
                        Math.random() * .025 + .005,

                    phase:
                        Math.random() * Math.PI * 2

                })
            );

    }


    function drawStars() {

        const width =
            window.innerWidth;

        const height =
            window.innerHeight;


        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        const time =
            Date.now() * .001;


        stars.forEach(star => {

            // Slowly move upward

            star.y -= star.speed;


            // Wrap around

            if (star.y < -3) {

                star.y =
                    height + 3;

                star.x =
                    Math.random() * width;

            }


            // Gentle twinkle

            const twinkle =
                Math.sin(
                    time * star.twinkle * 10 +
                    star.phase
                );


            const alpha =
                Math.max(
                    .05,
                    star.opacity +
                    twinkle * .12
                );


            ctx.globalAlpha =
                alpha;


            ctx.fillStyle =
                "#d9c8ca";


            ctx.beginPath();

            ctx.arc(
                star.x,
                star.y,
                star.radius,
                0,
                Math.PI * 2
            );

            ctx.fill();

        });


        ctx.globalAlpha = 1;


        requestAnimationFrame(
            drawStars
        );

    }


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    resizeCanvas();

    drawStars();

}


// ======================================================
// SMALL PARALLAX EFFECT
// ======================================================
//
// Gives the hero a very subtle movement
// when the mouse moves.
// Disabled on touch devices.
//

if (
    window.matchMedia(
        "(hover: hover)"
    ).matches
) {

    const hero =
        document.querySelector(".hero");


    if (hero) {

        window.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX /
                        window.innerWidth -
                        .5) * 2;

                const y =
                    (event.clientY /
                        window.innerHeight -
                        .5) * 2;


                hero.style.setProperty(
                    "--mouse-x",
                    `${x * 6}px`
                );


                hero.style.setProperty(
                    "--mouse-y",
                    `${y * 6}px`
                );

            }
        );

    }

}


// ======================================================
// PAGE READY
// ======================================================

document.body.classList.remove(
    "locked"
);
