fetch("./actors.json")
  .then((response) => {
    return response.json();
  })
  .then((actors) => {
    actors.forEach((specificActor) => {
      //console.log(specificActor);
      const template = document.querySelector("#myTemplate").content;
      const copy = template.cloneNode(true);
      copy.querySelector(".name").textContent = specificActor.fullname;
      copy.querySelector(".movie").textContent = specificActor.movie;
      copy.querySelector("button").addEventListener("click", () => {
        modal.querySelector(".modal-name").textContent = specificActor.fullname;
        modal.querySelector(".modal-movie").textContent = specificActor.movie;
        modal.classList.remove("hide");
      });
      document.querySelector(".actors").appendChild(copy);
    });
  });
  const modal = document.querySelector(".modal-background");

modal.querySelector("button").addEventListener("click", () => {
  modal.classList.add("hide");
});
