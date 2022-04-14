const player = document.querySelector('#player');
const musicCards = document.querySelectorAll('.music-card');
const playControlBtn = document.querySelector('#play');
const audio = document.querySelector('#audio');
const playStatusIcon = document.querySelector('#playStatusIcon');
musicCards.forEach(musicCard => musicCard.addEventListener('click', function () {
    if (player.classList.contains('d-none')) {
        player.classList.remove('d-none');
    }
    audio.play();
    playControlBtn.classList.add('playing');
}));

playControlBtn.addEventListener('click', function () {
    if (playControlBtn.classList.contains('playing')) {
        audio.pause();
        playControlBtn.classList.remove('playing');
        playControlBtn.classList.add('pause');
        playStatusIcon.classList.remove('fa-pause');
        playStatusIcon.classList.add('fa-play');
    } else if (playControlBtn.classList.contains('pause')) {
        audio.play();
        playControlBtn.classList.remove('pause');
        playControlBtn.classList.add('playing');
        playStatusIcon.classList.add('fa-pause');
        playStatusIcon.classList.remove('fa-play');
 }
});

const me = document.querySelector('#user-vikram');
me.addEventListener('click', function () {
    window.open("https://github.com/vikrammahto", "_blank");
})