const variable = document.getElementById("hello");
const sections = document.getElementsByClassName("hidden");
const navigation = document.getElementById("navigation")

function createElements(){
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.visibility = "visible";
    sections[i].style.opacity = "1";
  }
}

variable.addEventListener("click", createElements);
