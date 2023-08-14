
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
setTimeout( () => {
    bar.classList.remove('show', 'hidden');
    bar.classList.add('normal')
    saibaMais.classList.add('saibaMais');
    console.log(saibaMais)
}, 2000)