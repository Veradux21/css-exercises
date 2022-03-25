// W3 Conditionals
let hour = 19;

if (hour < 10){
    greeting="Good Morn";
} else if (hour < 18){
    greeting="Good Day";
} else {
    greeting = "Good Evening";
}

alert(greeting)

// Javascript.info 
//Check range between, inclusive
let age = 11;

if ( age >= 14 && age <= 90) {
    console.log(true)
} else{
    console.log(false)
};

// Check Range, NOT

if(age <= 14 && age >=90){}
if ( age !>= 14 && age !<= 90) {}