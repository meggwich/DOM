const rows = document.querySelectorAll('.rotator__case');
const l = rows.length;
let index = 0;

setInterval(() => {
    rows[index].classList.remove('rotator__case_active');
    index += 1;
    index %= l;
    rows[index].style.color = rows[index].dataset.color;
    rows[index].classList.add('rotator__case_active');    
}, 1000);