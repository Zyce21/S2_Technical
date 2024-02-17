function animateBox(day) {
    const box = document.getElementById('box');
    
    const buttonStyle = getComputedStyle(document.querySelector(`button:nth-child(${day})`));
    const borderColor = buttonStyle.borderColor;

    box.classList.add('move-animation');
    setTimeout(() => {
        box.classList.remove('move-animation');
    }, 1000);

    box.style.top = '0';
    box.style.borderColor = borderColor;

    setTimeout(() => {
        box.style.top = '30px';
    }, 100);
}
