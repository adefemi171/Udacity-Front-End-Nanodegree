/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
console.log(21 * 2);
console.log(10 + 10 + 22);
console.log(50 - 16 + 8 + 6 + 2);



/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the formula above
 * 2. Log the fahrenheit variable to the console
 *
 */

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32 ;/* convert celsius to fahrenheit here */

console.log(fahrenheit + " Degree");

/*
 * Programming Quiz: Favorite Food (2-3)
 */
var ff = "Pounded Yam and Egusi";

console.log(ff);

/*
 * Programming Quiz: String Equality for All (2-4)
 */

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);



/*
 * Programming Quiz: All Tied Up (2-5)
 */

var joke = "Why Couldn\'t the shoes go out and play? \nThey were all \"tied\" up\!";
console.log(joke);


/*
 * Programming Quiz: Yosa Buson (2-6)
 */

var haiku = "Blowing from the west \n" + "Fallen leaves gather \n" + "In the east";
console.log(haiku);


var thingOne = "red";
var thingTwo = "blue";

console.log(thingOne + " " + thingTwo);


var fullName = "Afuwape Adefemi Micheal";

console.log(fullName);


var bill = 10.25 + 3.99 + 7.15;
var tip = bill * (15/100);
total = bill = tip;


console.log("#" + total);

console.log("#" + total.toFixed(2));


/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here
var madlib = "The Intro to JavaScript course is " + adjective1 + ". James and julia are so " + adjective2 + 
                ". I cannot wait to work through the rest of this " + adjective3 + " content!.";

console.log(madlib);




/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

// Add your code here
var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";

var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + 
                     ". In my spare time, I like to " + hobby + ".";

console.log(awesomeMessage);

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if (number % 2 == 0) {
     console.log("Number is Even");
    
} else {
     console.log("Number is Odd");
}

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 0.5;

// your code goes here
if (musicians <= 0 ) {
     console.log("not a group");
} else if (musicians <= 1) {
     console.log("solo");
} else if (musicians <= 2) {
     console.log("duet");
} else if (musicians <= 3) {
     console.log("trio");
} else if (musicians <= 4) {
     console.log("quartet");
} else {
     console.log("there is a large group");
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
window.alert("Rooms available are: dining room, Gallery, billiards room, ballroom");
var room = prompt("What Room was the murder?: ");
var suspect = "";

var weapon = "";
var solved = false;

if (room === "dining room" || room === "Dining room" || room === "Dining Room") {
     weapon = "Knife";
     suspect = "Mr. Parkes";
     solved = true;
    
} else if (room === "gallery" || room === "Gallery") {
     weapon = "trophy";
     suspect = "Ms. Van Cleve";
     solved = true;
    
} else if (room === "billiards room" || room === "Billiards room" || room === "Billiards Room") {
     weapon = "pool stick";
     suspect = "Mrs. Sparr";
     solved = true;
    
} else if (room === "ballroom" || room === "Ballroom") {
     weapon = "poison";
     suspect = "Mr. Kalehoff";
     solved = true;
    
} else {
     console.log("Room not defined");
}


if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon);
}


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code


//Not completed
window.alert("Enter Yes or No");
var checkBalance = prompt("Do you want to check your balance?");


// your code goes here
if (checkBalance == "yes" || checkBalance == "Yes"){
     var balance = parseFloat (prompt("How much do you have left in your account? "));
     if (balance % 1 != 0){
          alert("Error Balance Input");
          var balance = parseFloat (prompt("Please type in an Integer Value: "));
     }else {
         // prompt("Please type in an Integer Value: ");
          window.alert("Please enter Yes or No ");
          var isActive = prompt("Is your account Active?");

          if (balance > 0 && isActive === "yes" || balance > 0 && isActive === "Yes" ){
              console.log("Your account balance is $" + balance.toFixed(2) + ".");
          }else if (balance > 0 && isActive === "no" || balance > 0 && isActive === "No"){
               console.log("Your account is no longer active");

          } else if (balance == 0 && isActive === "yes" || balance == 0 && isActive === "Yes"){
               console.log("Your account is empty");
          } else if (balance < 0 && isActive === "yes" || balance < 0 && isActive === "Yes"){
               console.log("Your balance is Negative please contact bank");
          }

     }
     
     
}else{
     console.log("Thank you. Have a nice day");
}


/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
window.alert("The only flavor of Ice Cream we have are Chocolate, Vanilla and the vessel we have are Cone and Bowl and the toppings available are Sprinkles and Peanuts");
var flavor = prompt("What flavour of Ice cream do you want? ");
var vessel = prompt("What Vessel do you want it in?");
var toppings = prompt("What toppings would you like?");

// Add your code here
if (flavor == "chocolate" || flavor == "Chocolate" || flavor == "vanilla" || flavor == "Vanilla" && vessel == "cone" || vessel == "Cone" || vessel == "bowl" || vessel == "Bowl" && toppings == "sprinkles" || toppings == "Sprinkles" || toppings == "peanuts" || toppings == "Peanuts"){
     console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}else{
     console.log("We don\'t have that Ice Cream");
}


/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = prompt("Please input your Shirt Width");
var shirtLength = prompt("Input your Shirt Length ");
var shirtSleeve = prompt("Input your Shirt Sleeve");

// Write your if/else code here





/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? "Omnivore"  : "Herbivore";
console.log(category);


/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch (education){
     case "no high school diploma":
      salary = "25,636";
      console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
      break;
     case "high school diploma":
      salary = "35,256";
      console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
      break;
     case "Associate's degree":
      salary = "41,496";
      console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
      break;
     case "Bachelor's degree":
      salary = "59,124";
      console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
      break;
     case "Master's degree":
      salary = "69,732";
      console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
      break;
     case "Professional degree":
      salary = "89,960";
      console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
      break;
     case "Doctoral degree":
      salary = "84,396";
      console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
      break;
     default:
      console.log("In 2015, a person has no name ");
      
}


var x = 1;

while (x < 20) {
    // check divisibility

    if ( x % 3 === 0){
         console.log("Julia");
    }else if (x % 5 === 0){
         console.log("James");
    }else if (x % 3 == 0 && x % 5 == 0){
         console.log("JuliaJames");
    }else{
         console.log(x);
    }
    // print Julia, James, or JuliaJames
    // increment x
    x++;
}



/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
     if (num >= 2){
          console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!" );
     }else {
          console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num -1) + " bottle of juice on the wall!" );
     }
     num--;
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

/*
T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
*/

var sec = 60;

while (sec >= 0){
     if (sec === 50){
          console.log("Orbiter transfers from ground to internal power ");
     } else if (sec === 31){
          console.log("Ground launch sequencer is go for auto sequence start");
     } else if (sec === 16){
          console.log("Activate launch pad sound suppression system");
     } else if (sec === 10){
          console.log("Activate main engine hydrogen burnoff system");
     } else if (sec === 6){
          console.log("Main engine start ");
     }else if (sec === 0){
          console.log("Solid rocket booster ignition and liftoff! ");
     } else {
          console.log("T-" + sec + "seconds");
     }
     sec--;
}



/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}


for (x = 9; x >= 1; x--){
     console.log("hello " + x);
}


/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
var x = 0;
for (x = 5;x < 10; x++) {
    console.log(x);
}


/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
for (var k = 0; k < 200; k++) {
     console.log(k);
 }


 /*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var val = 12;
var solution = 1;
for (i = 0; i < val; i++){
     solution = solution * (val - 1);
}
console.log(val + "! = " + solution);


/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here


for (var x = 0; x <= 25; x = x + 1) {
     for (var y = 0; y < 100; y = y + 1) {
       console.log(x + "-" + y);
     }
   }


   /*
 * Programming Quiz: Laugh it Off 1 (5-1)
 function laugh(word, times) {
     var sentence ="";
     while (times > 0){
          sentence += times;
          times--;
     }
     return sentence;
}

console.log(laugh("ha", 3));
 */

// your code goes here

function laugh(word, times) {
     var sentence ="";
     while (times > 0){
          sentence += word;
          times--;
     }
     return sentence;
}

laugh(("ha", 3) + "!");


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
     var line = "";
     for (var j = 1; j <= length; j++) {
         line += "* ";
     }
     return line + "\n";
 }
 
 // your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(height) {
    var starTriangle = "";
    for (var k = 1; k <= height; k++) {
        starTriangle += makeLine(k);
    }
    return starTriangle;
}
 
 // test your code by uncommenting the following line
 console.log(buildTriangle(10));



 /*
 * Programming Quiz: Laugh (5-4)
 laugh(("ha", 3) + "!");
 */

var laugh = function (times) {
     var sentence ="";
     var word = "ha";
     while (times > 0){
          sentence += word;
          times--;
     }
     sentence = sentence + "!";
     return sentence;
     
};



/* finish the function expression */

console.log(laugh(10));



 /* Programming Quiz: Cry (5-5)
 */

// your code goes here

var cry = function crying(){
     return "boohoo!";
};

console.log(cry());



/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function(times){
     var sentence ="";
     var word = "ha";
     while (times > 0){
          sentence += word;
          times--;
     }
     sentence = sentence + "!";
     return sentence;
     

});



/*
 * Programming Quiz: UdaciFamily (6-1)
 */

// your code goes here
var udaciFamily = ["Julia", "James","potus"];

console.log(udaciFamily[0]);


/*
 * Programming Quiz: Building the Crew (6-2)
 */
var crew =[];
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
crew[0] = captain;
crew[1] = second;
crew[2] = pilot;
crew[3] = companion;
crew[4] = mercenary;
crew[5] = mechanic;
console.log(crew[0]);

/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[0] = 2.25;
prices[2] = 3.80;
prices[6] = 2.67;


/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(2,1, "Yellow", "Green", "Purple");



/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here
function hasEnoughPlayers(a){
     
     var tam = [];
     a = tam;
     
     //if team.length === 7
     if (tam.length == 6){
         return true;
     }else{
         return false;
     }

     
}
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));



/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
     19, 300, 3775, 299, 36, 209, 148, 169, 299,
     6, 109, 20, 58, 139, 59, 3, 1, 139
 ];

 // Write your code here

test.forEach(function(element, index, array){
     if (element % 3 === 0){
          array[index] = element + 100;
     }
});

console.log(test);

/*
* Using Map Function to loop over array in JavaScript
* An Example is using the donut array
*It also returns a new array
*/

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(bills){
     bills = bills + (bills * (15 / 100));
     bills = bills.toFixed(2);
     return Number(bills);
});

console.log(totals);


var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}


/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (var i = 0; i < numbers.length; i++){
     for (var j = 0; j < numbers[i].length; j++){
          if (numbers[i][j] % 2 === 0){
               numbers[i][j] = "even";
          }else{
               numbers[i][j] = "odd";
          }
          console.log(numbers[i][j]);
     }
}
console.log(numbers);


/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    isClose: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function(){
          if (umbrella.isClose === true){
               return "The umbrella is already closed!";
          }else {
               umbrella.isClose = true;
               return "Julia closed the umbrella";
          }
    },
};


/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
     name: "The Lumberjack",
     price: 9.95,
     ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};



/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function accountSummary(){
         return "Your balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    },
};

console.log(savingsAccount.printAccountSummary());


/*
 * Programming Quiz: Facebook Friends (7-5)
 * Create an object called facebookProfile. The object should have 3 properties:
* Your name
* The number of friends you have, and
* An array of messages you've posted (as strings)
* The object should also have 4 methods:

* postMessage(message) - adds a new message string to the array
* deleteMessage(index) - removes the message corresponding to the index provided
* addFriend() - increases the friend count by 1
* removeFriend() - decreases the friend count by 1
 */

// your code goes here
var facebookProfile = {
     name: "Afuwape Adefemi Micheal",
     friends: 3,
     messages: ["Haja", "Raven", "Norman", "Holmes"],
     postMessage: function(message) {
          return facebookProfile.messages.push(message);
     },
     deleteMessage: function(index) {
          return facebookProfile.messages.splice(index,1);
     },
     addFriend: function() {
          return facebookProfile.friends+= 1;
     },
     removeFriend: function() {
          return facebookProfile.friends-= 1;
     }
};


/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(donut) {
    console.log(donut.type + " donuts cost $" + donut.cost + " each");
});


/*
 * Programming Quiz: Using Let and Const (1-1)
 *
 * * Replace the variable declarations using let or const.
 */

let CHARACTER_LIMIT = 255;
let posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();


/*
 * Instructions: Change the `greeting` string to use a template literal.
 */

const myName = 'Adefemi';
const greeting = `Hello, my name is` + myName;
console.log(greeting);

//let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;



/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

/** creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = '<div class="card">' +
        '<h3 class="name">' + animal.name + '</h3>' +
        '<img src="' + animal.name + '.jpg" alt="' + animal.name +'" class="picture">' +
        '<div class="description">' +
            '<p class="fact">' + animal.fact + '</p>' +
            '<ul class="details">' +
                '<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
                '<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
                '<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
                '<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
            '</ul>' +
            '<p class="brief">' + animal.summary + '</p>' +
        '</div>' +
    '</div>';

    return cardHTML;
}

*/

function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card"> 
        <h3 class="name"> ${animal.name} </h3> 
        <img src="  ${animal.name}.jpg  alt="  ${animal.name} " class="picture"> 
        <div class="description">
            <p class="fact"> ${animal.fact} </p> 
            <ul class="details"> 
                <li><span class="bold">Scientific Name</span>:  ${animal.scientificName} </li>
                <li><span class="bold">Average Lifespan</span>:  ${animal.lifespan} </li>
                <li><span class="bold">Average Speed</span>:  ${animal.speed} </li>
                <li><span class="bold">Diet</span>:   ${animal.diet} </li>
            </ul>
            <p class="brief"> ${animal.summary} </p>
        </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));



/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

//const one = things;
//const two = '';
//const three = '';
const [one, ,two , , ,three , , , ] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);



/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 * Write a for...of loop that:

* loops through each day in the days array
* capitalizes the first letter of the day
* and prints the day out to the console

 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (let day of days){
     day = day[0].toUpperCase() + day.slice(1);
     console.log(day);
}


/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);



function average(...nums) {
    let total = 0;
    for(const num of nums){
        total += num;
    }
    if (nums.length=== 0) {
        return 0;

    }
    return total/nums.length
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());