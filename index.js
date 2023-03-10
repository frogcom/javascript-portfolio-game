const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// canvas.width = 100vw;
// canvas.height = 1024;

// canvas.width = document.body.clientWidth; //document.width is obsolete
// canvas.height = document.body.clientHeight; //document.height is obsolete
canvas.width = 3000;
canvas.height = 2000;
canvasW = canvas.width;
canvasH = canvas.height;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 120) {
  collisionsMap.push(collisions.slice(i, 120 + i));
}
const charactersMap = [];
for (let i = 0; i < charactersMapData.length; i += 120) {
  charactersMap.push(charactersMapData.slice(i, 120 + i));
}

const boundaries = [];

const offset = {
  x: -1175,
  y: 550,
};

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const characters = [];
const villagerImg = new Image();
villagerImg.src = "./assets/img/villager/idle.png";
const doorImg = new Image();
doorImg.src = "./assets/img/test.png";
const oldManImg = new Image();
oldManImg.src = "./assets/img/oldMan/Idle.png";

const characterMap = {
  1025: 1,
  1026: 2,
  1027: 3,
  1028: 3,
  1029: 4,
  1030: 5,
  1031: 6,
  1032: 8,
  1033: 9,
  1034: 10,
  1035: 11,
};

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    const uid = characterMap[symbol];
    if (uid) {
      characters.push(
        new Sprite({
          uid,
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
          image: doorImg,
          scale: 3,
        })
      );
    }
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
    }
  });
});

const image = new Image();
image.src = "./assets/img/Pellet Town.png";

const foregroundImage = new Image();
foregroundImage.src = "./assets/img/foregroundObjects.png";

const playerDownImage = new Image();
playerDownImage.src = "./assets/img/playerDown.png";

const playerUpImage = new Image();
playerUpImage.src = "./assets/img/playerUp.png";

const playerLeftImage = new Image();
playerLeftImage.src = "./assets/img/playerLeft.png";

const playerRightImage = new Image();
playerRightImage.src = "./assets/img/playerRight.png";

const player = new Sprite({
  position: {
    x: canvasW / 2 - 192 / 4 / 2,
    y: canvasH / 2 - 68 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage,
  },
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});

const movables = [background, ...boundaries, foreground, ...characters];
const renderables = [
  background,
  ...boundaries,
  ...characters,
  player,
  foreground,
];

let movementspeed = 3;

function animate() {
  const animationId = window.requestAnimationFrame(animate);

  renderables.forEach((renderable) => {
    renderable.draw();
  });

  let moving = true;
  player.animate = false;
  const textDiv = document.getElementById("textdiv");
  const startgame = document.getElementById("startgame");
  if (textDiv.classList.contains("hidden") == false) {
    return;
  }
  if (startgame.classList.contains("zichtbaar")) {
    return;
  }

  if (keys.w.pressed && lastKey === "w") {
    player.animate = true;
    player.image = player.sprites.up;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += movementspeed;
      });
  } else if (keys.a.pressed && lastKey === "a") {
    player.animate = true;
    player.image = player.sprites.left;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += movementspeed;
      });
  } else if (keys.s.pressed && lastKey === "s") {
    player.animate = true;
    player.image = player.sprites.down;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= movementspeed;
      });
  } else if (keys.d.pressed && lastKey === "d") {
    player.animate = true;
    player.image = player.sprites.right;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 },
    });
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= movementspeed;
      });
  } else if (keys.W.pressed && lastKey === "W") {
    player.animate = true;
    player.image = player.sprites.up;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += movementspeed;
      });
  } else if (keys.A.pressed && lastKey === "A") {
    player.animate = true;
    player.image = player.sprites.left;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += movementspeed;
      });
  } else if (keys.S.pressed && lastKey === "S") {
    player.animate = true;
    player.image = player.sprites.down;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 },
    });

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= movementspeed;
      });
  } else if (keys.D.pressed && lastKey === "D") {
    player.animate = true;
    player.image = player.sprites.right;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 },
    });
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= movementspeed;
      });
  }
}

let clicked = false;
addEventListener("click", () => {
  if (!clicked) {
    audio.Map.play();
    clicked = true;
    audio.loop = true;
  }
});
animate();
