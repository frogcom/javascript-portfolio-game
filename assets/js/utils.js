let jsonData = "";
let Dialoge;

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
      const next = document.getElementById("nextdetails");
      const close = document.getElementById("close");
      console.log(dialogeID);
      switch (character.uid) {
        case 1:
          ContentTitle = jsonData.projects.first.title;
          Dialoge = jsonData.projects.first.dialoge[dialogeID];
          next.addEventListener("click", function () {
            dialogeID++;
            addDialog(Dialoge);
            console.log(dialogeID);

            if (dialogeID == 2) {
              Dialoge = jsonData.projects.first.dialoge[dialogeID];
              addDialog(Dialoge);
            }
            // Dialoge = jsonData.projects.first.dialoge[dialogeID];
            if (dialogeID == 3) {
              Dialoge = jsonData.projects.first.dialoge[dialogeID][0].lasttxt;
              addDialog(Dialoge);
              document.getElementById("nextdetails").classList.add("hidden");
            }
          });

          close.addEventListener("click", function () {
            console.log(dialogeID);
            dialogeID = 1;
            document.getElementById("nextdetails").classList.remove("hidden");
          });

          break;
        default:
          ContentTitle = "";
          Dialoge = "";
          // Github = "";
          break;
      }

      // docuoment.getElementById("github").innerHTML = Github;
      document.getElementById("dialogetitle").innerHTML = ContentTitle;
      document.getElementById("textdivtext").innerHTML = Dialoge;
    }
  }
}

function addDialog(textOption) {
  // dialogeID++;
  document.getElementById("textdivtext").innerHTML = textOption;
}
