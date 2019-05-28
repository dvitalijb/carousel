const arrows = document.getElementById('arrows');
const container = document.getElementById('container');

function moveImg(event) {
    const { arrow } = event.target.dataset;
    const scrollStep = 420;
    const scrollStepMax = 980;
    const scrollStepMin = 0;
    const leftArrow = arrows.children[0];
    const rightArrow = arrows.children[1];

    if (arrow === 'right') {
        container.scrollLeft += scrollStep;
    } else if (arrow === 'left') {
        container.scrollLeft -= scrollStep;
    }
    if (container.scrollLeft === scrollStepMax) {
        rightArrow.disabled = !rightArrow.disabled;
    }
    if (container.scrollLeft === scrollStepMin) {
        leftArrow.disabled = !leftArrow.disabled;
    }
    if (container.scrollLeft > scrollStepMin && container.scrollLeft < scrollStepMax - 1) {
        rightArrow.disabled = false;
        leftArrow.disabled = false;
    }
}

arrows.addEventListener('click', moveImg);
