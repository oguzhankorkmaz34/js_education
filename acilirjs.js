const tikla = document.querySelector('button');
const mainpop = document.querySelector('.mainpopup');
const close = document.querySelector('.popclouse');
tikla.addEventListener('click', e => {
    mainpop.style.display = 'block';


});
close.addEventListener('click', e => {
    mainpop.style.display = 'none';


});
mainpop.addEventListener('click', e => {
    if (e.target.className === 'mainpopup')
        mainpop.style.display = 'none';


});