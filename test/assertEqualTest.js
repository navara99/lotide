const assertEqual = require("../assertEqual");

// Test Code

assertEqual("Lighthouse Labs", "Bootcamp"); // Not Equal
assertEqual(1, 1); // Equal
assertEqual("abcdef", 1); // Not Equal
assertEqual("1", 1); // Not Equal
assertEqual("coding", "coding"); // Equal
assertEqual("", ""); // Equal