import { answers  } from "./answers.js";
export const nextButton = document.getElementById('rightButton').addEventListener ("click", next);
export const previousButton = document.getElementById('leftButton').addEventListener("click", previous);
export const displayText = document.getElementById('gameText');
export const displayDefinition = document.getElementById('gameTextDefinition');
export let currentText = 0;
export let currentDefinition = 0;
export let currentId = answers[0].word;
export let currentIdB = answers[0].definition;




console.log(currentId)
for (let i = 0; i < answers.length; i++) {
    displayText.innerHTML = JSON.stringify(answers[0].word);
}

for (let i = 0; i < answers.length; i++) {
    displayDefinition.innerHTML = JSON.stringify(answers[0].definition);
}

log();

export function next()
{
    move();
}

export function previous()
{   
    move(false);
}
export function next()
{
    move();
}

export function previous()
{   
    move(false);
}




export function move(advance = true)
export function move(advance = true)
{


    currentText = (currentText + (advance ? 1 : -1) + answers.length) % answers.length;
    currentId = answers[currentText].word;

    currentDefinition = (currentDefinition + (advance ? 1 : -1) + answers.length) % answers.length;
    currentIdB = answers[currentText].definition;

    displayText.innerHTML = JSON.stringify(currentId);
    displayDefinition.innerHTML = JSON.stringify(currentIdB);

    

    // previousText = (currentText + (advance ? 1: -1) + answers.length) % answers.length;
    // previousId = answers[previousText].word;

    // previousDefinition = (currentDefinition + (advance ? 1 : -1) + answers.length) % answers.length;
    // previousIdB = answers[previousIdB].definition;

    

    // previousText = (currentText + (advance ? 1: -1) + answers.length) % answers.length;
    // previousId = answers[previousText].word;

    // previousDefinition = (currentDefinition + (advance ? 1 : -1) + answers.length) % answers.length;
    // previousIdB = answers[previousIdB].definition;
    log();
}

export function log()
export function log()
{
    console.log("Word: " + currentText,
    currentId);
}
