// Access the Input El and Timer Element..

let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");

let interval = 10;

// Set the interval to timer Element....

timer.textContent = interval;

// make the interval in decrease mode...

let uniqueId = setInterval(function() {
    interval = interval - 1;
    timer.textContent = interval;
    if (interval === 0) {
        clearInterval(uniqueId);
        timer.textContent = "BOOM!!";
    }
}, 1000);


// add the functionality to defuser element...

function defuseOrNot(event) {
    let key = event.key;
    if (key === "Enter" && defuser.value === "defuse" && interval !== 0) {
        clearInterval(uniqueId);
        timer.textContent = "You did it!";
    }
}

// add the eventlistener to defuser..
defuser.addEventListener("keydown", defuseOrNot);