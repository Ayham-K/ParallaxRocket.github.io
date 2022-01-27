let Mb = document.getElementById('Mb');
let Rk = document.getElementById('Rk');
let Mn = document.getElementById('Mn');
let Mf = document.getElementById('Mf');
let text = document.getElementById('text');
let exp = document.getElementById('exp');
let nav = document.querySelector('nav');
window.addEventListener('scroll', function(){ //same as arrow function e =>
    let value = window.scrollY;
    Mn.style.top = value * .8 + 'px';
    Mb.style.top = value * 0.5 + 'px';
    Mf.style.top = value * 0 + 'px';
    text.style.marginRight = value * 1.5 + 'px';
    text.style.marginTop = value * .8 + 'px';
    exp.style.marginTop = value * .7 + 'px';
    nav.style.top = value * .7 + 'px';
    Rk.style.top = value * -.1 + 'px';

})