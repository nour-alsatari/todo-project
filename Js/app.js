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

// today's task

let answer1 = prompt ("Do you enjoy coding?", "yes or no");
let answer2 = prompt ("Do you spesk english?", "yes or no");
let answer3 = prompt ("Do you like food?", "yes or no");
let answersArray = [];

function validateAnswers(){
if (answer1 != "yes" && answer1 != "no"){
    answer1 = "invalid";
}
console.log(answer1);

if (answer2 != "yes" && answer2 != "no"){
    answer2 = "invalid";
}
console.log(answer2);

if (answer3 != "yes" && answer3 != "no"){
    answer3 = "invalid";
}
console.log(answer3);
}

validateAnswers();

answersArray.push(answer1);
answersArray.push(answer2);
answersArray.push(answer3);

for (let i = 0 ; i < answersArray.length ; i++){
console.log(answersArray[i])
} 