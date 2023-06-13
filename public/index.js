///......INSTALLATION OF TYPESCRIPT...................
//To install typescript globally use the command 'npm install -g typescript' 
const container = ["bag", "bucket", "cup", "basin", "plate"];
console.log(container);
// .................TO COMPILE TYPESCRIPT TO JAVASCRIPT...................
//use the command 'tsc filename -w' to initiate an automatic watch on the  Ts file, so it compiles automatically after saving the file.
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
    console.log(input);
});
// .....................AUTOMATIC COMPILLATION.......................
//To compile a file use 'tsc filename.ts' on the terminal and that will automatically create a JS file with the same file name in which everytimg will be compiled into. but if a Js file with same name already exist, it compiles directly to that file.
//.......... STRICT NATURE AS REGARDS TYPES OF VARIABLE(INFERENCE and DECLARED TYPE)........................
let footballer = 'Ronaldo';
let age = 50;
let isSkillfull = true;
// footballer = 50 (This will throw an error as the varriable  was initially declared a string. Typescript INFERS(INFERENCE) the types at the moment of initialization if a variable is not defined as regards it type)
footballer = 'Messi';
// age = 'Johnson' (This will throw errow as age was initialized as a number and not a string)
age = 20;
// isSkillfull = 'yes' (This will throwberrow for the nsame reason. Typescrit is strict with types)
isSkillfull = false;
//.................DECLARED or DEFINED TYPE................................
// const circumference = (diameter)=> {
//     return diameter * Math.PI
// }
// console.log(circumference('John')) ............. NAN: Not A Number will be displayed on the console.
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(10));
//In the above instance the function will no longer accept any parameter except a number. every other value will throw error immediately
// ............................TYPESCRIPT WITH ARRAYS AND OBJECTS.................................
const foodItems = ['rice', 'beans', 'yam', 'cassava'];
foodItems.push('tomatoes');
// foodItems.push(true)
// foodItems.push(20)
// foodItems[0] = 'oriza-sativa'
// foodItems[3] = true
console.log(foodItems);
// Other Example
const studentsAge = [10, 2, 5, 9, 20, 24];
studentsAge.push(33);
studentsAge.push(38);
// studentsAge.push('Juli')
// studentsAge.push(true)
studentsAge[1] = 22;
studentsAge[5] = 234;
// studentsAge[1] = 'eight'
// studentsAge[1] = true
console.log(studentsAge);
// ...Mixed Arrays....
const mixedTypes = ['john', 20, 'sule', 'lui', 54];
mixedTypes.push(78);
mixedTypes.push('james');
// mixedTypes.push(true)
mixedTypes[3] = 10;
mixedTypes[4] = 'lui';
// mixedTypes[0] = true
console.log(mixedTypes);
// .................OBJECTS............................
let mySister = {
    name: 'vero',
    age: 19,
    isBeautiful: true,
    isQuiet: true,
};
// mySister = 'hello'
// mySister = 12
mySister.name = 'helen';
// mySister.name = true
// mySister.age = 'joseph'
mySister.isQuiet = false;
// mySister.skills = ["intelligent", "Social", "Creative", "Dogged"]
mySister = {
    name: 'rose',
    age: 16,
    isBeautiful: true,
    isQuiet: false,
};
// mySister = {
//     name: 'rose',
//     age: 16,
//     isBeautiful: true,
//     isQuiet: false,
//     skills: ["intelligent", "Social", "Creative", "Dogged"]
// }
console.log(mySister);
//.............................EXPLICIT TYPES..................................................
let collatedData;
collatedData = 3;
collatedData = 5;
// collatedDatas = true
// collatedDatas = 'eight'
let collatedName;
collatedName = 'Juliana';
collatedName = 'Romeo';
// collatedName = 12
// collatedName = true
let isDataFromCensus;
isDataFromCensus = true;
isDataFromCensus = false;
isDataFromCensus =
    isDataFromCensus = false;
let citizenNames;
let citizensAge;
// .........................................DYNAMIC TYPES........................................
let ageOfStudent = 25;
ageOfStudent = 'Hello World';
ageOfStudent = true;
ageOfStudent = 234;
ageOfStudent = { name: "JoeBoy" };
console.log(ageOfStudent);
let mixed = [];
mixed.push(25);
mixed.push("Fantabulous");
mixed.push(true);
mixed.push({ name: "Johnson" });
mixed.push({ petname: "Jay" });
console.log(mixed);
// ............................BETTER WORK FLOW  AND CONFIGURATION...................................
// To configure your project to certain workflow that makes work quite easy and faster. We have to arrange all Our Typescript files in a Source Folder as that directory will only contain work that will be compiled. while another folder will be created for our public usage. This can be called public.
// We run the command tsc --init in our root folder to configure our project
// Afterwhich we change our rootDir to "./src" and Our outDir to "./public"
// Then we add "include": ["src"] in between the nested object to prevent any compilation outside the Source folder.
// ........................................FUNCTIONS IN TYPESCRIPT......................................
let greet;
greet = () => {
    console.log("Hello My World");
};
greet();
let add;
add = (a, b) => {
    console.log(a + b);
};
add(5, 7);
let addition;
addition = (a, b, c = 20) => {
    console.log(a + b);
    console.log(c);
};
addition(5, 10, 20);
let minus;
minus = (a, b, c) => {
    console.log(a - b);
};
add(5, 7, 5);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetNow = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// ......................................... FUNCTION SIGNATURES.................................................
let localgreeting;
localgreeting = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numbTwo, action) => {
    if (action === 'add') {
        return numOne + numbTwo;
    }
    else {
        return numOne - numbTwo;
    }
};
let ninjaLogDetail;
ninjaLogDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
// ....................................DOM AND TYPE CASTING................................
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// .............................CLASSES IN TYPESCRIPT.......................................
class Invoice {
    constructor(a, b, c) {
        this.client = a,
            this.details = b,
            this.amount = c;
    }
    format() {
        return `${this.client} is owing us $${this.amount} for ${this.details}`;
    }
}
const resultOne = new Invoice('John', 'House Materials', 4800);
const resultTwo = new Invoice('Joe', 'Building Materials', 5460);
console.log(resultOne, resultTwo);
// ........................CREATING AN ARRAY THAT ONLY ACCEPTS THE CLASS ABOVE............
let Invoices = [];
// Invoices.push("Helo World")
// Invoices.push(673638)
// Invoices.push(true)
Invoices.push(resultOne);
Invoices.push(resultTwo);
console.log(Invoices);
resultOne.client = 'Johnson';
resultTwo.client = 'Joe Boy';
console.log(resultOne, resultTwo);
Invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
//......................................TYPESCRIPT MODULE......................................
//To use the module feature of type script we have to configure our tsconfig file. The module should be changed from commonJs to the recent feature either es2015 or other latest feature like es2022 
//In the case of using HTML, add type="module" to your script
import { purchase } from './test.js';
const firstPurchase = new purchase("Cutlass", 4870, 5, true);
const secondPurchase = new purchase("Rake", 9670, 5, false);
console.log(firstPurchase, secondPurchase);
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
const greetSoneone = (person) => {
    console.log(`Hello ${person.name}`);
};
greetSoneone(me);
console.log(me);
