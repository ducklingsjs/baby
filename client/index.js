import { loadVideo } from "./camera";
import { setupRenderer } from "./renderer";
import { Entity } from "./entity";

import poseExample from "../init_pose.json";

loadVideo();
const { renderer, scene, camera } = setupRenderer("threeContainer");

const bodyParts = [
  "nose",
  "leftShoulder",
  "rightShoulder",
  "leftElbow",
  "rightElbow",
  "leftWrist",
  "rightWrist",
  "leftHip",
  "rightHip",
  "leftKnee",
  "rightKnee",
  "leftAnkle",
  "rightAnkle",
];

const group = new THREE.Group();
scene.add(group);

let trackers2 = {
  nose: {},
  leftShoulder: {},
  rightShoulder: {},
  leftElbow: {},
  rightElbow: {},
  leftWrist: {},
  rightWrist: {},
  leftHip: {},
  rightHip: {},
  leftKnee: {},
  rightKnee: {},
  leftAnkle: {},
  rightAnkle: {},
};

bodyParts.forEach((item) => {
  let tracker = new Entity(group, item);
  tracker.initialise();
  tracker.update(poseExample[item].x, poseExample[item].y, 0);
  tracker.display();

  trackers2[item] = tracker;
});

// main render loop
async function main() {
  const net = await posenet.load();

  const video = await loadVideo();

  const poses = await net.estimateSinglePose(video);

  if (poses.score > 0.8) {
    poses.keypoints
      .filter((item) => bodyParts.includes(item.part))
      .forEach((d, i) => {
        trackers2[d.part].update(d.position.x * 1, d.position.y * 1, 0);
        trackers2[d.part].display();
      });
  }

  renderer.render(scene, camera);
  requestAnimationFrame(main);
}

main();
