// Selecting elements
let character = document.querySelector("#character");
let laboratory = document.querySelector("#laboratory");
let dialog_box = document.querySelector("#dialog_box");

let overlapping = false;


// ========================================
// CHECKING OVERLAP
// ========================================

function checkCollision() {

    let box1 = character.getBoundingClientRect();
    let box2 = laboratory.getBoundingClientRect();

    overlapping =
        box1.left < box2.right &&
        box1.right > box2.left &&
        box1.top < box2.bottom &&
        box1.bottom > box2.top;


    // Show dialog box if character is overlapping laboratory
    if (overlapping) {
        dialog_box.style.visibility = "visible";
    }
    else {
        dialog_box.style.visibility = "hidden";
    }
}


// Hide dialog box when page starts
dialog_box.style.visibility = "hidden";


// ========================================
// KEYDOWN FUNCTIONS
// ========================================

document.addEventListener("keydown", (event) => {

    // Move UP
    if (
        event.key === "w" ||
        event.key === "W" ||
        event.key === "ArrowUp"
    ) {

        gsap.to("#character", {
            y: "-=30",
            duration: 0.5,
            onComplete: checkCollision
        });

    }


    // Move DOWN
    else if (
        event.key === "s" ||
        event.key === "S" ||
        event.key === "ArrowDown"
    ) {

        gsap.to("#character", {
            y: "+=30",
            duration: 0.5,
            onComplete: checkCollision
        });

    }


    // Move LEFT
    else if (
        event.key === "a" ||
        event.key === "A" ||
        event.key === "ArrowLeft"
    ) {

        gsap.to("#character", {
            x: "-=30",
            duration: 0.5,
            onComplete: checkCollision
        });

    }


    // Move RIGHT
    else if (
        event.key === "d" ||
        event.key === "D" ||
        event.key === "ArrowRight"
    ) {

        gsap.to("#character", {
            x: "+=30",
            duration: 0.5,
            onComplete: checkCollision
        });

    }


    // ========================================
    // ENTER LABORATORY
    // ========================================

    else if (
        (event.key === "e" || event.key === "E") &&
        overlapping === true
    ) {

        window.location.href = "laboratory.html";

    }

});