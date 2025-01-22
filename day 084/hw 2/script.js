// Get the HTML element with the ID "child-container"
const child = document.getElementById("child-container");

// Initialize position variables for left (x-axis) and top (y-axis)
let left = 0;
let y = 0;

// Add an event listener to detect key presses
document.addEventListener("keydown", function(event) {
    // Check which key was pressed and adjust the position accordingly
    switch(event.key) {
        case "ArrowRight": // Right arrow key
            left++;
            break;
        case "ArrowDown": // Down arrow key
            y++;
            break;
        case "ArrowLeft": // Left arrow key
            left--;
            break;
        case "ArrowUp": // Up arrow key
            y--;
            break;
    }

    // Ensure the block doesn't move out of bounds (optional)
    if (left < 0) left = 0;
    if (y < 0) y = 0;
    if (left > 300) left = 300; // assuming 300px is the container's width
    if (y > 300) y = 300; // assuming 300px is the container's height

    // Update the element's position based on the calculated left and top values
    child.style.left = left + 'px';
    child.style.top = y + 'px';
});
