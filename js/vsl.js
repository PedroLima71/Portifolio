AOS.init({ duration: 800, once: true });

// Video Switching Logic
const thumbs = document.querySelectorAll('.thumb');
const currentVideo = document.getElementById('current-video');

thumbs.forEach(btn => {
  btn.addEventListener('click', () => {
    const newSrc = btn.getAttribute('data-src');
    if (currentVideo.src !== newSrc) {
      currentVideo.src = newSrc;
      // re-trigger fade-in animation
      const frame = currentVideo;
      frame.style.opacity = 0;
      frame.addEventListener('loadeddata', () => {
        frame.style.animation = 'fadeIn var(--transition-speed) forwards';
      }, { once: true });
    }
    thumbs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});