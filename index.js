function makeDropdownAppear(father) {
  father.addEventListener("click", () => {
    let a = document.querySelectorAll(".dropdown li");
    a.forEach((element) => {
      if (element.style.display === "block") {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    });
  });
}

const h1 = document.querySelector(".logo");
makeDropdownAppear(h1);
