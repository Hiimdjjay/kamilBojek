const video = document.querySelector('video');

// Dodaj zdarzenie dotknięcia ekranu
document.addEventListener('touchstart', () => {
	video.play();
});
