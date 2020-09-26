//Question 1
const changeImage = function(buttonName){
   image =  document.getElementById("image");
   switch(buttonName){
        case 'button1':
            image.src = "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg";
            break;
        case 'button2': 
            image.src = "https://i.pinimg.com/236x/8b/8f/4e/8b8f4e19a587ba64944c63038196db58--friends-tv-show-friends-season.jpg";
            break;  
        case 'button3': 
            image.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/phoebe-rachel-and-monica-friends-28330-1920x1200-1569418200.jpg?crop=0.627xw:1.00xh;0.236xw,0&resize=640:*";
            break;    
   }
};

const copyText = function(){
    text = document.getElementsByClassName("text");
    text[1].value = text[0].value;
};

//QUESTION 3 AND 4

person = [
    {
        name:"Glenn",
        age: 22,
        country: "India",
        hobbies:["dancing","singing"]
    },
    {
        name: "Siddharth",
        age: 35,
        country: "UK",
        hobbies:["reading","swimming","photography"]
    },
    {
        name: "Khuzaan",
        age: 25,
        country: "India",
        hobbies:["reading","badminton"]
    },
    {
        name: "Noella",
        age: 30,
        country: "Australia",
        hobbies:["reading","dancing","binge-watching"]
    }
];

function displayArray(){
    console.log("The objects in the array are:")
    for(var i = 0; i<person.length; i++){
        console.log(person[i]);
    }
};
function displayObjByAge(){
    console.log("The objects in the array where Age < 30 are:")
    for(var i = 0; i<person.length; i++){
        if(person[i].age < 30){
            console.log(person[i]);
        }
    }
};
function displayObjByCountry(){
    console.log("The objects in the array where Country = India are:")
    for(var i = 0; i<person.length; i++){
        if(person[i].country.toLowerCase() =="india"){
            console.log(person[i]);
        }
    }
}
displayArray();
displayObjByAge();
displayObjByCountry();

