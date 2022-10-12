import { spaceAnswers } from "./spaceAnswers.js";

export const nextButton = document.getElementById('rightButton').addEventListener('click', next);
export const previousButton = document.getElementById('leftButton').addEventListener('click', previous);
export const displayText = document.getElementById('spaceText');
export const displayDefinition = document.getElementById('spaceGameDefinition');
export let currentText = 0;
export let currentDefinition = 0;
export let currentId = spaceAnswers[0].answer;
export let currentIdB = spaceAnswers[0].definition;
export let answer = spaceAnswers[0].displayAnswer;




console.log(currentId);
console.log(answer);
console.log(currentIdB);
console.log(spaceAnswers[0].answerInput)
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
