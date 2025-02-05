# MongoDB $inc Operator Error: Incrementing with String Value
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The error occurs when attempting to increment a numerical field using a string value.

## Bug Description
The provided JavaScript code attempts to increment the `counter` field in a MongoDB document with the string value "1" instead of the numerical value 1. This will result in an error or unexpected behavior.

## Solution
The correct usage of the `$inc` operator requires using a numerical value. The solution provided corrects this by using the numerical value 1.

## How to Reproduce
1. Setup MongoDB and a collection named 'myCollection' with a document containing a numerical field `counter`.
2. Run the buggy JavaScript code (bug.js).
3. Observe the error or unexpected result.
4. Run the corrected code (bugSolution.js) for the proper behavior.
