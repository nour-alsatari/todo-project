'use strict';
let userName = prompt ("What is your name?");
let gender = prompt ("Are you a male or a female?")
let title;
if (gender.toLowerCase() == "male"){
    title = "Mr ";
} else if (gender.toLowerCase() == "female" ) {
    title = "Ms ";
} else {
    title = '';
}
let age = prompt ("how old are you?");
if (age <= 0){
    alert("this isn't a valid age")
    age = prompt ("how old are you again?");
}

let welcomeMessagePrefrence = confirm ("Do you wish to skip the welcoming message?")

if (welcomeMessagePrefrence)
{

} else {
    alert (`Welcome to the website ${title}${userName}`)
}
console.log(title);

// -------------------------------------------------------------------------
// today's task

function askQuestion(question) {
    let answer
    return answer = prompt(question, `"yes or no"`);
}

let answer1 = askQuestion("Do you enjoy coding?");
let answer2 = askQuestion("Do you spesk english?");
let answer3 = askQuestion("Do you like food?");


let answersArray = [answer1, answer2, answer3];


answersArray = validateAnswers(answersArray);
traverse(answersArray);
// console.log (answersArray);

function validateAnswers(answersArray) {
    for (let i = 0; i < answersArray.length; i++) {
        if (answersArray[i] != "yes" && answersArray[i] != "no") {
            answersArray[i] = "invalid";
        }
    }
    return answersArray;
}

function traverse() {
    for (let i = 0; i < answersArray.length; i++) {
        console.log(answersArray[i])
    }
}