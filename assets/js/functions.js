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
