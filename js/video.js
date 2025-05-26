function loadVideos() {
    const videoPaths = [
        'videos/video1.mp4',
        'videos/video2.mp4',
        'videos/video5.MOV',
        'videos/video6.mp4',
        'videos/video7.mp4',
        'videos/video6.mp4',
        'videos/video7.mp4',
        // Adicione mais vídeos conforme necessário
    ];

    const videoElements = document.querySelectorAll('.video video');
    let currentIndex = 0;
    const itemsPerPage = videoElements.length;

    function updateVideos() {
        for (let i = 0; i < videoElements.length; i++) {
            const path = videoPaths[currentIndex + i];
            if (path) {
                videoElements[i].src = path;
                videoElements[i].parentElement.style.display = 'block';
            } else {
                videoElements[i].src = '';
                videoElements[i].parentElement.style.display = 'none';
            }
        }
    }

    function changeVideos(index) {
        currentIndex = index * itemsPerPage;
        updateVideos();
        updateIndicators();
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(ind => ind.classList.remove('active'));
        const activeIndex = Math.floor(currentIndex / itemsPerPage);
        if (indicators[activeIndex]) {
            indicators[activeIndex].classList.add('active');
        }
    }

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            changeVideos(index);
        });
    });

    updateVideos();
}
document.addEventListener('DOMContentLoaded', loadVideos);
