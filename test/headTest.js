const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Javascript"]), "Javascript");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Python", "Ruby"]), "Python");