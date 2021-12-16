var getDate = prompt("Ange datum:")
if (getDate === null || getDate === '') {
    getDate = "-"
}
document.getElementById("date").innerHTML = getDate;

var count = 0;
updateCounter(0);

function updateCounter(increment) {
    count += increment;
    document.getElementById("counter").innerHTML = count;
}

document.addEventListener("keydown", function onEvent(event) {
    if (event.key === "ArrowUp") {
        updateCounter(1);
    }
    else if (event.key === "ArrowDown" && count > 0) {
        updateCounter(-1);
    }
});