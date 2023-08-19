
// SECOND NAVBAR
const shift = document.querySelector('#secondNav-wrap .shiftHidden');

setTimeout(() => {
    shift.classList.remove('shiftHidden')
    shift.classList.add('shiftShow')
}, 1);



const iconsLinks = document.querySelectorAll('#gadgets li');
iconsLinks.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        const p = element.querySelector('p');
        p.style.color = '#0777ED';
    })
    element.addEventListener('mouseleave', () => {
        const p = element.querySelector('p');
        p.style.color = '#3d3d3d';
    })
})


// INSTALLMENTS BAR
const bar = document.querySelector('#installments');
const saibaMais = document.querySelector('#saibaMais');


setTimeout(appear = () => {
    bar.classList.add('show');

}, 10);
setTimeout(() => {
    bar.classList.remove('show', 'hidden');
    bar.classList.add('normal')
    saibaMais.classList.add('saibaMais');
}, 2000)


// TV+ CAROUSEL

// creating arrays
const thumb1 = [];
const thumb2 = [];

for (let i = 0; i < 18; i++) {
    let file = i + 1;
    thumb1[i] = `img/thumbs/thumb_${file}.jpg`
}

for (let i = 0; i < (37 - thumb1.length); i++) {
    let file = i + 19;
    thumb2[i] = `img/thumbs/thumb_${file}.jpg`
}


// creating thumbs and overlays
const selectThumb = document.querySelector('.carousel1');
const selectThumb2 = document.querySelector('.carousel2');

function addThumbs1() {
    thumb1.forEach(img => {
        const thumbTemplate =
            `<div class="thumb car1">
                <img class="imgThumb1" src="${img}" />
                <div class="playThumbWrap1 hiddenThumb">
                    <p>Assista agora</p>
                    <img class= "playThumb" src = "img/icon_play_buttom.png" />
                </div>
            </div>`;
        const parser = new DOMParser();
        document2 = parser.parseFromString(thumbTemplate, 'text/html')

        const newThumb = document2.querySelector('.thumb');
        selectThumb.append(newThumb);
    })
}
thumb2.forEach(img => {
    const thumbTemplate =
        `<div class="thumb car2">
            <img class="imgThumb2" src="${img}" />
            <div class="playThumbWrap2 hiddenThumb">
                <p>Assista agora</p>
                <img class= "playThumb" src = "img/icon_play_buttom.png" />
            </div>
        </div/`;
    const parser = new DOMParser();
    document2 = parser.parseFromString(thumbTemplate, 'text/html')

    const newThumb = document2.querySelector('.thumb');
    selectThumb2.append(newThumb);
})
addThumbs1();

// generating movement

const speed1 = .4;
const speed2 = .5;
let vel1 = speed1;
let vel2 = speed2;

const carousel1Tumbs = document.querySelectorAll('.car1');
const carousel2Tumbs = document.querySelectorAll('.car2');


const setLeft = () => {
    carousel1Tumbs.forEach(position => position.style.left = '0px')

    carousel2Tumbs.forEach(position => position.style.left = '0px')
}

setLeft()


const imgWidth = 230;
const imgGap = 10;

const containerWidth1 = (thumb1.length * imgWidth) + ((thumb1.length - 1) * imgGap);
const containerWidth2 = (thumb2.length * imgWidth) + ((thumb2.length - 1) * imgGap);

const animate = () => {
    carousel1Tumbs.forEach((item, index) => {
        item.style.left = parseFloat(item.style.left) - vel1 + 'px';
        let leftInt = parseFloat(item.style.left);
        if (leftInt <= (imgWidth + imgGap) * -1 * (index + 1)) {
            item.style.left = leftInt + containerWidth1 + imgGap + 'px'
        }
    })
    carousel2Tumbs.forEach((item2, index2) => {
        item2.style.left = parseFloat(item2.style.left) - vel2 + 'px';
        let leftInt2 = parseFloat(item2.style.left);
        if (leftInt2 <= (imgWidth + imgGap) * -1 * (index2 + 1)) {
            item2.style.left = leftInt2 + containerWidth2 + imgGap + 'px'
        }
    })
    requestAnimationFrame(animate);
}
animate();


// mouse event tv+

const imgThumb1 = document.querySelectorAll('.imgThumb1');
const imgThumb2 = document.querySelectorAll('.imgThumb2');
const playThumbWrap1 = document.querySelectorAll('.playThumbWrap1');
const playThumbWrap2 = document.querySelectorAll('.playThumbWrap2');


carousel1Tumbs.forEach((event, index) => {
    event.addEventListener('mouseenter', () => {
        vel1 = .1;
        playThumbWrap1[index].classList.remove('hiddenThumb')
        imgThumb1[index].classList.add('imgThumbHover')
    });
    event.addEventListener('mouseleave', () => {
        vel1 = speed1;
        playThumbWrap1[index].classList.add('hiddenThumb')
        imgThumb1[index].classList.remove('imgThumbHover')
    });
});
carousel2Tumbs.forEach((event, index) => {
    event.addEventListener('mouseenter', () => {
        vel2 = .1;
        playThumbWrap2[index].classList.remove('hiddenThumb')
        imgThumb2[index].classList.add('imgThumbHover')
    });
    event.addEventListener('mouseleave', () => {
        vel2 = speed2
        playThumbWrap2[index].classList.add('hiddenThumb')
        imgThumb2[index].classList.remove('imgThumbHover')
    });
});


// MUSIC

// creating images
const mThumbs = [];

for (let i = 0; i < 25; i++) {
    mThumbs[i] = `music_${i + 1}.jpg`
}

const selectMusic = document.querySelector('.carouselMusic')

mThumbs.forEach((image) => {
    const musicTemplate = 
    `<div class="musicImages">
        <img class="musicThumb" src="img/music/${image}" />
        <div class="playThumbWrap hiddenThumb">
            <p>Listen now</p>
            <img class= "playThumb" src = "img/icon_play_buttom.png" />
        </div>
    </div>`;

    parser = new DOMParser();
    const document3 = parser.parseFromString(musicTemplate, "text/html")
    const htmlMusic = document3.querySelector('.musicImages')
    selectMusic.appendChild(htmlMusic)
})