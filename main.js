const arrows = document.getElementById('arrows');
const container = document.getElementById('container');
const rightArrow = document.getElementById('right');
const leftArrow = document.getElementById('left');

function moveImg(event) {
    const idButton = event.target.id;
    if (idButton === 'right') {
        container.scrollLeft += 420;
        leftArrow.classList.remove('disabled');
        if (container.scrollLeft === 980) {
            rightArrow.classList.add('disabled');
        }
    } else if (idButton === 'left') {
        container.scrollLeft -= 420;
        rightArrow.classList.remove('disabled');
        if (container.scrollLeft === 0) {
            leftArrow.classList.add('disabled');
        }
    }
}

arrows.addEventListener('click', moveImg);
