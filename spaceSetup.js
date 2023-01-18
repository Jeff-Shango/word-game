import { spaceAnswers } from "./spaceAnswers.js";

const nextButton = document.getElementById('rightButton').addEventListener ('click', next);
const previousButton = document.getElementById('leftButton').addEventListener('click', previous);
const displayText = document.getElementById('spaceText');
const displayDefinition = document.getElementById('spaceGameDefinition');

let currentText = 0;
let currentDefinition = 0;
let currentId = spaceAnswers[0].answerInput;
let currentIdB = spaceAnswers[0].definition;




console.log(currentId)
for (const _element of spaceAnswers) {
    displayText.innerHTML = JSON.stringify(spaceAnswers[0].answerInput);
}

for (const _element of spaceAnswers) {
    displayDefinition.innerHTML = JSON.stringify(spaceAnswers[0].definition);
}

log();

function next()
{
    move();
}

function previous()
{   
    move(false);
}




function move(advance = true)
{

    currentText = (currentText + (advance ? 1 : -1) + spaceAnswers.length) % spaceAnswers.length;
    currentId = spaceAnswers[currentText].answerInput;

    currentDefinition = (currentDefinition + (advance ? 1 : -1) + spaceAnswers.length) % spaceAnswers.length;
    currentIdB = spaceAnswers[currentText].definition;

    displayText.innerHTML = JSON.stringify(currentId);
    displayDefinition.innerHTML = JSON.stringify(currentIdB);

    log();
}

function log()
{
    console.log("Word: " + currentText,
    currentId);
}
