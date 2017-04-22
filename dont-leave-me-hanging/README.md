# Don't Leave Me Hanging

You will be creating a variation of the popular Hangman game!

### Objective
Create an application using DOM manipulation, JavaScript event listeners, key codes, arrays, For loops, and a few JavaScript methods.

### Prerequesites
- HTML structures
- Intermediate understanding of JavaScript and DOM
- Basic understanding of conditional statements
- Basic understanding of For Loops

### Requirements
- Sublime Text
- Chrome Dev Tools

### Desired Outcomes
Upon completing this project, students should understand:
- JavaScript Event Listeners/Handlers
- For Loops
- JavaScript methods: splice, push, Math.random()

### Your Challenge:
Get started:
1. Fork and Clone this repository
2. Create the following files: index.html, app.js, and styles.css
3. Link the app.js and styles.css in the index.html

## Part 1: 
### Step 1 - HTML
1. Create the skeleton of the page using "!Tab"
2. Change the title of the page to an appropriate title
3. Add a header tag in between the head elements
4. Create three div elements inside the body of the page
5. Assign an id to each element so they are labeled: "word-container", "letters-container", "guesses-container"

### Step 2 - CSS
1. Create a border for each created element on the page
2. Style the page!

### Step 3 - JavaScript
1. Declare a global variable and set it's value as an array that contains all the letters of the alphabet.
2. Declare a global variable and set it's value to an array that contains two surprise words, these are the words the player would have to guess.
3. Declare a global variable and set its values as an empty strings. These will contain the randomized word we would have to guess.
4. Declare an global variable and set it's value to an empty array. This will be used to modify the contents of the array.
5. Create a function called startGame that:
- Populates the innerHTML of the element with the id 'letters-container'
- Randomly selects a word from our word bank and populates the innerHTML of the element with the id 'word-container' with "-".
- Pushes the content of the innerHTML into the empty array.

## Part 1: End! 
Once everyone in the classroom has reached this point, you may continue.
