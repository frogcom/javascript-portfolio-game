function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + (rectangle2.height - 48) &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  );
}

function checkForCharacterCollision({
  characters,
  player,
  characterOffset = { x: 0, y: 0 },
}) {
  // monitor for character collision
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {
          ...character,
          position: {
            x: character.position.x + characterOffset.x,
            y: character.position.y + characterOffset.y,
          },
        },
      })
    ) {
      // const textdivtext = document.getElementById("textdivtext");
      document.getElementById("textdiv").style.display = "block";
      const br = "<br />";
      const next = document.getElementById("nextdetails");
      switch (character.uid) {
        case 1:
          ContentTitle = "gays";
          ContentUser = "hello gay," + br + "femboys are gay";

          break;
        case 2:
          ContentTitle = "tum";
          ContentUser = "i love you<3";
          break;
        default:
          ContentTitle = "";
          ContentUser = "";
          break;
      }
      next.addEventListener("click", function () {
        addDialog("and you are to");
      });
      addDialog(ContentUser)``;
      document.getElementById("dialogetitle").innerHTML = ContentTitle;
    }
  }
}

function addDialog(textOption) {
  document.getElementById("textdivtext").innerHTML = textOption;
}
