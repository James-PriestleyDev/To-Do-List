const userInput = document.getElementById("user-input");
const input = document.getElementById("goal-input");
const modal = document.getElementById("goals");
const btn = document.getElementById("btn");

/**
 * This will take the users input and display the text to the webapp
 * in form of a ul list.
 */
function goalInput() {
    if (userInput.value === ''){
        alert("Please add a goal prior to submitting!");
        }
     else {
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        input.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Complete";
        li.appendChild(span);
    }
}



/**
 * This function will remove the users list item
 * and provide a celebratory alert message
 * once they have completed a task.
 */
function removeTask() {

}

/**
 * This function will tally up the users inputs 
 * and show the results on the webapp
 */
function inputTally() {
    let tally = document.getElementsByClassName("btn");
    addEventListener.tally("click")
    let totalItems = listItems.length;
    tally.innerHTML = totalItems;

}

/**
 * This function will take the inputTally() function
 * and show the users outstanding/completed tasks
 */
function completeTasks() {

}
