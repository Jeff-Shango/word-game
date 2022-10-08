import { answers  } from "./answers.js";


const displayText = document.getElementById('gameText');
const displayDefinition = document.getElementById('gameTextDefinition');
let currentText = 0;
let currentDefinition = 0;
let currentId = answers[0].word;
let currentIdB = answers[0].definition;
const nextButton = document.getElementById('rightButton').addEventListener ("click", move, true)

for (let i = 0; i < answers.length; i++) {
    displayText.innerHTML = JSON.stringify(answers[0].word);
}

for (let i = 0; i < answers.length; i++) {
    displayDefinition.innerHTML = JSON.stringify(answers[0].definition);
}

log();

// function next()
// {
//     move();
// }

// function previous()
// {   
//     move(false);
// }



function move(advance = true)
{
    currentText = (currentText + (advance ? 1 : -1) + answers.length) % answers.length;
    currentId = answers[currentText].word;

    currentDefinition = (currentDefinition + (advance ? 1 : -1) + answers.length) % answers.length;
    currentIdB = answers[currentText].definition;

    displayText.innerHTML = JSON.stringify(currentId);
    displayDefinition.innerHTML = JSON.stringify(currentIdB);
    log();
}

function log()
{
    console.log("Word: " + currentText,
    currentId);
}

