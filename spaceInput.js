import { currentId } from "./spaceSetup.js";

export const check = document.getElementById('inputField').innerText;
export const enterButton = document.getElementById('checkButton').click();
export let inputBox = document.getElementById('inputField');

inputBox.onkeyup = function() {
    console.log(inputBox.value);
    checkLetters();
};

function checkLetters() {
    if(inputBox.value.toLowerCase)
}
