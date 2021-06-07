function createAsteroids() {
  var maxWidth = 1000;
  var maxHeight = 200;
  var maxDepth = 200;
  var asteroids = [];
  for (var i = 0; i < 7; i++) {
    asteroids.push(createRock(5 + Math.random() * 50, 200, maxWidth, 300, 400));
  }
  for (var i = 0; i < 30; i++) {
    asteroids.push(createRock(5 + Math.random() * 10, 500, maxWidth, 200, 600));
  }
  for (var i = 0; i < 160; i++) {
    asteroids.push(createRock(2 + Math.random() * 5, 1000, maxWidth, 150, 800));
  }
  return asteroids;
}

function createRock(
  size: number,
  spreadX: number,
  maxWidth: number,
  maxHeight: number,
  maxDepth: number
) {
  let geometry = new THREE.DodecahedronGeometry(size, 1);
  geometry.vertices.forEach(function(v) {
    v.x += 0 - Math.random() * (size / 4);
    v.y += 0 - Math.random() * (size / 4);
    v.z += 0 - Math.random() * (size / 4);
  });

  geometry.attributes;

  var color = '#111111';
  color = ColorLuminance(color, 2 + Math.random() * 10);
  console.log(color);
  texture = new THREE.MeshStandardMaterial({
    color: color,
    shading: THREE.FlatShading,
    //   shininess: 0.5,
    roughness: 0.8,
    metalness: 1,
  });

  cube = new THREE.Mesh(geometry, texture);
  cube.castShadow = true;
  cube.receiveShadow = true;
  cube.scale.set(
    1 + Math.random() * 0.4,
    1 + Math.random() * 0.8,
    1 + Math.random() * 0.4
  );
  //cube.rotation.y = Math.PI/4;
  //cube.rotation.x = Math.PI/4;
  var x = spreadX / 2 - Math.random() * spreadX;
  var centeredness = 1 - Math.abs(x) / (maxWidth / 2);
  var y = (maxHeight / 2 - Math.random() * maxHeight) * centeredness;
  var z = (maxDepth / 2 - Math.random() * maxDepth) * centeredness;
  cube.position.set(x, y, z);
  cube.r = {};
  cube.r.x = Math.random() * 0.005;
  cube.r.y = Math.random() * 0.005;
  cube.r.z = Math.random() * 0.005;
  scene.add(cube);
  return cube;
}

function ColorLuminance(hex: string, lum: number) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = '#',
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
}
