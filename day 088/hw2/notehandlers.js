export function handleAdd() {
    let newBox = document.createElement("div");
    newBox.classList.add("box-container");
    newBox.innerHTML = `
    <form class="box-bar">
        <div class="box-bar"> 
            <span id="x">&#x2718;</span>
            <input type="color" id="textColorPicker" title="Change text color">
            <input type="color" id="borderColorPicker" title="Change border color">
        </div>
        <textarea name="ta" id="ta" placeholder="Enter text..."></textarea>
    </form>
    `;

    const boxBar = newBox.querySelector(".box-bar");
    const exitElement = newBox.querySelector("#x");
    const txtArea = newBox.querySelector("#ta");
    const textColorPicker = newBox.querySelector("#textColorPicker");
    const borderColorPicker = newBox.querySelector("#borderColorPicker");

    newBox.style.background = colorValue.value;

    mainContainer.appendChild(newBox);

    exitElement.addEventListener("click", handleRemove);

    textColorPicker.addEventListener("input", () => {
        txtArea.style.color = textColorPicker.value;
    });

    borderColorPicker.addEventListener("input", () => {
        newBox.style.borderColor = borderColorPicker.value;
    });

    boxBar.addEventListener("mousedown", handleMouseDown);
    txtArea.addEventListener("mousedown", (e) => e.stopPropagation());
}

export function handleRemove(event) {
    event.target.closest(".box-container").remove();
}

export function handleMouseDown(e) {
    e.preventDefault();
    isDragging = true;
    const boxContainer = e.target.closest(".box-container");
    oldX = e.clientX;
    oldY = e.clientY;
    // 070510 //
    function handleMove(e) {
        if (!isDragging) return;

        newY = oldY - e.clientY;
        newX = oldX - e.clientX;
        boxContainer.style.top = (boxContainer.getBoundingClientRect().top - newY) + "px";
        boxContainer.style.left = (boxContainer.getBoundingClientRect().left - newX) + "px";
        oldX = e.clientX;
        oldY = e.clientY;
    }

    function handleMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleMouseUp);
}
