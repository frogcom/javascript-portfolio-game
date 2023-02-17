let jsonData = "";
let Dialoge;

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
    let dialogeID = 1;
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
      // let dialogeID = 1;
      const next = document.getElementById("nextdetails");
      const close = document.getElementById("close");
      dialogeID = 1;
      // const textdivtext = document.getElementById("textdivtext");
      document.getElementById("textdiv").classList.remove("hidden");

      console.log(dialogeID);
      switch (character.uid) {
        case 1:
          ContentTitle = jsonData.projects.first.title;
          Dialoge = jsonData.projects.first.dialoge[dialogeID];
          next.addEventListener("click", function () {
            ++dialogeID;
            switch (dialogeID) {
              case 2:
                Dialoge = jsonData.projects.first.dialoge[dialogeID];
                addDialog(Dialoge);
                // ++dialogeID;
                break;
              case 3:
                Dialoge = jsonData.projects.first.dialoge[dialogeID][0].lasttxt;
                addDialog(Dialoge);
                //++dialogeID;
                document.getElementById("nextdetails").classList.add("hidden");
                break;
              default:
                dialogeID = 1;
                break;
            }
            console.log(dialogeID);
            return false;
          });
          break;
        default:
          ContentTitle = "";
          Dialoge = "";
          dialogeID = 1;
          // Github = "";
          break;
      }
      close.addEventListener("click", function () {
        console.log(dialogeID);
        dialogeID = 1;
        document.getElementById("nextdetails").classList.remove("hidden");
        document.getElementById("textdiv").classList.add("hidden");
      });
      // docuoment.getElementById("github").innerHTML = Github;
      document.getElementById("dialogetitle").innerHTML = ContentTitle;
      document.getElementById("textdivtext").innerHTML = Dialoge;

      //   npcmessages();
      //    if true caracter messages
      //   collitions messages
    }
  }
}
function addDialog(textOption) {
  // dialogeID++;
  document.getElementById("textdivtext").innerHTML = textOption;
}
