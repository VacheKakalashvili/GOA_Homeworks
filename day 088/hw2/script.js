import { handleAdd, handleMouseDown, handleRemove } from '/noteHandlers.js';
// 070510 //
const colorValue = document.getElementById("color");
const addItemIcon = document.getElementById("addItemIcon");

addItemIcon.addEventListener("click", handleAdd);

const mainContainer = document.getElementsByClassName("main-box-container")[0];
