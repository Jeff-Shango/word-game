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
for (let i = 0; i < spaceAnswers.length; i++) {
    displayText.innerHTML = JSON.stringify(spaceAnswers[0].answerInput);
}

for (let i = 0; i < spaceAnswers.length; i++) {
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

    

    // previousText = (currentText + (advance ? 1: -1) + spaceAnswers.length) % spaceAnswers.length;
    // previousId = spaceAnswers[previousText].answer;

    // previousDefinition = (currentDefinition + (advance ? 1 : -1) + spaceAnswers.length) % spaceAnswers.length;
    // previousIdB = spaceAnswers[previousIdB].definition;
    log();
}

function log()
{
    console.log("Word: " + currentText,
    currentId);
}
