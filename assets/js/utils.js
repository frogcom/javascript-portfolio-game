let jsonData = "";
let Dialoge;

function rectangularCollision({ rectangle1, rectangle2 }) {
  const rect1Right = rectangle1.position.x + rectangle1.width;
  const rect2Right = rectangle2.position.x + rectangle2.width;
  const rect1Bottom = rectangle1.position.y + rectangle1.height;
  const rect2Bottom = rectangle2.position.y + rectangle2.height - 48;
  return (
    rect1Right >= rectangle2.position.x &&
    rectangle1.position.x <= rect2Right &&
    rectangle1.position.y <= rect2Bottom &&
    rect1Bottom >= rectangle2.position.y
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
      console.log("collideee");
      const next = document.getElementById("nextdetails");
      const close = document.getElementById("close");
      dialogeID = 1;
      // const textdivtext = document.getElementById("textdivtext");
      document.getElementById("textdiv").classList.remove("hidden");

      console.log(dialogeID);
      switch (character.uid) {
        case 1:
          ContentTitle = jsonData.projects.eerste.title;

          next.addEventListener("click", function () {
            ++dialogeID;

            if (dialogeID == 1) {
              Dialoge = jsonData.projects.eerste.dialoge[dialogeID];
            }
            if (dialogeID == 2) {
              Dialoge = jsonData.projects.eerste.dialoge[dialogeID];
            }
            if (dialogeID == 3) {
              Dialoge = jsonData.projects.eerste.dialoge[dialogeID];
              addDialog(Dialoge);
              //++dialogeID;
              document.getElementById("nextdetails").classList.add("hidden");
            }

            // switch (dialogeID) {
            //   case 2:
            //     Dialoge = jsonData.projects.eerste.dialoge[dialogeID];
            //     addDialog(Dialoge);
            //     // ++dialogeID;
            //     break;
            //   case 3:
            //     Dialoge =
            //       jsonData.projects.eerste.dialoge[dialogeID][0].lasttxt;
            //     addDialog(Dialoge);
            //     //++dialogeID;
            //     document.getElementById("nextdetails").classList.add("hidden");
            //     break;
            //   default:
            //     dialogeID = 1;
            //     break;
            // }
            console.log(dialogeID);
            return false;
          });
          break;
        // case 1:
        //   ContentTitle = jsonData.projects.eerste.title;
        //   Dialoge = jsonData.projects.eerste.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;
        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.eerste.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge =
        //           jsonData.projects.eerste.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 2:
        //   ContentTitle = jsonData.projects.tweede.title;
        //   Dialoge = jsonData.projects.tweede.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;
        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.tweede.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge =
        //           jsonData.projects.tweede.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 3:
        //   ContentTitle = jsonData.projects.derde.title;
        //   Dialoge = jsonData.projects.derde.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;
        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.derde.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge = jsonData.projects.derde.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 4:
        //   ContentTitle = jsonData.projects.vierde.title;
        //   Dialoge = jsonData.projects.vierde.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;

        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.vierde.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge =
        //           jsonData.projects.vierde.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 5:
        //   ContentTitle = jsonData.projects.vijfde.title;
        //   Dialoge = jsonData.projects.vijfde.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;

        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.vijfde.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge =
        //           jsonData.projects.vijfde.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 6:
        //   ContentTitle = jsonData.projects.sixth.title;
        //   Dialoge = jsonData.projects.sixth.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;
        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.sixth.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge = jsonData.projects.sixth.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 7:
        //   ContentTitle = jsonData.projects.seventh.title;
        //   Dialoge = jsonData.projects.seventh.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;

        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.seventh.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge =
        //           jsonData.projects.seventh.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 8:
        //   ContentTitle = jsonData.projects.acht.title;
        //   Dialoge = jsonData.projects.acht.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;

        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.acht.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge = jsonData.projects.acht.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 9:
        //   ContentTitle = jsonData.projects.negen.title;
        //   Dialoge = jsonData.projects.negen.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;

        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.negen.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge = jsonData.projects.negen.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 10:
        //   ContentTitle = jsonData.projects.tien.title;
        //   Dialoge = jsonData.projects.tien.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;

        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.tien.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge = jsonData.projects.tien.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        //   break;
        // case 11:
        //   ContentTitle = jsonData.projects.eleven.title;
        //   Dialoge = jsonData.projects.eleven.dialoge[dialogeID];
        //   next.addEventListener("click", function () {
        //     ++dialogeID;

        //     switch (dialogeID) {
        //       case 2:
        //         Dialoge = jsonData.projects.eleven.dialoge[dialogeID];
        //         addDialog(Dialoge);
        //         // ++dialogeID;
        //         break;
        //       case 3:
        //         Dialoge =
        //           jsonData.projects.eleven.dialoge[dialogeID][0].lasttxt;
        //         addDialog(Dialoge);
        //         //++dialogeID;
        //         document.getElementById("nextdetails").classList.add("hidden");
        //         break;
        //       default:
        //         dialogeID = 1;
        //         break;
        //     }
        //     console.log(dialogeID);
        //     return false;
        //   });
        // break;
        default:
          ContentTitle = "";
          Dialoge = "";
          dialogeID = 1;
          // Github = "";
          break;
      }
      close.addEventListener("click", function closeClickHandler() {
        dialogeID = 1;
        document.getElementById("nextdetails").classList.remove("hidden");
        document.getElementById("textdiv").classList.add("hidden");
        console.log(dialogeID);
      });
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
