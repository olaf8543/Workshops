# Practice Problem 3: Number Guessing Game
## Setup:
Right-click on your `problem-3/index.html` file in VSCode and select **Open with Live Server**.  

## Instructions
Refer to the [JavaScript Cheat Sheet](../../cheatSheet.js) for reminders on certain concepts.

Note: The way to collect user input in JavaScript is the `prompt()` function. When this is used, the user can type something into the browser console, and that user input is saved as a variable.
```javascript
let age = prompt("Enter your age: "); // When the user enters their age, the input is saved to this variable 'age'
console.log("You are " + age + " years old!");
```

1. Create a function guessNumber(targetNumber) that takes a number as a parameter (targetNumber).
2. Inside the function, use a while loop to ask the user for guesses using prompt().
3. If the guess is too high, print "Too high!". If the guess is too low, print "Too low!". If the guess is correct, print "Correct!" and exit the loop.
4. Keep track of the number of guesses and print it out when the correct number is guessed.
Bonus: Add a feature that limits the number of guesses to 5. If the user doesn’t guess correctly within 5 tries, print "Game over!".