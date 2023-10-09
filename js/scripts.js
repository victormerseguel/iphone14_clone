import "./table.js";

// SECOND NAVBAR
const shift = document.querySelector("#secondNav-wrap .shiftHidden");

setTimeout(() => {
  shift.classList.remove("shiftHidden");
  shift.classList.add("shiftShow");
}, 1);

const iconsLinks = document.querySelectorAll("#gadgets li");
iconsLinks.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    const p = element.querySelector("p");
    p.style.color = "#0777ED";
  });
  element.addEventListener("mouseleave", () => {
    const p = element.querySelector("p");
    p.style.color = "#3d3d3d";
  });
});

// INSTALLMENTS BAR
const bar = document.querySelector("#installments");
const saibaMais = document.querySelector("#saibaMais");

setTimeout(() => {
  bar.classList.add("show");
}, 10);
setTimeout(() => {
  bar.classList.remove("show", "hidden");
  bar.classList.add("normal");
  saibaMais.classList.add("saibaMais");
}, 2000);

// TV+ CAROUSEL

// creating arrays
const thumb1 = [];
const thumb2 = [];

for (let i = 0; i < 18; i++) {
  let file = i + 1;
  thumb1[i] = `img/thumbs/thumb_${file}.jpg`;
}

for (let i = 0; i < 37 - thumb1.length; i++) {
  let file = i + 19;
  thumb2[i] = `img/thumbs/thumb_${file}.jpg`;
}

// creating thumbs and overlays
const selectThumb = document.querySelector(".carousel1");
const selectThumb2 = document.querySelector(".carousel2");

function addThumbs1() {
  thumb1.forEach((img) => {
    const thumbTemplate = `<div class="thumb car1" style="left: 0px">
                <img class="imgThumb1" src="${img}" />
                <div class="playThumbWrap1 hiddenThumb">
                    <p>Assista agora</p>
                    <img class= "playThumb" src = "img/icon_play_buttom.png" />
                </div>
            </div>`;
    const parser = new DOMParser();
    const document2 = parser.parseFromString(thumbTemplate, "text/html");

    const newThumb = document2.querySelector(".thumb");
    selectThumb.append(newThumb);
  });
}
thumb2.forEach((img) => {
  const thumbTemplate = `<div class="thumb car2" style="left: 0px">
            <img class="imgThumb2" src="${img}" />
            <div class="playThumbWrap2 hiddenThumb">
                <p>Assista agora</p>
                <img class= "playThumb" src = "img/icon_play_buttom.png" />
            </div>
        </div/`;
  const parser = new DOMParser();
  const document2 = parser.parseFromString(thumbTemplate, "text/html");

  const newThumb = document2.querySelector(".thumb");
  selectThumb2.append(newThumb);
});
addThumbs1();

// generating movement

const speed1 = 0.4;
const speed2 = 0.5;
let vel1 = speed1;
let vel2 = speed2;

const carousel1Tumbs = document.querySelectorAll(".car1");
const carousel2Tumbs = document.querySelectorAll(".car2");

const imgWidth = 230;
const imgGap = 10;

const containerWidth1 = thumb1.length * imgWidth + (thumb1.length - 1) * imgGap;
const containerWidth2 = thumb2.length * imgWidth + (thumb2.length - 1) * imgGap;

const animate = () => {
  carousel1Tumbs.forEach((item, index) => {
    item.style.left = parseFloat(item.style.left) - vel1 + "px";
    let leftInt = parseFloat(item.style.left);
    if (leftInt <= (imgWidth + imgGap) * -1 * (index + 1)) {
      item.style.left = leftInt + containerWidth1 + imgGap + "px";
    }
  });
  carousel2Tumbs.forEach((item2, index2) => {
    item2.style.left = parseFloat(item2.style.left) - vel2 + "px";
    let leftInt2 = parseFloat(item2.style.left);
    if (leftInt2 <= (imgWidth + imgGap) * -1 * (index2 + 1)) {
      item2.style.left = leftInt2 + containerWidth2 + imgGap + "px";
    }
  });
  requestAnimationFrame(animate);
};
animate();

// control buttons
const playMusicBtn = document.querySelector("#playMusic");
const playTvBtn = document.querySelector("#playTv");
let pauseTV = true;
let pauseMusic = false;

playTvBtn.addEventListener("click", () => {
  pauseTV = !pauseTV;
  if (pauseTV) {
    playTvBtn.src = playTvBtn.src.replace("play", "pause");
    vel1 = speed1;
    vel2 = speed2;
  } else {
    playTvBtn.src = playTvBtn.src.replace("pause", "play");
    vel1 = 0;
    vel2 = 0;
  }
});
playMusicBtn.addEventListener("click", () => {
  pauseMusic = !pauseMusic;
  if (!pauseMusic) {
    playMusicBtn.src = playMusicBtn.src.replace("play", "pause");
  } else {
    playMusicBtn.src = playMusicBtn.src.replace("pause", "play");
  }
});

// mouse event tv+
const imgThumb1 = document.querySelectorAll(".imgThumb1");
const imgThumb2 = document.querySelectorAll(".imgThumb2");
const playThumbWrap1 = document.querySelectorAll(".playThumbWrap1");
const playThumbWrap2 = document.querySelectorAll(".playThumbWrap2");

carousel1Tumbs.forEach((event, index) => {
  event.addEventListener("mouseenter", () => {
    pauseTV ? (vel1 = 0.1) : null;
    playThumbWrap1[index].classList.remove("hiddenThumb");
    imgThumb1[index].classList.add("imgThumbHover");
  });
  event.addEventListener("mouseleave", () => {
    pauseTV ? (vel1 = speed1) : null;
    playThumbWrap1[index].classList.add("hiddenThumb");
    imgThumb1[index].classList.remove("imgThumbHover");
  });
});
carousel2Tumbs.forEach((event, index) => {
  event.addEventListener("mouseenter", () => {
    pauseTV ? (vel2 = 0.1) : null;
    playThumbWrap2[index].classList.remove("hiddenThumb");
    imgThumb2[index].classList.add("imgThumbHover");
  });
  event.addEventListener("mouseleave", () => {
    pauseTV ? (vel2 = speed2) : null;
    playThumbWrap2[index].classList.add("hiddenThumb");
    imgThumb2[index].classList.remove("imgThumbHover");
  });
});

// MUSIC

// creating images
const mThumbs = [];

for (let i = 0; i < 25; i++) {
  mThumbs[i] = `music_${i + 1}.jpg`;
}

const selectMusic = document.querySelector(".carouselMusic");

mThumbs.forEach((image) => {
  const musicTemplate = `<div class="musicImages">
            <img class="musicThumb" src="img/music/${image}" />
            <div class="playThumbWrap hiddenThumb">
                <p>Listen now</p>
                <img class= "playThumb" src = "img/icon_play_buttom.png" />
            </div>
        </div>`;

  const parser = new DOMParser();
  const document3 = parser.parseFromString(musicTemplate, "text/html");
  const htmlMusic = document3.querySelector(".musicImages");
  selectMusic.appendChild(htmlMusic);
});

// mouse event music

const divImgThumbs = document.querySelectorAll(".musicImages");
const imgThumb = document.querySelectorAll(".musicThumb");

divImgThumbs.forEach((divImg) => {
  const img = divImg.querySelector(".musicThumb");
  const playThumb = divImg.querySelector(".playThumbWrap");

  divImg.addEventListener("mouseenter", () => {
    img.classList.toggle("hoverMusic");
    playThumb.classList.toggle("hiddenThumb");
  });
  divImg.addEventListener("mouseleave", () => {
    img.classList.toggle("hoverMusic");
    playThumb.classList.toggle("hiddenThumb");
  });
});

//  add moviment

const parentWidth = document.querySelector(".music").clientWidth;
const musicImgWidth = 290;
const musicImgSelectedWidth = 350;
const musicGapWidth = 10;
const musicArrWidth =
  (divImgThumbs.length - 1) * (musicImgWidth + musicGapWidth) +
  musicImgSelectedWidth +
  musicGapWidth;
const musicCenterDiv = (parentWidth - (musicImgWidth + musicGapWidth)) / 2;

divImgThumbs.forEach((item, i) => {
  item.style.left = musicCenterDiv + "px";
  i === 0 ? imgThumb[i].classList.add("selected") : null;
});

divImgThumbs.forEach((item, i) => {
  if (
    (parseFloat(item.style.left) + (musicImgWidth + musicGapWidth) / 2) *
      (i + 1) >
    musicArrWidth - (musicImgWidth + musicGapWidth) * 2
  ) {
    item.style.left = parseFloat(item.style.left) - musicArrWidth + "px";
  }
});

const clearSelected = () => {
  imgThumb.forEach((divImg) => divImg.classList.remove("selected"));
};

let indexMusic = 1;
let musicIntervalVarible;

setInterval(() => {
  if (!pauseMusic) {
    clearSelected();
    imgThumb[indexMusic].classList.add("selected");
    moveMusic();
    indexMusic++;
    indexMusic >= imgThumb.length
      ? (indexMusic = 0)
      : (indexMusic = indexMusic);
  }
}, 3000);

const moveMusic = () => {
  divImgThumbs.forEach((img, i) => {
    img.style.left =
      parseFloat(img.style.left) - musicArrWidth / divImgThumbs.length + "px";

    parseFloat(img.style.left) <
    musicCenterDiv -
      musicArrWidth / 2 -
      (musicImgWidth + musicGapWidth) * (i + 1)
      ? (img.style.left = parseFloat(img.style.left) + musicArrWidth + "px")
      : null;
  });
};
