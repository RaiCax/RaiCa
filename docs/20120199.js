const video = document.getElementById('video1');
const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');

video.addEventListener('play', function() {
  var $this = this; // caching
  (function loop() {
    if (!$this.paused && !$this.ended) {
      ctx1.drawImage($this, 0, 0, canvas1.width, canvas1.height);
      var imgData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
      var imgDataCopy = new ImageData(imgData.width, imgData.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        imgDataCopy.data[i] = imgData.data[i + 1];
        imgDataCopy.data[i + 1] = imgData.data[i + 2];
        imgDataCopy.data[i + 2] = imgData.data[i + 3];
        imgDataCopy.data[i + 3] = imgData.data[i];
      }
      ctx2.putImageData(imgDataCopy, 0, 0);
      setTimeout(loop, 0); // drawing at 60fps
    }
  })();
});