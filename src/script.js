const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
} else {
    document.body.classList.remove("light-mode");
}

// function to help the screen transition to and from dark and light
function navigateTo(screen) {
    const screen1 = document.querySelector(".screen-1");
    const screen2 = document.querySelector(".screen-2");

    if (screen === "screen-2") {
        screen2.classList.add("active");
        screen1.classList.add("inactive");
    }

    if (screen === "screen-1") {
        screen2.classList.remove("active");
        screen1.classList.remove("inactive");
    }
}

function setTheme(theme) {

    if (theme === "light") {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
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