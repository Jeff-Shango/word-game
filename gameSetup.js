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
for (const _element of answers) {
    displayText.innerHTML = JSON.stringify(answers[0].word);
};

for (const _element of answers) {
    displayDefinition.innerHTML = JSON.stringify(answers[0].definition);
};

log();

export function next()
{
    move();
}

export function previous()
{   
    move(false);
}





export function move(advance = true)
{


    currentText = (currentText + (advance ? 1 : -1) + answers.length) % answers.length;
    currentId = answers[currentText].word;

    currentDefinition = (currentDefinition + (advance ? 1 : -1) + answers.length) % answers.length;
    currentIdB = answers[currentText].definition;

    displayText.innerHTML = JSON.stringify(currentId);
    displayDefinition.innerHTML = JSON.stringify(currentIdB);

    

    log();
}

export function log()
{
    console.log("Word: " + currentText,
    currentId);
}
