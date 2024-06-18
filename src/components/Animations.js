
document.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.icon');

  icons.forEach(icon => {
    icon.style.setProperty('--x', 0);
    icon.style.setProperty('--y', 0);
    icon.style.setProperty('--rotation', 0);
    icon.style.setProperty('--scale', 1);

    function animateIcon() {
      const x = Math.random() * 20 - 10;
      const y = Math.random() * 20 - 10;
      const rotation = Math.random() * 20 - 10;
      const scale = Math.random() * 0.2 + 0.9;

      icon.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;

      setTimeout(animateIcon, Math.random() * 3000 + 2000);
    }

    animateIcon();
  });
});