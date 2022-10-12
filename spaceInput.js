import { spaceAnswers } from "./spaceAnswers.js";
import { answer, next } from "./spaceSetup.js";

export const check = document.getElementById('inputField').innerText;
export const enterButton = document.getElementById('checkButton').click();
export let inputBox = document.getElementById('inputField');
export let realAnswer = spaceAnswers[0].answer;

inputBox.onkeyup = function() {
    console.log(inputBox.value);
    checkAnswer();
    checkLetters();
};



function checkAnswer(){
    if (inputBox.value.toLowerCase()  == answer.toLowerCase()) {
        console.log("Success");
        success();
        clear();
    } else {
        console.log("OH MY GAWD")
    };
};

function success(){
    for (let i = 0; i < 1; i++) {
        next();
    }
};

function clear(){
    for (let i = 0; i < 1; i++) {
        inputBox.value = "";
    }
}

