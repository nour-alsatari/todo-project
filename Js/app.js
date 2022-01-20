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