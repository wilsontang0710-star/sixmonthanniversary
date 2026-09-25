/* =========================================================
   SIX MONTHS WITH YOU
   GOTHIC ROMANCE / DARK CRIMSON
========================================================= */

@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap');


/* =========================================================
   VARIABLES
========================================================= */

:root {

  --black: #050405;
  --black-2: #080608;
  --black-3: #10090c;

  --red: #8f1027;
  --red-bright: #c22643;
  --red-soft: #6f2635;
  --red-dark: #350912;

  --wine: #23070d;
  --burgundy: #4c0d19;

  --white: #f0e9e5;
  --white-soft: #cfc4c2;
  --muted: #827577;

  --line: rgba(186, 46, 69, .25);
  --line-soft: rgba(255,255,255,.09);

  --serif: "Bodoni Moda", "Times New Roman", serif;
  --display: "Cormorant Garamond", Georgia, serif;
  --sans: "Inter", Arial, sans-serif;

}


/* =========================================================
   RESET
========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {

  background:
    radial-gradient(
      circle at 50% 40%,
      #17090e 0%,
      #090507 42%,
      #040304 100%
    );

  color: var(--white);

  font-family: var(--sans);

  overflow-x: hidden;

  min-height: 100vh;
}

button,
a {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}


/* =========================================================
   STAR CANVAS
========================================================= */

#stars {

  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;

  z-index: 1;

  opacity: .75;
}


/* =========================================================
   BACKGROUND
========================================================= */

.background {

  position: fixed;

  inset: 0;

  overflow: hidden;

  pointer-events: none;

  z-index: 0;

  background:
    radial-gradient(
      ellipse at 50% 48%,
      rgba(89, 8, 25, .22),
      transparent 42%
    ),
    linear-gradient(
      180deg,
      #030304 0%,
      #090507 45%,
      #040304 100%
    );
}


/* large red nebula */

.nebula {

  position: absolute;

  border-radius: 50%;

  filter: blur(80px);

  opacity: .45;

  mix-blend-mode: screen;
}

.nebula-1 {

  width: 800px;
  height: 500px;

  top: 20%;
  left: 20%;

  background:
    radial-gradient(
      ellipse,
      rgba(119, 9, 31, .45),
      transparent 70%
    );

  transform:
    translate(
      calc(var(--mouse-x, 0) * -15px),
      calc(var(--mouse-y, 0) * -10px)
    );
}

.nebula-2 {

  width: 600px;
  height: 700px;

  top: 10%;
  right: 5%;

  background:
    radial-gradient(
      ellipse,
      rgba(82, 8, 27, .28),
      transparent 70%
    );
}

.nebula-3 {

  width: 900px;
  height: 500px;

  bottom: -150px;
  left: -150px;

  background:
    radial-gradient(
      ellipse,
      rgba(91, 8, 25, .25),
      transparent 70%
    );
}


/* red light pools */

.red-glow {

  position: absolute;

  border-radius: 50%;

  filter: blur(100px);

  pointer-events: none;
}

.red-glow-1 {

  width: 450px;
  height: 450px;

  left: 50%;
  top: 35%;

  transform: translate(-50%, -50%);

  background:
    rgba(125, 8, 32, .16);
}

.red-glow-2 {

  width: 300px;
  height: 300px;

  right: -100px;
  bottom: 10%;

  background:
    rgba(111, 9, 29, .12);
}


/* =========================================================
   GRAIN
========================================================= */

.grain {

  position: fixed;

  inset: -50%;

  width: 200%;
  height: 200%;

  pointer-events: none;

  z-index: 50;

  opacity: .055;

  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");

  animation: grainMove .25s steps(2) infinite;
}

@keyframes grainMove {

  0% {
    transform: translate(0,0);
  }

  25% {
    transform: translate(-2%,1%);
  }

  50% {
    transform: translate(1%,-2%);
  }

  75% {
    transform: translate(2%,2%);
  }

  100% {
    transform: translate(-1%,-1%);
  }
}


/* =========================================================
   VIGNETTE
========================================================= */

.vignette {

  position: fixed;

  inset: 0;

  pointer-events: none;

  z-index: 40;

  background:
    radial-gradient(
      ellipse at center,
      transparent 38%,
      rgba(0,0,0,.28) 68%,
      rgba(0,0,0,.78) 100%
    );
}


/* =========================================================
   MUSIC
========================================================= */

.music-button {

  position: fixed;

  top: 18px;
  right: 18px;

  z-index: 100;

  display: flex;

  align-items: center;

  gap: 9px;

  padding: 11px 17px;

  color: var(--white);

  background:
    rgba(7,5,6,.72);

  border: 1px solid rgba(177, 39, 61, .55);

  backdrop-filter: blur(12px);

  text-transform: uppercase;

  letter-spacing: 4px;

  font-size: 9px;

  transition: .35s ease;
}

.music-button:hover {

  border-color: var(--red-bright);

  background:
    rgba(68,8,20,.42);

  box-shadow:
    0 0 25px rgba(147, 16, 42, .16);
}

.music-icon {

  font-size: 13px;

  color: #e4cfd1;
}

.music-label {
  white-space: nowrap;
}


/* =========================================================
   HERO
========================================================= */

.hero {

  position: relative;

  min-height: 100vh;

  width: 100%;

  overflow: hidden;

  display: flex;

  justify-content: center;

  align-items: center;

  isolation: isolate;

  background:
    radial-gradient(
      ellipse at 50% 48%,
      rgba(62, 6, 19, .45),
      transparent 48%
    );
}


/* inner red atmospheric glow */

.hero::before {

  content: "";

  position: absolute;

  width: 75vw;
  height: 70vh;

  left: 50%;
  top: 48%;

  transform: translate(-50%,-50%);

  background:
    radial-gradient(
      ellipse,
      rgba(102, 7, 27, .28) 0%,
      rgba(74, 5, 20, .12) 35%,
      transparent 72%
    );

  filter: blur(20px);

  z-index: -1;
}


/* =========================================================
   HERO BORDERS
========================================================= */

.hero-border {

  position: absolute;

  pointer-events: none;

  z-index: 10;
}

.border-main {

  inset: 24px 30px;

  border: 1px solid rgba(171, 35, 55, .28);
}

.border-inner {

  inset: 39px 46px;

  border: 1px solid rgba(255,255,255,.045);
}


/* =========================================================
   CORNERS
========================================================= */

.corner {

  position: absolute;

  width: 45px;
  height: 45px;

  z-index: 20;
}

.corner::before,
.corner::after {

  content: "";

  position: absolute;

  background:
    rgba(190, 44, 65, .6);
}

.corner::before {

  width: 28px;
  height: 1px;
}

.corner::after {

  width: 1px;
  height: 28px;
}

.corner span {

  position: absolute;

  width: 5px;
  height: 5px;

  background: var(--red-bright);

  transform: rotate(45deg);

  box-shadow:
    0 0 12px rgba(194,38,67,.65);
}

.corner i {

  position: absolute;

  width: 18px;
  height: 18px;

  border: 1px solid rgba(181,38,59,.25);

  transform: rotate(45deg);
}

.corner-tl {

  top: 31px;
  left: 38px;
}

.corner-tl::before {
  top: 0;
  left: 0;
}

.corner-tl::after {
  top: 0;
  left: 0;
}

.corner-tl span {
  top: -2px;
  left: -2px;
}

.corner-tl i {
  top: 8px;
  left: 8px;
}

.corner-tr {

  top: 31px;
  right: 38px;
  transform: rotate(90deg);
}

.corner-bl {

  bottom: 31px;
  left: 38px;
  transform: rotate(-90deg);
}

.corner-br {

  bottom: 31px;
  right: 38px;
  transform: rotate(180deg);
}


/* =========================================================
   MOON
========================================================= */

.moon-system {

  position: absolute;

  left: 50%;
  top: 9%;

  width: 130px;
  height: 130px;

  transform: translateX(-50%);

  z-index: 5;

  animation:
    moonFloat 7s ease-in-out infinite;
}

@keyframes moonFloat {

  0%,100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-7px);
  }
}

.moon-halo {

  position: absolute;

  inset: -45px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(228, 198, 201, .18),
      rgba(129, 20, 42, .08) 45%,
      transparent 70%
    );

  filter: blur(9px);
}

.moon {

  position: absolute;

  width: 96px;
  height: 96px;

  top: 17px;
  left: 17px;

  border-radius: 50%;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 35% 35%,
      #fffaf5,
      #e3d5d3 58%,
      #bba7a8 100%
    );

  box-shadow:
    0 0 20px rgba(246, 229, 226, .25),
    0 0 60px rgba(130, 30, 48, .12);
}

.moon-shadow {

  position: absolute;

  width: 98px;
  height: 98px;

  top: -8px;
  left: 29px;

  border-radius: 50%;

  background:
    #070507;
}

.moon-crater {

  position: absolute;

  border-radius: 50%;

  background:
    rgba(104,84,85,.12);
}

.crater-1 {

  width: 13px;
  height: 13px;

  left: 23px;
  top: 50px;
}

.crater-2 {

  width: 8px;
  height: 8px;

  left: 43px;
  top: 29px;
}

.crater-3 {

  width: 6px;
  height: 6px;

  left: 17px;
  top: 31px;
}


/* =========================================================
   ORBITS
========================================================= */

.orbit {

  position: absolute;

  left: 50%;
  top: 51%;

  border: 1px solid rgba(142, 28, 48, .28);

  border-radius: 50%;

  pointer-events: none;

  transform:
    translate(-50%,-50%)
    rotate(var(--rotation));

  z-index: 2;
}

.orbit-1 {

  width: 1050px;
  height: 360px;

  --rotation: -9deg;
}

.orbit-2 {

  width: 900px;
  height: 510px;

  --rotation: 18deg;
}

.orbit-3 {

  width: 1150px;
  height: 270px;

  --rotation: 6deg;

  border-color:
    rgba(116, 25, 44, .20);
}

.orbit-4 {

  width: 680px;
  height: 680px;

  --rotation: 0deg;

  border-color:
    rgba(112, 25, 44, .14);
}


/* orbit dots */

.orbit-dot {

  position: absolute;

  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #c14a5e;

  box-shadow:
    0 0 12px rgba(194,38,67,.8);

  z-index: 3;
}

.orbit-dot-1 {
  top: 31%;
  left: 18%;
}

.orbit-dot-2 {
  top: 69%;
  right: 17%;
}

.orbit-dot-3 {
  top: 23%;
  right: 31%;
}


/* =========================================================
   FLOWERS
========================================================= */

.flower-decoration {

  position: absolute;

  width: 190px;
  height: 360px;

  z-index: 7;

  opacity: .88;

  filter:
    drop-shadow(
      0 0 12px rgba(107, 9, 28, .18)
    );
}

.flower-left {

  left: -15px;
  bottom: 6%;

  transform:
    rotate(-8deg)
    scale(.95);
}

.flower-right {

  right: -15px;
  top: 27%;

  transform:
    rotate(185deg)
    scale(.95);
}


/* stem */

.stem {

  position: absolute;

  width: 2px;
  height: 290px;

  left: 80px;
  top: 50px;

  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(86,23,34,.85),
      rgba(111,23,39,.5)
    );

  transform:
    rotate(15deg);

  transform-origin: bottom;
}


/* leaves */

.leaf {

  position: absolute;

  width: 47px;
  height: 23px;

  border-radius: 100% 0 100% 0;

  background:
    linear-gradient(
      135deg,
      #260b12,
      #681526
    );

  border:
    1px solid rgba(151,35,57,.4);

  opacity: .8;
}

.leaf-a {

  left: 36px;
  top: 190px;

  transform: rotate(-27deg);
}

.leaf-b {

  left: 77px;
  top: 245px;

  transform: rotate(22deg);
}

.leaf-c {

  left: 48px;
  top: 130px;

  transform: rotate(-35deg);
}


/* rose */

.rose {

  position: absolute;

  width: 90px;
  height: 90px;

  left: 35px;
  top: 15px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at 50% 50%,
      #9d1d39 0%,
      #741027 34%,
      #3b0915 68%,
      #16050a 100%
    );

  box-shadow:
    0 0 22px rgba(132,17,41,.28);
}

.rose span {

  position: absolute;

  border-radius: 50%;

  border:
    1px solid rgba(198,52,77,.42);

  background:
    radial-gradient(
      circle,
      rgba(167,30,55,.55),
      rgba(52,7,18,.6)
    );
}

.rose span:nth-child(1) {

  width: 55px;
  height: 35px;

  left: 17px;
  top: 26px;

  transform: rotate(12deg);
}

.rose span:nth-child(2) {

  width: 42px;
  height: 58px;

  left: 24px;
  top: 14px;

  transform: rotate(-25deg);
}

.rose span:nth-child(3) {

  width: 40px;
  height: 60px;

  left: 24px;
  top: 17px;

  transform: rotate(28deg);
}

.rose span:nth-child(4) {

  width: 58px;
  height: 32px;

  left: 15px;
  top: 34px;

  transform: rotate(-30deg);
}

.rose span:nth-child(5) {

  width: 25px;
  height: 25px;

  left: 33px;
  top: 33px;

  background:
    #300711;
}


/* =========================================================
   BUTTERFLIES
========================================================= */

.butterfly {

  position: absolute;

  width: 72px;
  height: 58px;

  z-index: 8;

  opacity: .58;

  filter:
    drop-shadow(
      0 0 10px rgba(161,25,52,.18)
    );

  animation:
    butterflyFloat 8s ease-in-out infinite;
}

@keyframes butterflyFloat {

  0%,100% {
    transform:
      translate3d(0,0,0)
      rotate(-3deg);
  }

  50% {
    transform:
      translate3d(9px,-16px,0)
      rotate(4deg);
  }
}

.butterfly-1 {

  left: 14%;
  top: 30%;
}

.butterfly-2 {

  right: 13%;
  bottom: 25%;

  transform: scale(.75);

  animation-delay: -3s;
}

.butterfly-3 {

  left: 25%;
  bottom: 19%;

  transform: scale(.5);

  animation-delay: -5s;
}

.butterfly .wing {

  position: absolute;

  top: 8px;

  width: 34px;
  height: 45px;

  background:
    radial-gradient(
      circle at 60% 35%,
      rgba(177,37,63,.6),
      rgba(66,8,22,.65) 65%,
      rgba(16,4,9,.8)
    );

  border:
    1px solid rgba(173,38,61,.48);

  box-shadow:
    inset 0 0 15px rgba(198,43,69,.12);
}

.butterfly .wing-left {

  left: 1px;

  border-radius:
    80% 20% 70% 30%;

  transform:
    rotate(18deg);
}

.butterfly .wing-right {

  right: 1px;

  border-radius:
    20% 80% 30% 70%;

  transform:
    rotate(-18deg);
}

.butterfly .body {

  position: absolute;

  width: 5px;
  height: 45px;

  left: 34px;
  top: 9px;

  border-radius: 50%;

  background:
    #18070c;

  box-shadow:
    0 0 5px rgba(209,55,77,.3);
}

.antenna {

  position: absolute;

  width: 20px;
  height: 15px;

  border-top:
    1px solid rgba(176,38,60,.55);

  top: 1px;
}

.antenna-left {

  left: 18px;

  transform:
    rotate(24deg);
}

.antenna-right {

  right: 18px;

  transform:
    rotate(-24deg);
}


/* =========================================================
   DECORATIVE STARS
========================================================= */

.decor-star {

  position: absolute;

  z-index: 6;

  color:
    rgba(229,188,192,.78);

  text-shadow:
    0 0 15px rgba(213,63,87,.45);

  animation:
    starPulse 4s ease-in-out infinite;
}

.star-a {
  top: 19%;
  left: 46%;
  font-size: 12px;
}

.star-b {
  top: 23%;
  right: 25%;
  font-size: 16px;
  animation-delay: -1s;
}

.star-c {
  top: 43%;
  left: 19%;
  font-size: 9px;
}

.star-d {
  top: 55%;
  right: 17%;
  font-size: 12px;
  animation-delay: -2s;
}

.star-e {
  bottom: 21%;
  left: 18%;
  font-size: 13px;
}

.star-f {
  bottom: 28%;
  right: 27%;
  font-size: 9px;
}

@keyframes starPulse {

  0%,100% {
    opacity: .35;
    transform: scale(.85);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}


/* =========================================================
   HERO CONTENT
========================================================= */

.hero-content {

  position: relative;

  z-index: 15;

  width: min(900px, 90vw);

  text-align: center;

  transform:
    translate3d(
      calc(var(--mouse-x, 0) * 7px),
      calc(var(--mouse-y, 0) * 5px),
      0
    );

  transition:
    transform .25s ease-out;
}

.title-line {

  width: 110px;
  height: 1px;

  margin:
    0 auto 17px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(194,38,67,.8),
      transparent
    );
}

.eyebrow {

  font-size: 11px;

  letter-spacing: 8px;

  color:
    rgba(227,211,209,.75);

  margin-bottom: 18px;

  text-transform: uppercase;
}


/* =========================================================
   HERO TITLE
========================================================= */

.hero-title {

  font-family: var(--serif);

  font-weight: 400;

  font-size:
    clamp(78px, 10.2vw, 164px);

  line-height: .78;

  letter-spacing:
    -6px;

  color:
    #f1e9e6;

  text-shadow:
    0 0 40px rgba(255,240,235,.06),
    0 20px 80px rgba(92,6,25,.25);

  margin: 0;
}

.hero-title span {

  display: block;
}

.hero-title em {

  display: block;

  margin-top: 12px;

  color:
    #b91f3b;

  font-family:
    var(--display);

  font-size:
    .66em;

  font-style: italic;

  letter-spacing:
    -2px;

  text-shadow:
    0 0 35px rgba(176,24,54,.28);
}


/* =========================================================
   DATES
========================================================= */

.date-line {

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 16px;

  margin-top: 35px;

  color:
    rgba(208,193,192,.72);

  font-size: 9px;

  letter-spacing: 4px;
}

.date-line .line {

  width: 58px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(175,44,63,.6)
    );
}

.date-line .line:last-child {

  background:
    linear-gradient(
      90deg,
      rgba(175,44,63,.6),
      transparent
    );
}

.date-line .diamond {

  font-size: 5px;

  color:
    rgba(197,42,65,.8);
}


/* =========================================================
   DESCRIPTION
========================================================= */

.hero-description {

  margin-top: 24px;

  color:
    rgba(176,159,160,.62);

  font-family:
    var(--display);

  font-size: 17px;

  line-height: 1.5;

  letter-spacing: 1px;
}


/* =========================================================
   OPEN BUTTON
========================================================= */

.open-button {

  position: relative;

  margin-top: 36px;

  width: 190px;
  height: 60px;

  background:
    rgba(12,5,8,.48);

  border:
    1px solid rgba(183,42,63,.65);

  color:
    #e9dede;

  transition:
    .4s ease;

  backdrop-filter:
    blur(5px);
}

.open-button:hover {

  background:
    rgba(101,9,27,.18);

  border-color:
    rgba(220,57,82,.9);

  box-shadow:
    0 0 35px rgba(130,12,35,.22);

  transform:
    translateY(-3px);
}

.open-text {

  font-size: 10px;

  letter-spacing: 6px;

  margin-left: 6px;
}

.open-arrow {

  position: absolute;

  right: 23px;

  bottom: 16px;

  color:
    rgba(199,40,65,.8);

  font-size: 12px;
}


/* button corner marks */

.open-corner {

  position: absolute;

  width: 9px;
  height: 9px;
}

.open-corner::before,
.open-corner::after {

  content: "";

  position: absolute;

  background:
    var(--red-bright);
}

.open-corner::before {

  width: 15px;
  height: 1px;
}

.open-corner::after {

  width: 1px;
  height: 15px;
}

.open-corner-tl {
  top: -5px;
  left: -5px;
}

.open-corner-tr {
  top: -5px;
  right: -5px;
  transform: rotate(90deg);
}

.open-corner-bl {
  bottom: -5px;
  left: -5px;
  transform: rotate(-90deg);
}

.open-corner-br {
  bottom: -5px;
  right: -5px;
  transform: rotate(180deg);
}


/* =========================================================
   HERO BOTTOM
========================================================= */

.hero-bottom {

  position: absolute;

  bottom: 28px;

  left: 50%;

  transform:
    translateX(-50%);

  z-index: 20;

  display: flex;

  align-items: center;

  gap: 14px;

  white-space: nowrap;

  color:
    rgba(123,108,110,.65);

  font-size: 7px;

  letter-spacing: 5px;
}

.bottom-line {

  width: 55px;

  height: 1px;

  background:
    rgba(121,28,45,.35);
}


/* =========================================================
   REVEAL
========================================================= */

.reveal {

  opacity: 0;

  transform:
    translateY(18px);

  animation:
    revealHero 1.1s cubic-bezier(.2,.7,.2,1) forwards;
}

.reveal-delay-1 {
  animation-delay: .15s;
}

.reveal-delay-2 {
  animation-delay: .35s;
}

.reveal-delay-3 {
  animation-delay: .55s;
}

@keyframes revealHero {

  to {

    opacity: 1;

    transform:
      translateY(0);
  }
}


/* =========================================================
   CONTENT
========================================================= */

.hidden-content {

  display: none;
}

.hidden-content.show {

  display: block;
}


/* =========================================================
   SECTIONS
========================================================= */

.section {

  position: relative;

  width: min(1100px, 88vw);

  margin: 0 auto;

  padding:
    150px 0;
}

.section-number {

  position: absolute;

  left: 0;
  top: 90px;

  font-family: var(--serif);

  font-size: 12px;

  letter-spacing: 3px;

  color:
    rgba(151,39,58,.7);
}

.section-number::after {

  content: "";

  display: block;

  width: 35px;

  height: 1px;

  margin-top: 12px;

  background:
    rgba(150,34,54,.45);
}

.section-heading {

  margin-left: 75px;

  margin-bottom: 60px;
}

.small-heading {

  display: block;

  margin-bottom: 16px;

  color:
    rgba(171,44,63,.85);

  font-size: 9px;

  letter-spacing: 5px;

  text-transform: uppercase;
}

.section-heading h2,
.miss-content h2,
.letter-content h2,
.countdown-content h2 {

  font-family: var(--serif);

  font-weight: 400;

  font-size:
    clamp(46px, 6vw, 82px);

  line-height: .95;

  letter-spacing: -2px;

  color:
    var(--white);
}

.section-heading h2 em,
.miss-content h2 em,
.letter-content h2 em,
.countdown-content h2 em {

  color:
    #a91c37;

  font-family:
    var(--display);

  font-style: italic;
}


/* =========================================================
   INTRO
========================================================= */

.intro-section {

  display: grid;

  grid-template-columns:
    1fr 1.3fr;

  gap: 80px;

  align-items: center;

  border-bottom:
    1px solid rgba(165,36,57,.15);
}

.intro-section .section-heading {

  margin-left: 0;

  margin-bottom: 0;
}

.intro-text {

  max-width: 570px;

  color:
    rgba(188,174,174,.74);

  font-family:
    var(--display);

  font-size: 21px;

  line-height: 1.6;
}

.intro-text p + p {

  margin-top: 18px;
}

.intro-text .accent-text {

  margin-top: 35px;

  color:
    #b52a45;

  font-family:
    var(--serif);

  font-size: 27px;

  font-style: italic;
}


/* =========================================================
   TIMELINE
========================================================= */

.timeline-section {

  padding-bottom: 180px;
}

.timeline {

  position: relative;

  margin-left: 75px;

  padding-top: 20px;
}

.timeline-line {

  position: absolute;

  left: 7px;
  top: 20px;
  bottom: 0;

  width: 1px;

  background:
    linear-gradient(
      to bottom,
      rgba(163,35,55,.55),
      rgba(163,35,55,.12),
      transparent
    );
}

.timeline-item {

  position: relative;

  display: grid;

  grid-template-columns:
    130px 1fr;

  gap: 40px;

  padding-bottom: 70px;
}

.timeline-dot {

  position: absolute;

  left: 3px;
  top: 4px;

  width: 9px;
  height: 9px;

  border-radius: 50%;

  background:
    #7e1028;

  border:
    1px solid rgba(213,62,87,.8);

  box-shadow:
    0 0 16px rgba(161,23,49,.6);
}

.timeline-date {

  padding-left: 35px;

  padding-top: 1px;

  color:
    rgba(150,131,132,.62);

  font-size: 8px;

  letter-spacing: 3px;
}

.timeline-card {

  padding:
    0 0 35px;

  border-bottom:
    1px solid rgba(161,35,55,.12);
}

.timeline-card span {

  color:
    rgba(171,42,62,.75);

  font-size: 8px;

  letter-spacing: 4px;
}

.timeline-card h3 {

  margin-top: 12px;

  font-family:
    var(--serif);

  font-size: 35px;

  font-weight: 400;
}

.timeline-card p {

  margin-top: 10px;

  max-width: 500px;

  color:
    rgba(169,153,154,.7);

  font-family:
    var(--display);

  font-size: 18px;

  line-height: 1.5;
}

.final-card {

  border-color:
    rgba(164,36,58,.35);
}


/* =========================================================
   MEMORIES
========================================================= */

.memory-grid {

  margin-left: 75px;

  display: grid;

  grid-template-columns:
    1.2fr .8fr;

  gap: 22px;
}

.memory-card {

  position: relative;

  overflow: hidden;

  border:
    1px solid rgba(171,39,58,.2);

  background:
    rgba(19,7,10,.4);

  transition:
    transform .5s ease,
    border-color .5s ease;
}

.memory-card:hover {

  transform:
    translateY(-6px);

  border-color:
    rgba(183,44,65,.5);
}

.memory-large {

  grid-row:
    span 2;
}

.memory-wide {

  grid-column:
    span 2;
}

.photo-placeholder {

  min-height: 300px;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;

  gap: 10px;

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(107,10,31,.24),
      rgba(9,5,7,.8) 70%
    );

  color:
    rgba(168,142,145,.45);

  font-size: 9px;

  letter-spacing: 5px;
}

.memory-large .photo-placeholder {

  min-height: 630px;
}

.memory-wide .photo-placeholder {

  min-height: 350px;
}

.photo-placeholder small {

  font-size: 8px;

  color:
    rgba(151,34,53,.7);

  letter-spacing: 3px;
}

.memory-caption {

  display: flex;

  gap: 15px;

  padding: 17px 19px;

  border-top:
    1px solid rgba(172,39,58,.13);
}

.memory-caption span {

  color:
    #9f1b37;

  font-size: 8px;

  letter-spacing: 2px;
}

.memory-caption p {

  color:
    rgba(177,161,162,.65);

  font-family:
    var(--display);

  font-size: 16px;
}


/* =========================================================
   SONGS
========================================================= */

.songs-section {

  border-top:
    1px solid rgba(165,36,57,.12);
}

.songs-list {

  margin-left: 75px;
}

.song-card {

  position: relative;

  display: grid;

  grid-template-columns:
    70px 1fr 40px;

  align-items: center;

  min-height: 85px;

  padding: 0 20px;

  border-top:
    1px solid rgba(172,39,58,.16);

  transition:
    .35s ease;
}

.song-card:last-child {

  border-bottom:
    1px solid rgba(172,39,58,.16);
}

.song-card:hover {

  padding-left: 30px;

  background:
    rgba(86,9,26,.12);
}

.song-number {

  color:
    rgba(154,35,55,.7);

  font-size: 9px;

  letter-spacing: 3px;
}

.song-name {

  font-family:
    var(--display);

  font-size: 23px;

  color:
    rgba(222,211,209,.82);
}

.song-arrow {

  text-align: right;

  color:
    rgba(174,39,60,.7);
}


/* =========================================================
   SECRET NOTES
========================================================= */

.secret-section {

  text-align: center;
}

.secret-section .section-number {

  text-align: left;
}

.secret-section .section-heading {

  margin-left: 0;
}

.note-buttons {

  display: flex;

  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;
}

.note-buttons button {

  padding: 13px 18px;

  background:
    rgba(14,6,9,.55);

  border:
    1px solid rgba(172,39,58,.25);

  color:
    rgba(198,180,181,.72);

  font-size: 8px;

  letter-spacing: 3px;

  transition:
    .3s ease;
}

.note-buttons button:hover,
.note-buttons button.active {

  color:
    #eee1e0;

  border-color:
    rgba(194,42,66,.65);

  background:
    rgba(89,9,27,.16);
}

.secret-message {

  min-height: 85px;

  margin:
    45px auto 0;

  max-width: 650px;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 25px;

  border:
    1px solid rgba(171,38,57,.14);

  background:
    rgba(16,6,9,.38);

  color:
    rgba(211,194,194,.78);

  font-family:
    var(--display);

  font-size: 22px;

  font-style: italic;
}


/* =========================================================
   COUNTDOWN
========================================================= */

.countdown-section {

  position: relative;

  padding:
    180px 20px;

  overflow: hidden;

  border-top:
    1px solid rgba(168,37,58,.16);

  border-bottom:
    1px solid rgba(168,37,58,.16);

  background:
    radial-gradient(
      ellipse at center,
      rgba(94,7,25,.22),
      transparent 65%
    );
}

.countdown-glow {

  position: absolute;

  width: 500px;
  height: 500px;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%,-50%);

  border-radius: 50%;

  background:
    rgba(108,8,28,.1);

  filter:
    blur(100px);
}

.countdown-content {

  position: relative;

  z-index: 2;

  text-align: center;
}

.countdown {

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 30px;

  margin-top: 70px;
}

.count-unit {

  min-width: 110px;
}

.count-unit strong {

  display: block;

  font-family:
    var(--serif);

  font-size:
    clamp(50px, 6vw, 80px);

  font-weight: 400;

  color:
    #eadedc;
}

.count-unit span {

  display: block;

  margin-top: 4px;

  color:
    rgba(149,129,130,.65);

  font-size: 7px;

  letter-spacing: 4px;
}

.count-separator {

  color:
    rgba(152,33,54,.6);

  font-family:
    var(--serif);

  font-size: 45px;

  margin-top: -25px;
}

.countdown-note {

  margin-top: 45px;

  color:
    rgba(153,136,137,.6);

  font-family:
    var(--display);

  font-size: 18px;

  font-style: italic;
}


/* =========================================================
   MISS ME
========================================================= */

.miss-section {

  text-align: center;
}

.miss-content {

  max-width: 800px;

  margin: auto;
}

.minimal-button,
.letter-button {

  margin-top: 35px;

  padding: 15px 25px;

  background:
    transparent;

  border:
    1px solid rgba(177,40,60,.45);

  color:
    rgba(220,204,203,.78);

  font-size: 8px;

  letter-spacing: 4px;

  transition:
    .35s ease;
}

.minimal-button:hover,
.letter-button:hover {

  background:
    rgba(102,9,28,.16);

  border-color:
    rgba(199,46,69,.8);
}

.miss-card {

  max-width: 600px;

  margin:
    35px auto 0;

  padding:
    35px;

  border:
    1px solid rgba(173,39,58,.17);

  background:
    rgba(17,6,9,.4);

  opacity: 0;

  max-height: 0;

  overflow: hidden;

  transform:
    translateY(-10px);

  transition:
    .6s ease;
}

.miss-card.show {

  opacity: 1;

  max-height: 300px;

  transform:
    translateY(0);
}

.miss-card p {

  color:
    rgba(194,177,178,.75);

  font-family:
    var(--display);

  font-size: 20px;

  line-height: 1.5;

  margin-bottom: 12px;
}

.miss-card strong {

  display: block;

  margin-top: 20px;

  color:
    #b52a45;

  font-family:
    var(--serif);

  font-size: 24px;

  font-style: italic;
}


/* =========================================================
   LETTER
========================================================= */

.letter-section {

  text-align: center;

  padding-bottom: 180px;
}

.letter-content {

  max-width: 850px;

  margin: auto;
}

.letter-paper {

  position: relative;

  max-width: 720px;

  margin:
    55px auto 0;

  padding:
    70px 70px;

  text-align: left;

  background:
    linear-gradient(
      145deg,
      rgba(239,228,222,.98),
      rgba(215,200,196,.98)
    );

  color:
    #1a0b0f;

  box-shadow:
    0 35px 100px rgba(0,0,0,.5),
    0 0 50px rgba(111,9,28,.08);

  opacity: 0;

  max-height: 0;

  overflow: hidden;

  transform:
    translateY(15px);

  transition:
    .8s ease;
}

.letter-paper.show {

  opacity: 1;

  max-height: 1300px;

  transform:
    translateY(0);
}

.letter-paper::before {

  content: "";

  position: absolute;

  inset: 18px;

  border:
    1px solid rgba(73,17,27,.18);

  pointer-events: none;
}

.letter-decoration {

  text-align: center;

  color:
    #8b1630;

  font-size: 25px;

  margin-bottom: 30px;
}

.letter-paper p {

  position: relative;

  z-index: 2;

  font-family:
    var(--display);

  font-size: 21px;

  line-height: 1.65;

  margin-bottom: 20px;
}

.letter-signature {

  margin-top: 45px;

  display: flex;

  flex-direction: column;

  align-items: flex-end;
}

.letter-signature span {

  font-family:
    var(--serif);

  font-size: 34px;

  font-style: italic;
}

.letter-signature small {

  margin-top: 4px;

  color:
    #7e1a31;

  font-size: 8px;

  letter-spacing: 3px;
}


/* =========================================================
   FOOTER
========================================================= */

.footer {

  padding:
    55px 20px 70px;

  text-align: center;

  border-top:
    1px solid rgba(167,37,57,.13);

  color:
    rgba(124,108,109,.58);
}

.footer-symbol {

  color:
    rgba(179,39,60,.65);

  font-size: 18px;

  margin-bottom: 15px;
}

.footer p {

  font-size: 7px;

  letter-spacing: 4px;
}

.footer span {

  display: block;

  margin-top: 14px;

  font-family:
    var(--display);

  font-size: 14px;

  color:
    rgba(159,139,140,.5);
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

.reveal-on-scroll {

  opacity: 0;

  transform:
    translateY(35px);

  transition:
    opacity 1s ease,
    transform 1s cubic-bezier(.2,.7,.2,1);
}

.reveal-on-scroll.visible {

  opacity: 1;

  transform:
    translateY(0);
}


/* =========================================================
   AMBIENT PARTICLES
========================================================= */

.ambient-particle {

  position: fixed;

  z-index: 4;

  pointer-events: none;

  width: 4px;
  height: 4px;

  border-radius: 50%;

  background:
    rgba(197,51,74,.7);

  box-shadow:
    0 0 10px rgba(196,42,67,.5);

  animation:
    particleFloat var(--duration) linear infinite;

  opacity: var(--opacity);
}

@keyframes particleFloat {

  0% {

    transform:
      translate3d(0, 20px, 0)
      scale(.5);

    opacity: 0;
  }

  15% {
    opacity: var(--opacity);
  }

  80% {
    opacity: var(--opacity);
  }

  100% {

    transform:
      translate3d(var(--drift), -110vh, 0)
      scale(1.1);

    opacity: 0;
  }
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 900px) {

  .hero-border.border-main {
    inset: 18px;
  }

  .hero-border.border-inner {
    inset: 31px;
  }

  .corner-tl {
    top: 25px;
    left: 25px;
  }

  .corner-tr {
    top: 25px;
    right: 25px;
  }

  .corner-bl {
    bottom: 25px;
    left: 25px;
  }

  .corner-br {
    bottom: 25px;
    right: 25px;
  }

  .orbit-1 {
    width: 850px;
  }

  .orbit-2 {
    width: 750px;
  }

  .flower-decoration {
    opacity: .45;
    transform: scale(.75);
  }

  .flower-left {
    left: -50px;
  }

  .flower-right {
    right: -50px;
  }

  .intro-section {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .section-number {
    position: relative;
    top: auto;
    margin-bottom: 30px;
  }

  .section-heading {
    margin-left: 0;
  }

  .timeline,
  .memory-grid,
  .songs-list {
    margin-left: 0;
  }

}


@media (max-width: 650px) {

  .music-button {

    top: 12px;
    right: 12px;

    padding: 9px 12px;

    letter-spacing: 2px;
  }

  .music-label {
    display: none;
  }

  .border-main {
    inset: 12px !important;
  }

  .border-inner {
    inset: 23px !important;
  }

  .moon-system {

    top: 10%;

    transform:
      translateX(-50%)
      scale(.72);
  }

  .hero-content {

    width: 92vw;
  }

  .hero-title {

    font-size:
      clamp(59px, 18vw, 100px);

    letter-spacing:
      -4px;
  }

  .hero-title em {

    margin-top: 10px;

    font-size: .67em;
  }

  .eyebrow {

    font-size: 8px;

    letter-spacing: 5px;

    margin-bottom: 13px;
  }

  .date-line {

    gap: 9px;

    margin-top: 27px;

    font-size: 7px;

    letter-spacing: 2px;
  }

  .date-line .line {
    width: 25px;
  }

  .hero-description {

    font-size: 15px;

    margin-top: 19px;
  }

  .open-button {

    width: 165px;
    height: 55px;

    margin-top: 28px;
  }

  .hero-bottom {

    bottom: 20px;

    font-size: 5px;

    letter-spacing: 2px;
  }

  .hero-bottom .bottom-line {
    width: 20px;
  }

  .butterfly-1 {
    left: 4%;
    top: 27%;
    transform: scale(.6);
  }

  .butterfly-2 {
    right: 3%;
    bottom: 22%;
  }

  .butterfly-3 {
    display: none;
  }

  .decor-star.star-c,
  .decor-star.star-e {
    left: 7%;
  }

  .decor-star.star-d,
  .decor-star.star-f {
    right: 7%;
  }

  .section {

    width: 86vw;

    padding:
      105px 0;
  }

  .section-heading h2,
  .miss-content h2,
  .letter-content h2,
  .countdown-content h2 {

    font-size:
      clamp(42px, 13vw, 65px);
  }

  .intro-text {

    font-size: 19px;
  }

  .timeline-item {

    grid-template-columns: 1fr;

    gap: 12px;

    padding-left: 25px;
  }

  .timeline-date {

    padding-left: 0;
  }

  .timeline-line {

    left: 0;
  }

  .timeline-dot {

    left: -4px;
  }

  .timeline-card h3 {

    font-size: 30px;
  }

  .memory-grid {

    grid-template-columns: 1fr;
  }

  .memory-large {

    grid-row: auto;
  }

  .memory-wide {

    grid-column: auto;
  }

  .memory-large .photo-placeholder {

    min-height: 430px;
  }

  .memory-wide .photo-placeholder {

    min-height: 300px;
  }

  .countdown-section {

    padding:
      120px 15px;
  }

  .countdown {

    gap: 7px;

    margin-top: 45px;
  }

  .count-unit {

    min-width: 55px;
  }

  .count-unit strong {

    font-size:
      clamp(35px, 10vw, 55px);
  }

  .count-unit span {

    font-size: 5px;

    letter-spacing: 2px;
  }

  .count-separator {

    font-size: 27px;
  }

  .letter-paper {

    padding:
      50px 30px;
  }

  .letter-paper p {

    font-size: 19px;
  }

  .flower-decoration {

    opacity: .25;
  }

}


/* =========================================================
   REDUCE MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {

    animation-duration: .01ms !important;

    animation-iteration-count: 1 !important;

    scroll-behavior: auto !important;

    transition-duration: .01ms !important;
  }

}
