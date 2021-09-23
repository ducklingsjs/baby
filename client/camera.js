async function _setupCamera() {
  const video = document.getElementById("camera");
  video.width = 300;
  video.height = 300;

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
      width: 300,
      height: 300,
    },
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

export async function loadVideo() {
  const video = await _setupCamera();
  video.play();

  return video;
}
