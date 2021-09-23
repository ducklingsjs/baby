const X_OFFSET = 700;
const Y_OFFSET = 400;

export function Entity(group, name) {
  this.position = new THREE.Vector3();

  let geometry;
  let material;

  if (name === "nose") {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("*");

    const texture = textureLoader.load("brad_pitt2.94ce350a.png");
    texture.center.set(0.67, 0.5);
    texture.repeat.set(2, 1.2);

    texture.rotation = Math.PI;
    material = new THREE.MeshStandardMaterial({
      map: texture,
    });

    geometry = new THREE.SphereGeometry(35, 30, 10);
  } else {
    material = new THREE.MeshLambertMaterial({
      color: "white",
    });

    geometry = new THREE.SphereGeometry(15, 7, 7);
  }

  const sphere = new THREE.Mesh(geometry, material);
  group.add(sphere);

  this.initialise = function () {
    this.position.x = X_OFFSET;
    this.position.y = Y_OFFSET;
    this.position.z = 0;
  };

  this.update = function (x, y, z) {
    this.position.x = X_OFFSET + x;
    this.position.y = Y_OFFSET + y + (name === "nose" ? -20 : 0);
    this.position.z = z;
  };

  this.display = function () {
    sphere.position.x = this.position.x;
    sphere.position.y = this.position.y;
    sphere.position.z = this.position.z;
  };
}
