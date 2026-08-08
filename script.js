// function to help the screen transition to and from dark and light
function navigateTo(targetScreen) {
  const slider = document.getElementById('slider');
  
  if (targetScreen === 'screen-2') {
    slider.classList.remove('slide-to-screen-1');
    slider.classList.add('slide-to-screen-2');
  } else {
    slider.classList.remove('slide-to-screen-2');
    slider.classList.add('slide-to-screen-1');
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