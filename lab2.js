/*********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 hours | persons consumed  |  rate of consumption
 --------------------------|---------------------
  1    |        0          |       1/hour
  2    |        1          |       2/hour
  3    |        2          |       3/hour
  4    |        3          |       4/hour
  5    |        4          |       5/hour
  6    |        5          |       6/hour
  7    |        6          |       7/hour
  8    |        7          |       8/hour
  9    |        8          |       9/hour
  10   |        9          |       10/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob(rate) {
  this.rate = rate;
}

Blob.prototype.consumptionOfDowington = function() {
  population = 1000;
  hours = 0;

  while (population > 1) {
    this.rate++;
    hours++;
    population = population - this.rate;
  }

  return hours;
};

var blob = new Blob(0);
var hoursSpentInDowington = blob.consumptionOfDowington();

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, rate) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  this.rate = rate;
  hours = 0;

  while (population > 1) {
    this.rate++;
    hours++;
    population = population - this.rate;
  }

  return hours;
}

Blob.prototype.hoursToOoze = hoursToOoze;

var secondBlob = new Blob(0);

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 0) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\'s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(secondBlob.hoursToOoze(600, 0) === blob.hoursToOoze(600, 0));
assert(secondBlob.hoursToOoze(10, 0) === 4);
assert(blob.hoursToOoze(0, 0) === 0);

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.planet = planet;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    this.sb = sb; // listener
    console.log(hello[this.language]);

    if (hello[this.sb]) {
      return hello[this.sb];
    } else {
      return hello["federation standard"];
    }

    //TODO: put this on the SentientBeing prototype
  }

SentientBeing.prototype.sayHello = sayHello;

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing("Qo\"noS", "klingon"); // TODO: fix me
var romulan = new SentientBeing("Romulus", "romulan"); // TODO: fix me
var human = new SentientBeing("Earth", "federation standard"); // TODO: fix me

assert(human.sayHello("klingon") === "nuqneH", "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(human.sayHello("romulan") === "Jolan\"tru", "human --> romulan fail");
assert(romulan.sayHello("human") === "hello", "romulan --> human fail");
assert(romulan.sayHello("klingon") === "nuqneH", "romulan --> klingon fail");
assert(klingon.sayHello("human") === "hello", "klingon --> human fail");
assert(klingon.sayHello("romulan") === "Jolan\"tru", "klingon --> romulan fail");

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array

  this.array = array;

  orderedArray = array.sort(function(a, b) {return a - b;});
  lastItem = orderedArray.pop();
  return lastItem;
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ 1, 12, 43 ]) === 43, "[1,12,43]");
assert(max([ 56, 9, 2 ]) === 56, "[56,9,2]");
assert(max([ 18, 3, 4 ]) === 18, "[18,3,4]");

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

  this.string = string;
  splitSentence = this.string.split(" ");

  for (i = 1; i < splitSentence.length; i++) {
    lowercase = splitSentence[i].charAt(0);
    uppercase = lowercase.toUpperCase();
    newWord = splitSentence[i].replace(lowercase, uppercase);
    newArray = splitSentence[i] = newWord;
    newString = splitSentence.join("");
    console.log(newString);
  }

  return newString;
}

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree", "variablify(\"one two three\")");
assert(variablify("hello out there") === "helloOutThere", "variablify(\"hello out there\")");
assert(variablify("i love donuts") === "iLoveDonuts", "variablify(\"i love donuts\")");
assert(variablify("pancakes and waffles") === "pancakesAndWaffles", "variablify(\"pancakes and waffles\")");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
