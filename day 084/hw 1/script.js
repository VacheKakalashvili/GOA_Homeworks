// Get the HTML element with the ID "child-container"
const child = document.getElementById("child-container");

// Initialize position variables for left (x-axis) and top (y-axis)
let left = 0;
let y = 0;

// Initialize the direction of movement. Starting with "right".
let direct = "right"

// Create a function to move the element in intervals
const moveRight = setInterval(function() {
    // If the direction is "right", increment the left position
    if (direct == "right") {
        left++;
        // When the element reaches the right edge (300px), change direction to "bottom"
        if (left == 300) {
            direct = "bottom";
        }
    } 
    // If the direction is "bottom", increment the y position
    else if (direct == "bottom") {
        y++;
        // When the element reaches the bottom edge (300px), change direction to "left"
        if (y == 300) {
            direct = "left";
        }
    } 
    // If the direction is "left", decrement the left position
    else if (direct == "left") {
        left--;
        // When the element reaches the left edge (0px), change direction to "top"
        if (left == 0) {
            direct = "top";
        }
    } 
    // If the direction is "top", decrement the y position
    else {
        y--;
        // When the element reaches the top-left corner (0px, 0px), stop the interval
        if (y == 0 && left == 0) {
            clearInterval(moveRight);
        }
    }

    // Update the element's position based on the calculated left and top values
    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 10);  // The function executes every 10 milliseconds
