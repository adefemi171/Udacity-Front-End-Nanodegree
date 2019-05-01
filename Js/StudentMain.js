/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
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
     console.log("Number is Even")
    
} else {
     console.log("Number is Odd")
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