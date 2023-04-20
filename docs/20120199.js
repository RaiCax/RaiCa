const video = document.getElementById("video");
const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");

video.addEventListener("play", function() {
  const $this = this;
  const loop = function() {
    if (!$this.paused && !$this.ended) {
      ctx1.drawImage($this, 0, 0, canvas1.width, canvas1.height);
      const imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
      ctx2.putImageData(imageData, 0, 0);
      setTimeout(loop, 0);
    }
  };
  loop();
}, 0);
