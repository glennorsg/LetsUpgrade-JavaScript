//QUESTION 1
var searchChar = function(string, char){
    let index = string.indexOf(char);
    if(index == -1){
        document.getElementById("searchResult").innerHTML=`${char} not found!`;
    } else {
        document.getElementById("searchResult").innerHTML=`${char} found at position ${index+1}`;
    }
};

//QUESTION 2
var convertToSeconds = function(minutes){
    let seconds = minutes * 60;
    document.getElementById("convertedTime").innerHTML=`Seconds: ${seconds}`;
};

var fruits = ["mango","apple","kiwi","banana","orange","sweet lime","cherry","blackberry"];
document.getElementById("array").innerHTML=fruits;

//QUESTION 3
var findInArray = function(element){
    let index = fruits.indexOf(element);
    if(index == -1){
        document.getElementById("arraySearchResult").innerHTML=`${element} not found!`;
    } else {
        document.getElementById("arraySearchResult").innerHTML=`${element} found at position ${index+1}`;
    }
};

//QUESTION 4
let a = [];
fruits.forEach((fruit) => {
    if(fruit.indexOf('a') != -1){
        a.push(fruit);
    }
});
document.getElementById("elements").innerHTML=`Fruits Containing 'A' : ${a} `;

//QUESTION 5
var reverse =[];
 for(let i=fruits.length; i>=0; i--){
     reverse.push(fruits[i]);
 }
document.getElementById("reverseArray").innerHTML = `Reverse by for loop: ${reverse} `;


