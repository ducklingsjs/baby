import { loadVideo } from "./camera";
import { setupRenderer } from "./renderer";
import { Person } from "./person";

loadVideo();
const { renderer, scene, camera } = setupRenderer("threeContainer");

const group = new THREE.Group();
scene.add(group);

let trackers = [];

for (let i = 0; i < 17; i++) {
  let tracker = new Person(group);
  tracker.initialise();
  tracker.display();

  trackers.push(tracker);
}

// main render loop
async function main() {
  const net = await posenet.load();

  const video = await loadVideo();

  const poses = await net.estimateSinglePose(video);

  if (poses.score > 0.8) {
    poses.keypoints.forEach((d, i) => {
      trackers[i].update(d.position.x * 1, d.position.y * 1, 0);
      trackers[i].display();
    });
  }

  renderer.render(scene, camera);
  requestAnimationFrame(main);
}

main();
