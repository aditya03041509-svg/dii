const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');
surpriseBtn.addEventListener('click', () => {
  const isHidden = surpriseMessage.hidden;
  surpriseMessage.hidden = !isHidden;
  surpriseBtn.textContent = isHidden ? 'Close reminder ♡' : 'Open your little reminder ♡';
  if (isHidden) surpriseMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Gentle, decorative stars; no personal data is collected or sent anywhere.
const stars = document.querySelector('.stars');
if (stars) {
  for (let i = 0; i < 28; i++) {
    const star = document.createElement('span');
    star.textContent = i % 3 === 0 ? '✦' : '·';
    star.style.left = `${(i * 37 + 11) % 100}%`;
    star.style.top = `${(i * 23 + 7) % 100}%`;
    star.style.animationDelay = `${(i % 7) * 0.4}s`;
    stars.appendChild(star);
  }
}
