let character = document.querySelector("#character");
let laboratory = document.querySelector("#laboratory");
let dialog_box = doucument.querySelector("dialog_box");


//keydown functions

document.addEventListener("keydown", (event) => {
    if (event.key === 'w' ||
        event.key === 'W' ||
        event.key === 'ArrowUp') {
        gsap.to("#character", {
            y: "-=30",
            duration: 0.5
        });
    }
    else if (event.key === 's' ||
        event.key === 'S' ||
        event.key === 'ArrowDown') {
        gsap.to("#character", {
            y: "+=30",
            duration: 0.5
        });
    }
    else if (event.key === 'a' ||
        event.key === 'A' ||
        event.key === 'ArrowLeft') {
        gsap.to("#character", {
            x: "-=30",
            duration: 0.5
        });
    }
    else if (event.key === 'd' ||
        event.key === 'D' ||
        event.key === 'ArrowRight') {
        gsap.to("#character", {
            x: "+=30",
            duration: 0.5
        });
    }
    //page switch
    else if ( (event.key === 'e' || event.key === 'E') && overlapping === true) {
        window.loaction.href = 'laboratory.html';
    }

});

//cheecking overlap

let box1 = character.getBoundingClientRect();
let box2 = laboratory.getBoundingClientRect();

let overlapping = false;

if (
    box1.right < box2.right ||
    box1.left < box2.left ||
    box1.top < box2.top ||
    box1.bottom < box2.bottom) {

    let overlapping = true;
}

if (overlapping != true) {
    dialog_box.style.visibility = "hidden";
}




