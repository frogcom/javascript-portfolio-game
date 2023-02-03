let jsonData = "";

fetch("data.json")
  .then((response) => response.json())
  .then((project) => {
    jsonData = project;
  })
  .catch((error) => console.error(error));

function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + (rectangle2.height - 48) &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  );
}
let dialogeID = 1;
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
          ContentTitle = jsonData.projects.first.title;
          Dialoge = jsonData.projects.first.dialoge[0][dialogeID];
          next.addEventListener("click", function () {
            dialogeID++;
            Dialoge = jsonData.projects.first.dialoge[0][dialogeID];
            addDialog(Dialoge);
            if (dialogeID == 3) {
              Dialoge =
                jsonData.projects.first.dialoge[0][dialogeID][0].lasttxt;
              addDialog(Dialoge);
              document.getElementById("nextdetails").style.display = "none";
            }
          });

          break;
        case 2:
          ContentTitle = jsonData.projects.second.title;
          Dialoge = jsonData.projects.second.dialoge[0][dialogeID];
          next.addEventListener("click", function () {
            dialogeID++;
            Dialoge = jsonData.projects.second.dialoge[0][dialogeID];
            addDialog(Dialoge);
          });
          if (dialogeID == 3) {
            Dialoge = jsonData.projects.second.dialoge[0][dialogeID][0];
            addDialog(Dialoge);
          }
          break;
        default:
          ContentTitle = "";
          Dialoge = "";
          // Github = "";
          break;
      }

      // document.getElementById("github").innerHTML = Github;
      document.getElementById("dialogetitle").innerHTML = ContentTitle;
      document.getElementById("textdivtext").innerHTML = Dialoge;
    }
  }
}

function addDialog(textOption) {
  // dialogeID++;
  document.getElementById("textdivtext").innerHTML = textOption;
}
