// function to help the screen transition to and from dark and light
function navigateTo(screen) {
  const screen2 = document.querySelector(".screen-2");

  if (screen === "screen-2") {
    screen2.classList.add("active");
  }

  if (screen === "screen-1") {
    screen2.classList.remove("active");
  }
}

// function to have smiley image appear when clicking "O"
const darkLetter = document.getElementById("smiley-letter-white");
const whiteSmiley = document.getElementById("surprise-img");

const lightLetter = document.getElementById("smiley-letter-purple");
const purpleSmiley = document.getElementById("surprise-img2");

darkLetter.addEventListener("click", function() {

    if (whiteSmiley.classList.contains("show")) {
        whiteSmiley.classList.remove("show");
    } else {
        whiteSmiley.classList.add("show");
    }

});

lightLetter.addEventListener("click", function() {

    if (purpleSmiley.classList.contains("show")) {
        purpleSmiley.classList.remove("show");
    } else {
        purpleSmiley.classList.add("show");
    }

});