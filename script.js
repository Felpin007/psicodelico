let crazyMode = false;

let firstClick = true;

gradient.addEventListener('click', (e) => {
    if (firstClick) {
        alert("Aviso: Este site pode potencialmente desencadear convulsões para pessoas com epilepsia fotossensível. A visualização é por sua conta e risco.");
        let confirmation = confirm("Você deseja continuar?");
        if (!confirmation) {
            window.close(); // Fecha a janela se o usuário não confirmar
        }
        firstClick = false;
    }
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