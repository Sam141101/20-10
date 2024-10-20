function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    // let left = Math.floor(Math.random() * 290);


    const element = document.querySelector('.cloud'); // Thay '.your-element' bằng selector phù hợp
    const width = element.offsetWidth;

    let left

    if (window.innerWidth > 1200) {
        left = Math.floor(Math.random() * width / 4);
        e.style.left = Number(left + width / 3) + 'px';

    } else {
        left = Math.floor(Math.random() * width / 2);
        e.style.left = Number(left + width / 4) + 'px';

    }

    // let left = Math.floor(Math.random() * width / 2);
    let size = Math.round() * 1.5;
    let duration = Math.random() * 1;

    e.innerText = '🩷';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDirection = 1 + duration + 's';

    setTimeout(function () {
        cloud.removeChild(e)
    }, 2000)
}

setInterval(function () {
    rain()
}, 20)