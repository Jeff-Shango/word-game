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

function testBoolean(){
    if (checkLetters === true) {
        console.log("is true");
    } else {
        console.log("is not true");
    }
};

function checkLetters() {
switch (inputBox.value) {
    case 's':
        console.log('s'),
        clear();
    case 't':
        console.log('t'),
        clear();
    case 'r':
        console.log('r'),
        clear();
    case 'a':
        console.log('a'),
        clear();
    case 'w':
        console.log('w'),
        clear();
    case 'b':
        console.log('b'),
        clear();
    case 'e':
        console.log('e'),
        clear();
    case 'r':
        console.log('r'),
        clear();
    case 'y':
        console.log('y'),
        clear();
        break;
    default:
        console.log('not a letter'),
        clear();
};
};

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
