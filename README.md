# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thar.navaratnam/lotide`

**Require it:**

```js
const _ = require('@thar.navaratnam/lotide');
```

**Call it:**

```js
const results = _.tail([1, 2, 3]) // => [2, 3]
```

## Documentation

The following functions are currently implemented:

### Array Functions

* `assertArraysEqual(arr1, arr2)`: Takes 2 arrays and displays a colourful message on the console saying if the 2 arrays are deeply equal or not.
* `eqArrays(arr1, arr2)`: Takes 2 arrays and returns true if they are deeply equal and false if they are not deeply equal. 
* `flatten(arr)`: Takes a single array and flattens all nesting inside. The flattened array is returned.  
* `map(arr, callback)`: Takes a single array and a callback function. Each element in the array is modified according to the callback. The modified array is returned. 
* `middle(arr)`: Takes an array and returns the middle element. An empty array is returned if the array contains 2 or less elements. If the array has an even number of elements, an array containing the 2 middle elements is returned. 
* `head(arr)`: Takes an array and returns the very first element.  
* `tail(arr)`: Takes an array and returns a new array with only the first element removed. 
* `takeUntil(arr)`: Takes an array and a callback function. It returns an array containing all the elements until the element in which the condition from the callback is first met. 

### Object Functions

* `assertObjectEqual(obj1, obj2)`: Takes 2 objects and displays a colourful message on the console saying if the 2 objects are deeply equal or not.
* `eqObjects(obj1, obj2)`: Takes 2 objects and returns true if they are deeply equal and false if they are not deeply equal. 
* `findKey(obj, callback)`: Takes an object and a callback function. The first key that has the value in which the condition from the callback returns true is returned. 
* `findKeyByValue(obj, value)`: Takes an object and a value. The first key that matches the value is returned. 

### General Functions
* `countLetters(str)`: Takes in a string and returns an object with the count of how many times each character has appeared in the string. 
* `countOnly(allItems, filterItems)`: Takes in an array of elements and an object with the the array elements as keys and boolean values. If the value for the corresponding key in the object is truthy, it will be included in the count object that is returned.  
* `assertEqual(a, b)`:  Takes 2 primitive values and displays a colourful message on the console saying if the 2 primitive values are strictly equal or not.
* `letterPositions(str)`: Takes a string and returns an object of each character and the indexes it appears in as key-value pairs.  








