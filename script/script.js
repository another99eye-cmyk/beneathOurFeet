//Hud
const container = document.querySelector('.parallax-container');
const fill = document.getElementById('scrollFill');
const ticksWrap = document.getElementById('scrollTicks');
 
for (let i = 1; i < 10; i++) {
    const tick = document.createElement('div');
    tick.className = 'scroll-progress__tick';
    tick.style.top = (i * 10) + '%';
    ticksWrap.appendChild(tick);
}
 
function updateProgress() {
    const scrollable = container.scrollHeight - container.clientHeight;
    const progress = scrollable > 0 ? container.scrollTop / scrollable : 0;
    fill.style.height = (progress * 100) + '%';
}
 
container.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
