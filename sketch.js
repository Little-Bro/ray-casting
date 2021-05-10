let loadButton;
let initial_data;
let walls;
let player;

// loading map file
function preload() {
  initial_data = loadJSON('./test_rays.json');
}

function setup() {
  createCanvas(601, 601);
  loadButton = createButton('load map');
  walls = [];
  for (let key in initial_data) {
    let value = initial_data[key];
    let origin = JSON.parse(key);
    let destination = JSON.parse(value);
    walls.push(new Wall(origin[0], origin[1], destination[0], destination[1]));
  }
  player = new Player(width / 2, height / 2, walls);
}

function draw() {
  background(0);

  loadButton.mousePressed(() => {
    let fileName = prompt('enter map name');
    initial_data = loadJSON(`${fileName}.json`);
  });

  player.update();

  for (let wall of walls) {
    wall.show();
  }

  //console.log("rX : " + player.rays[0].pos.x);
  //console.log("pX : " + player.pos.x + ", pY : " + player.pos.y);
}