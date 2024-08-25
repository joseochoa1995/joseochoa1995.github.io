document.addEventListener("DOMContentLoaded", function() {
    const bannerWrapper = document.getElementById('bannerWrapper');
    const iframes = document.querySelectorAll('.section .video-item iframe');
    
    bannerWrapper.innerHTML = '';
  
    iframes.forEach(iframe => {
      const clone = iframe.cloneNode(true);
      const bannerItem = document.createElement('div');
      bannerItem.className = 'banner-item';
      bannerItem.appendChild(clone);
      bannerWrapper.appendChild(bannerItem);
    });
  
    let currentIndex = 0;
  
    function updateBanner() {
      const items = document.querySelectorAll('.banner-item');
      const totalItems = items.length;
      currentIndex = (currentIndex + 1) % totalItems;
      const offset = -currentIndex * 100;
      bannerWrapper.style.transform = `translateX(${offset}%)`;
    }
  
    setInterval(updateBanner, 5000);
});
