fetch("data.json")
  .then((response) => response.json())
  .then((messages) => {
    jsonData = messages;
  })
  .catch((error) => console.error(error));

function startGame() {
  document.getElementById("startgame").classList.remove("zichtbaar");
  document.getElementById("startgame").classList.add("hidden");
}
function npcmessages() {
  let dialogueID = 1;
  console.log("test");
  switch (character.uid) {
    case 1:
      console.log("check");
      break;

    default:
      break;
  }
}
