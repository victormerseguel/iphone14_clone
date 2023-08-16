
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


// TV+ carousel

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
                <img src="${img}" />
                <img class= "playThumb hiddenThumb" src = "img/icon_play_buttom.png" />
            </div/`;
        const parser = new DOMParser();
        document2 = parser.parseFromString(thumbTemplate, 'text/html')

        const newThumb = document2.querySelector('.thumb');
        selectThumb.append(newThumb);
    })
}
thumb2.forEach(img => {
    const thumbTemplate = 
        `<div class="thumb car2">
            <img src="${img}" />
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
let positionLeft1 = 0;
let positionLeft2 = 0;


const setLeft = (posLeft1, posLeft2) => {
    carousel1Tumbs.forEach((position) => {
        position.style.left = posLeft1 + 'px';
    })

    carousel2Tumbs.forEach((position) => {
        position.style.left = posLeft2 + 'px';
    })
}

setLeft(positionLeft1, positionLeft2);

const animate = () => {
    carousel1Tumbs.forEach((left1, index) => {
        left1.style.left = parseFloat(left1.style.left) - vel1 + 'px';
    })
    carousel2Tumbs.forEach((left2) => {
        left2.style.left = parseFloat(left2.style.left) - vel2 + 'px';
    })
    requestAnimationFrame(animate);
}
animate();


// mouse event
carousel1Tumbs.forEach((event) => {
    event.addEventListener('mouseenter', () => {
        vel1 = .1;
    });
    event.addEventListener('mouseleave', () => {
        vel1 = speed1;
    });
});
carousel2Tumbs.forEach((event) => {
    event.addEventListener('mouseenter', () => {
        vel2 = .1;
    });
    event.addEventListener('mouseleave', () => {
        vel2 = speed2
    });
});



//  infinit loop
const imgWidth = 230;
const imgGap = 10;

const containerWidth1 = (thumb1.length * imgWidth) + ((thumb1.length - 1) * imgGap);
const containerWidth2 = (thumb2.length * imgWidth) + ((thumb2.length - 1) * imgGap);

const sentinela = setInterval(() => {
   carousel1Tumbs.forEach((item, index) => {
    let leftInt = parseInt(item.style.left);
    if (leftInt <= (imgWidth + imgGap) * -1 * (index + 1)) {
        item.style.left = leftInt + containerWidth1 + imgGap + 'px'
    }
   })
   carousel2Tumbs.forEach((item2, index2) => {
    let leftInt2 = parseInt(item2.style.left);
    if (leftInt2 <= (imgWidth + imgGap) * -1 * (index2 + 1)) {
        item2.style.left = leftInt2 + containerWidth2 + imgGap + 'px'
    }
   })
}, 50);

