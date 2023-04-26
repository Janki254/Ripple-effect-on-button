const ripple_buttons = document.querySelectorAll('.ripple-btn');

ripple_buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const x = e.pageX;
        const y = e.pageY;

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        const xInside = x - btnLeft;
        const yInside = y - btnTop;

        const ripple_circle = document.createElement('span');
        ripple_circle.classList.add('circle');
        ripple_circle.style.top = yInside + 'px';
        ripple_circle.style.left = xInside + 'px';

        this.appendChild(ripple_circle);

        setTimeout(() => {
            ripple_circle.remove();
        }, 800);
    });
});
// const createRippleEffect = (e) => {
//     const x = e.pageX;
//     const y = e.pageY;

// };
