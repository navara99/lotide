const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test Cases

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Comparing values of returned tail arrays directly
const result = tail(["Hello", "Lighthouse" , "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");