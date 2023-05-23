window.addEventListener('DOMContentLoaded', () => {
    const shineOverlays = document.querySelectorAll('.shine-overlay');
    const toggleButton = document.getElementById('toggleShine');
  
    // Hover Effect
    shineOverlays.forEach((overlay) => {
      overlay.addEventListener('mouseenter', () => {
        const fruitColor = overlay.parentNode.querySelector('img').getAttribute('alt');
        overlay.style.background = fruitColor;
      });
  
      overlay.addEventListener('mouseleave', () => {
        overlay.style.background = 'transparent';
      });
    });
  
    // Button Functionality
    toggleButton.addEventListener('click', () => {
      shineOverlays.forEach((overlay) => {
        overlay.classList.toggle('shining');
      });
    });
  });
  