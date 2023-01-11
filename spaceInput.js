import { spaceAnswers } from "./spaceAnswers.js";
import { answer, currentId, next } from "./spaceSetup.js";

export const letterBox = document.getElementById('correctLetters');
export const check = document.getElementById('inputField').innerText;
export const enterButton = document.getElementById('checkButton').click();
export let inputBox = document.getElementById('inputField');
export let realAnswer = spaceAnswers[0].answer;
inputBox.onkeyup = function() {
    console.log(inputBox.value);
    checkAnswer();
    console.log(checkLetters());
};

function checkLetters() {
switch (inputBox.value) {
    case 's':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 't':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 'r':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 'a':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 'w':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 'b':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 'e':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 'r':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    case 'y':
        console.log('is a letter'),
        clear(),
        displayAnswer();
        break;
    default:
        console.log('not a letter'),
        clear();
};
};

function displayAnswer() {
    for (i = 0; i < 0; i++) {
        
    }
}

// switch (checkLetters) {
//     case 0:
//       for(let i = 0; i < spaceAnswers[0].displayAnswer.length; i++) {
//         switch(strawberry) {
//             case 's':
//                 console.log("S")
//         }
//         }
//     };



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
