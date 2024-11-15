// Seleciona o elemento de áudio e o botão
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');

// Função para alternar entre Play e Pause
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play(); // Toca o áudio
        playPauseButton.textContent = 'Pause'; // Altera o texto do botão para "Pause"
    } else {
        audioPlayer.pause(); // Pausa o áudio
        playPauseButton.textContent = 'Play'; // Altera o texto do botão para "Play"
    }
});
