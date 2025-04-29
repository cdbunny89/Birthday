// Music toggle
const btn = document.getElementById('music-btn');
const audio = document.getElementById('bg-music');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.innerText = 'Pause Music';
  } else {
    audio.pause();
    btn.innerText = 'Play Music';
  }
});

// Confetti effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 20 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
    ctx.stroke();
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d) + 1;
    c.x += Math.sin(c.d);
    c.tiltAngle += 0.05;
    c.tilt = Math.sin(c.tiltAngle) * 10;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

drawConfetti();