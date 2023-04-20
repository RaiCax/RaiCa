// Lấy các phần tử HTML cần thiết
var video = document.getElementById('video');
var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');

// Thiết lập kích thước của canvas bằng với kích thước của video
canvas1.width = video.width;
canvas1.height = video.height;
canvas2.width = video.width;
canvas2.height = video.height;

// Bắt đầu chạy video
video.play();

// Xử lý hình ảnh từ video
function processVideo() {
	// Vẽ hình ảnh từ video lên canvas1
	ctx1.drawImage(video, 0, 0, canvas1.width, canvas1.height);

	// Lấy dữ liệu hình ảnh từ canvas1
	var imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
	var data = imageData.data;

	// Xử lý dữ liệu hình ảnh
	// Trong ví dụ này, chúng ta sẽ đổi màu các pixel thành màu đỏ
	for (var i = 0; i < data.length; i += 4) {
		data[i] = 255;
		data[i+1] = 0;
		data[i+2] = 0;
	}

	// Đưa dữ liệu hình ảnh đã xử lý lên canvas2
	ctx2.putImageData(imageData, 0, 0);

	// Lặp lại xử lý cho frame tiếp theo
	requestAnimationFrame(processVideo);
}

// Bắt đầu xử lý video và canvas
processVideo();