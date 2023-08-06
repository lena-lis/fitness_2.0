const initVideo = () => {
  const videoContainer = document.querySelector('[data-video-container]');

  if (videoContainer) {
    const playButton = videoContainer.querySelector('[data-video-button]');
    const poster = videoContainer.querySelector('[data-video-poster]');
    const player = videoContainer.querySelector('[data-video-player]');

    playButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      poster.style.display = 'none';
      playButton.style.display = 'none';
      player.src += '?autoplay=1';
    });
  }
};

export {initVideo};
