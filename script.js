let crazyMode = false;

gradient.addEventListener('click', (e) => {
    crazyMode = !crazyMode;
});

gradient.addEventListener('mousemove', (e) => {
    const x = e.pageX - gradient.offsetLeft;
    const y = e.pageY - gradient.offsetTop;
    if (crazyMode) {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        const shuffledColors = colors.sort(() => 0.5 - Math.random());
        gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, ${shuffledColors.join(', ')})`;
    } else {
        gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, red, orange, yellow, green, blue, indigo, violet)`;
    }
});