let character = document.querySelector("#character");
let laboratory = document.querySelector("#flask1");
let dialog_box = document.querySelector("#popup");


//checking collision 

let overlapping = false;

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
        popup.style.visibility = "visible";
    }
    else {
        popup.style.visibility = "hidden";
    }
}


// Hide dialog box when page starts
popup.style.visibility = "hidden";



//keydown functions

document.addEventListener("keydown", (event) => {
    if (event.key === 'w' ||
        event.key === 'W' ||
        event.key === 'ArrowUp') {
        gsap.to("#character", {
            y: "-=30",
            duration: 0.5,
            onComplete: checkCollision //checks collision after each displacment 
        });
    }
    else if (event.key === 's' ||
        event.key === 'S' ||
        event.key === 'ArrowDown') {
        gsap.to("#character", {
            y: "+=30",
            duration: 0.5,
            onComplete: checkCollision //checks collision after each displacment 
        });
    }
    else if (event.key === 'a' ||
        event.key === 'A' ||
        event.key === 'ArrowLeft') {
        gsap.to("#character", {
            x: "-=30",
            duration: 0.5,
            onComplete: checkCollision //checks collision after each displacment 
        });
    }
    else if (event.key === 'd' ||
        event.key === 'D' ||
        event.key === 'ArrowRight') {
        gsap.to("#character", {
            x: "+=30",
            duration: 0.5,
            onComplete: checkCollision //checks collision after each displacment 
        });
    }
    //page switch
    else if ((event.key === 'e' || event.key === 'E')
        && overlapping === true) {
        window.location.href = "laboratory.html";
    }

});


