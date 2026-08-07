let character = document.querySelector("#character2");
let flask = document.querySelector("#flask");
let popup = document.querySelector("#popup");

let overlapping=false;

function checkFlaskCollision() {

    let box1 = character2.getBoundingClientRect();
    let box2 = flask.getBoundingClientRect();

    overlapping =
        box1.left < box2.right &&
        box1.right > box2.left &&
        box1.top < box2.bottom &&
        box1.bottom > box2.top;

    if (overlapping) {
        popup.style.visibility = "visible";
    } else {
        popup.style.visibility = "hidden";
    }
}

document.addEventListener("keydown", (event) => {
   

    // Move UP
    if (
        event.key === "w" ||
        event.key === "W" ||
        event.key === "ArrowUp"
    ) {
        gsap.to(character2, {
            y: "-=30",
            duration: 0.5,
            onComplete: checkFlaskCollision //checks collision after each displacment
        });

    }

    // Move DOWN
    else if (
        event.key === "s" ||
        event.key === "S" ||
        event.key === "ArrowDown"
    ) {
       
        gsap.to(character2, {
            y: "+=30",
            duration: 0.5,
            onComplete: checkFlaskCollision //checks collision after each displacment
        });

    }

    // Move LEFT
    else if (
        event.key === "a" ||
        event.key === "A" ||
        event.key === "ArrowLeft"
    ) {
       
        gsap.to(character2, {
            x: "-=30",
            duration: 0.5,
            onComplete: checkFlaskCollision //checks collision after each displacment
        });

    }

    // Move RIGHT
    else if (
        event.key === "d" ||
        event.key === "D" ||
        event.key === "ArrowRight"
    ) {

        gsap.to(character2, {
            x: "+=30",
            duration: 0.5,
            onComplete: checkFlaskCollision //checks collision after each displacment
        });

    }

});