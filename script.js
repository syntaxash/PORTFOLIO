let character = document.querySelector("#character");

document.addEventListener("keydown", (event) => {
    if (event.key === 'w'||
        event.key === 'W'||
        event.key ==='ArrowUp') {
        gsap.to("#character", {
            y: "-=30",
            duration: 0.5
        });
    }
    else if (event.key === 's'||
             event.key === 'S'||
             event.key ==='ArrowDown') {
        gsap.to("#character", {
            y: "+=30",
            duration: 0.5
        });
    }
    else if (event.key === 'a'||
             event.key === 'A'||
             event.key ==='ArrowLeft') {
        gsap.to("#character", {
            x: "-=30",
            duration: 0.5
        });
    }
    else if (event.key === 'd'||
             event.key === 'D'||
             event.key ==='ArrowRight') {
        gsap.to("#character", {
            x: "+=30",
            duration: 0.5
        });
    }
});


