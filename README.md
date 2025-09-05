This React Calculator is a single-page app built using functional components and React hooks.

	•	Components:
 
	•	App.jsx: The main container that manages the calculator state.
	•	Screen.jsx: Displays the current input or result.
	•	Keypad.jsx: Contains all the buttons (numbers, operators, reset, delete).
	•	Btn.jsx: Represents a single button.
	•	State:
	•	display in App.jsx holds the current input as a string.
	•	The string grows as the user clicks numbers/operators and updates when = (evaluate), del, or Reset are pressed.
 
	•	Flow:
 
	1.	User clicks a button on Keypad.
	2.	Btn passes the value up via the onButtonClick function.
	3.	App.jsx updates display based on the button value.
	4.	Screen receives display as a prop and renders it.
 
	•	Evaluation:
	•	The eval() function (with "x" replaced by "*") calculates the result when = is clicked.
 
live site link: https://react-calc-app.onrender.com/
