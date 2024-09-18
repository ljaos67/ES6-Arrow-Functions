import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbersMap = numbers.map((x) => x * 2);
console.log(`Map: ${newNumbersMap}`);
////Filter - Create a new array by keeping the items that return true.
const newNumbersFilter = numbers.filter((num) => num < 10);
console.log(`Filter: ${newNumbersFilter}`);
//Reduce - Accumulate a value by doing something to each item in an array.
var newNumberReduce = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(`Reduce: ${newNumberReduce}`);
////Find - find the first item that matches from an array.
var newNumberFind = numbers.find((num) => num > 10);
console.log(`Find: ${newNumberFind}`);
////FindIndex - find the index of the first item that matches.
var newNumberIndex = numbers.findIndex((num) => num > 10);
console.log(`Index: ${newNumberIndex}`);
