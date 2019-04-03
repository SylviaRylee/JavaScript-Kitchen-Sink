var firstName='Sylvia';

const states=50;

console.log(states);

// code to add 5 + 4
var sum=5 + 4;
var sum= 9;

console.log(sum);

function sayHello() {
      alert ("Hello" + " " + "world!");
}
sayHello();

let name = ["Charles", "Abby", "James", "John"];
let age = [21, 27, 18, 17];

function checkAge (name, age) {
if(age < 21) {
    alert ("Sorry " + name + ", you aren't old enough to view this page!");
    
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favoriteVegetables = ["brussels sprouts", "beets", "arugula", "broccoli"];

for (let v=0; v<favoriteVegetables.length; v++) {
    console.log(favoriteVegetables[v]);
}


let names = [
    "Murph",
    "Meredith",
    "Blake",
    "Katie",
    "Alex",
];

let ages = [
    20,
    35,
    85,
    19,
    29,

];

for(var i=0; i < names.length; i++){
    checkAge(names[i], ages[i]);
  }

var word = "Hello World!"

function getLength (x) {
    return(x.length)
    
}

var pie = getLength (word)

if (pie % 2 === 0) { 
    console.log("This world is nice and even!");

} else { 
    console.log("The world is an odd place!");

}

// console.log(pie);

// if (x % 2 == 0 ) {
//     console.log ("This world is nice and even!");
// else 
//     console.log ("The world is an odd place!")


// }