export function setupRenderer(containerId) {
  const width = 1280;
  const height = 967;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, width, 0, height, 0.1, 1000);
  camera.position.z = 500;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const container = document.getElementById(containerId);
  container.appendChild(renderer.domElement);

  const hemiLight = new THREE.HemisphereLight("#EFF6EE", "#EFF6EE", 0);
  hemiLight.position.set(0, 0, 0);
  scene.add(hemiLight);

  return { renderer, scene, camera };
}
