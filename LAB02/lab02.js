// Import the 'prompt' package to handle user input from the console
const prompt = require('prompt');

// Define a schema that describes the input expected from the user
// In this case, we expect the user to provide either 'rock', 'paper', or 'scissors'
const schema = {
  properties: {
    userSelection: {
      description: 'Choose ROCK, PAPER, or SCISSORS',  // Message shown to the user
      type: 'string',  // Expected input type
      pattern: /^(rock|paper|scissors)$/i,  // Regular expression to validate input (case-insensitive)
      message: 'Selection must be ROCK, PAPER, or SCISSORS',  // Error message if validation fails
      required: true  // Ensures the input is mandatory
    }
  }
};

// Start the prompt to take input from the user
prompt.start();

// Capture the user's input using 'prompt.get()' method and apply the schema for validation
prompt.get(schema, (err, result) => {
  // Handle any errors that might occur during input
  if (err) {
    return console.error(err);  // Log the error and stop execution if any error occurs
  }

  // Store the user's choice in lowercase format for consistent comparison later
  const userSelection = result.userSelection.toLowerCase();
  console.log(`User chose: ${userSelection}`);  // Display the user's selection

  // Generate computer's selection using a random number between 0 and 1
  const randomNumber = Math.random();  // Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive)
  let computerSelection;

  // Map the random number to one of the three possible selections: 'paper', 'scissors', or 'rock'
  if (randomNumber <= 0.34) {
    computerSelection = 'paper';  // If random number is between 0.00 and 0.34, choose 'paper'
  } else if (randomNumber <= 0.67) {
    computerSelection = 'scissors';  // If random number is between 0.35 and 0.67, choose 'scissors'
  } else {
    computerSelection = 'rock';  // If random number is between 0.68 and 1.00, choose 'rock'
  }

  // Display the computer's selection
  console.log(`Computer chose: ${computerSelection}`);

  // Determine the winner by comparing user's selection and computer's selection
  // If both selections are the same, it's a tie
  if (userSelection === computerSelection) {
    console.log("It's a tie!");  // Both user and computer made the same choice
  } else if (
    // Check all possible win conditions for the user
    (userSelection === 'rock' && computerSelection === 'scissors') ||
    (userSelection === 'paper' && computerSelection === 'rock') ||
    (userSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('User Wins!');  // User wins if their choice beats the computer's choice
  } else {
    console.log('Computer Wins!');  // Computer wins if none of the user's win conditions are met
  }
});
