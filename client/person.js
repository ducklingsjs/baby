const X_OFFSET = 700;
const Y_OFFSET = 400;

export function Person(group) {
  this.position = new THREE.Vector3();

  const geometry = new THREE.SphereGeometry(10, 7, 7);
  const material = new THREE.MeshToonMaterial({
    color: "blue",
    opacity: 0.5,
    emissive: 0xeff6ee,
    emissiveIntensity: 1,
  });

  const sphere = new THREE.Mesh(geometry, material);
  group.add(sphere);

  this.initialise = function () {
    this.position.x = X_OFFSET;
    this.position.y = Y_OFFSET;
    this.position.z = 0;
  };

  this.update = function (x, y, z) {
    this.position.x = X_OFFSET + x;
    this.position.y = Y_OFFSET + y;
    this.position.z = z;
  };

  this.display = function () {
    sphere.position.x = this.position.x;
    sphere.position.y = this.position.y;
    sphere.position.z = this.position.z;
  };
}
