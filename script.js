let numberOfGuitarButtons = document.querySelectorAll(".guitar").length;

for (let i = 0; i < numberOfGuitarButtons; i++) {
  document
    .querySelectorAll(".guitar")
    [i].addEventListener("click", function () {
      let buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {
        case "C":
          let cMajor = new Audio("sounds/c-major.mp3");
          cMajor.play();
          break;

        case "E":
          let eMajor = new Audio("sounds/e-major.mp3");
          eMajor.play();
          break;

        case "A":
          let aMajor = new Audio("sounds/a-major.mp3");
          aMajor.play();
          break;

        case "D":
          let dMajor = new Audio("sounds/d-major.mp3");
          dMajor.play();
          break;

        case "G":
          let gMajor = new Audio("sounds/g-major.mp3");
          gMajor.play();
          break;

        default:
          console.log(buttonInnerHTML);
          break;
      }
    });
}
