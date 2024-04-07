/**
 * This will take the users input and display the text to the webapp
 * in form of a ul list.
 */
function goalInput() {
    let p = document.createElement("p");
    let userInput = document.getElementById("userInput").value;
    let text = document.createTextNode(userInput);
    p.appendChild(text);
  
    if (userInput === '') {
        alert("You have not entered a goal");
    } else {
        document.getElementById("goals").append(p);
    }

}

/**
 * This function will tally up the users inputs 
 * and show the results on the webapp
 */
function inputTally() {

}

/**
 * This function will take the inputTally() function
 * and show the users outstanding/completed tasks
 */
function completeTasks() {

}

/**
 * This function will remove the users list item
 * and provide a celebratory alert message
 * once they have completed a task.
 */
function removeTask() {

}