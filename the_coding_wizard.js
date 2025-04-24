const element = document.getElementById("element");

let posX = -200;
let direction = 1;

function svg(x) {
  return `
    <svg viewBox="0 0 500 300" style="left: ${x}px; top: 150px;" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,150 Q150,100 250,150 T450,150 Q400,180 350,150 T50,150 Z"
            fill="#7FDBFF" stroke="#0074D9" stroke-width="4"/>
      <circle cx="80" cy="140" r="5" fill="#111"/>
      <path d="M100,150 Q110,140 120,150" stroke="#001f3f" stroke-width="2" fill="none"/>
    </svg>
  `;
}

function loop() {
  posX += direction * 2;
  if (posX > window.innerWidth) posX = -200;
  element.innerHTML = svg(posX);
  requestAnimationFrame(loop);
}

loop();
