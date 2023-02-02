fetch("data.json")
  .then((response) => response.json())
  .then((projects) => {
    console.log(projects);
  })
  .catch((error) => console.error(error));
