const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// canvas.width = 100vw;
// canvas.height = 1024;

canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete
canvasW = canvas.width;
canvasH = canvas.height;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
}

const charactersMap = [];
for (let i = 0; i < charactersMapData.length; i += 70) {
  charactersMap.push(charactersMapData.slice(i, 70 + i));
}
// const travelZones = [];
// for (let i = 0; i < travelZonesData.length; i += 70) {
//   travelZones.push(travelZonesData.slice(i, 70 + i));
// }
const boundaries = [];
const offset = {
  x: -285,
  y: -450,
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

// const battleZones = [];

// battleZonesMap.forEach((row, i) => {
//   row.forEach((symbol, j) => {
//     if (symbol === 1025)
//       battleZones.push(
//         new Boundary({
//           position: {
//             x: j * Boundary.width + offset.x,
//             y: i * Boundary.height + offset.y,
//           },
//         })
//       );
//   });
// });

// travelZones.forEach((row, i) => {
//   row.forEach((symbol, j) => {
//     if (symbol === 1025)
//       battleZones.push(
//         new Boundary({
//           position: {
//             x: j * Boundary.width + offset.x,
//             y: i * Boundary.height + offset.y,
//           },
//         })
//       );
//   });
// });

const characters = [];
const villagerImg = new Image();
villagerImg.src = "./assets/img/villager/Idle.png";

const oldManImg = new Image();
oldManImg.src = "./assets/img/oldMan/Idle.png";

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Sprite({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
        })
      );
    }
    // 1031 === oldMan
    else if (symbol === 1031) {
      characters.push(
        new Sprite({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 60,
          },
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

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const movables = [
  background,
  ...boundaries,
  foreground,
  // ...battleZones,
  ...characters,
];
const renderables = [
  background,
  ...boundaries,
  // ...battleZones,
  ...characters,
  player,
  foreground,
];

// const battle = {
//   initiated: false,
// };

function animate() {
  const animationId = window.requestAnimationFrame(animate);
  renderables.forEach((renderable) => {
    renderable.draw();
  });

  let moving = true;
  player.animate = false;

  // if (battle.initiated) return;

  // activate a battle

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
        movable.position.y += 3;
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
        movable.position.x += 3;
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
        movable.position.y -= 3;
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
        movable.position.x -= 3;
      });
  }
}
// animate()

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;

    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;

    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});

let clicked = false;
addEventListener("click", () => {
  if (!clicked) {
    audio.Map.play();
    clicked = true;
  }
});
animate();
