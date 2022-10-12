import { spaceAnswers } from "./spaceAnswers.js";
import { answer, currentId, next } from "./spaceSetup.js";


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
switch (checkLetters) {
    case 's':
        console.log('s');
        break;
    case 't':
        console.log('t');
        break;
    case 'r':
        console.log('r');
        break;
    
    case 'a':
        console.log('a');
        break;
    case 'w':
        console.log('w');
        break;
    case 'b':
        console.log('b');
        break;
    case 'e':
        console.log('e');
        break;
    case 'r':
        console.log('r');
        break;
    case 'y':
        console.log('y');
        break;
    default:
        console.log('not a letter');                                                                                                                            
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
