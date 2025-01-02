const contents = document.querySelectorAll('.reveal');

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();
    if (!(top > window.innerHeight) & !(bottom < 0)) {
        return true;
    } else {
        return false;
    }
}
setInterval(() => {
    contents.forEach(content => {
        if (isVisible(content)) {
            content.classList.add('reveal_active');
        } else {
            content.classList.remove('reveal_active');
        }
    });
}, 1000);
