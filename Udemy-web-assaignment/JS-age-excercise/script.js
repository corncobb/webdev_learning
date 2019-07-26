
var age = prompt("What is your age?")

if(age < 0){
console.log("You cannot be less than 0 years old.");
}

else if(age < 18){
console.log("Sorry, you are not old enough.");
}

else if(age < 21){
console.log("You can come in but you cannot drink.");
}

else if(age == 21){
console.log("Happy 21st Birthday!");
}

else{
console.log("Come on in. You can drink");
}

if(age % 2 != 0){
console.log("Your age is odd.");
}
