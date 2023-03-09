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

    // case "W":
    //   keys.W.pressed = true;
    //   lastKey = "W";
    //   break;
    // case "A":
    //   keys.A.pressed = true;
    //   lastKey = "A";
    //   break;
    // case "S":
    //   keys.S.pressed = true;
    //   lastKey = "S";
    //   break;
    // case "D":
    //   keys.D.pressed = true;
    //   lastKey = "D";
    //   break;
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
    // case "W":
    //   keys.W.pressed = false;
    //   break;
    // case "A":
    //   keys.A.pressed = false;
    //   break;
    // case "S":
    //   keys.S.pressed = false;
    //   break;
    // case "D":
    //   keys.D.pressed = false;
    //   break;
  }
});
