// function npcmessages() {
//   let dialogeID = 1;
//   const next = document.getElementById("nextdetails");
//   const close = document.getElementById("close");
//   dialogeID = 1;
//   // const textdivtext = document.getElementById("textdivtext");
//   document.getElementById("textdiv").classList.remove("hidden");

//   console.log(dialogeID);
//   switch (character.uid) {
//     case 1:
//       ContentTitle = jsonData.projects.first.title;
//       Dialoge = jsonData.projects.first.dialoge[dialogeID];
//       next.addEventListener("click", function () {
//         ++dialogeID;
//         switch (dialogeID) {
//           case 2:
//             Dialoge = jsonData.projects.first.dialoge[dialogeID];
//             addDialog(Dialoge);
//             // ++dialogeID;
//             break;
//           case 3:
//             Dialoge = jsonData.projects.first.dialoge[dialogeID][0].lasttxt;
//             addDialog(Dialoge);
//             //++dialogeID;
//             document.getElementById("nextdetails").classList.add("hidden");
//             break;
//           default:
//             dialogeID = 1;
//             break;
//         }
//         console.log(dialogeID);
//         return false;
//       });
//       break;
//     default:
//       ContentTitle = "";
//       Dialoge = "";
//       dialogeID = 1;
//       // Github = "";
//       break;
//   }
//   close.addEventListener("click", function () {
//     console.log(dialogeID);
//     dialogeID = 1;
//     document.getElementById("nextdetails").classList.remove("hidden");
//     document.getElementById("textdiv").classList.add("hidden");
//   });
//   // docuoment.getElementById("github").innerHTML = Github;
//   document.getElementById("dialogetitle").innerHTML = ContentTitle;
//   document.getElementById("textdivtext").innerHTML = Dialoge;
// }
// function addDialog(textOption) {
//   // dialogeID++;
//   document.getElementById("textdivtext").innerHTML = textOption;
// }
