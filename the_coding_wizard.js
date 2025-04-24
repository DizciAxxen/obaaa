const element = document.getElementById("element");
let mouse = { x: 0, y: 0 };
const fps = 60;
const delay = 10;
const parts = [{ z: 1 }, { z: 2 }, { z: 3 }, { z: 4 }]; // Örnek parça yapısı

function init() {
  document.addEventListener("mousemove", mousemove);
  setInterval(loop, 1000 / fps);
}

function mousemove(e) {
  mouse = { x: e.clientX, y: e.clientY };
}

function loop() {
  for (var i = 0; i < parts.length; i++) {
    var params = { mouse: mouse, part: parts[i] };
    setTimeout(transform, parts[i].z * delay, params);
  }
  element.innerHTML = svg();
}

function transform(params) {
  // Burada parçaların konumlarını değiştirirsin
}

function svg() {
  // Burada SVG görselini oluşturursun
  return `<svg width="300" height="300"><text x="10" y="50">Shark SVG Buraya</text></svg>`;
}

init();
