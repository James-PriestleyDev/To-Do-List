//The code for creating the modal was taken from 'https://www.youtube.com/watch?v=MBaw_6cPmAw'


// calls a variable which selects all data-modal-target
const openModalButtons = document.querySelectorAll('[data-modal-target]')
// calls a variable which selects all data-close-button. This will be used when adding a close function to the button.
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

/**
 * This creates the function for the modal to appear once an item is clicked.
 */
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

/**
 * This creates the functionanlity for the close button.
 */
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// function openModal(modal) {
   // if (modal == null) return
    //modal.classList.add('active')
    //overlay.classList.add('active')
//}    

/**
 * This function will remove the modal from the screen once the user clicks the close button.
 */
function closeModal(modal) {
    if (modal == null ) return
   modal.classList.remove('active')
  overlay.classList.remove('active')
}


const userInput = document.getElementById("user-input");
const input = document.getElementById("goal-input");

/**
 * This will take the users input and display the text to the webapp
 * in form of a ul list. If there is no input then the user will be 
 * presented with the modal.
 */
function goalInput() {
    if (userInput.value === ''){
        modal.classList.add('active')
        overlay.classList.add('active')
        }
     else {
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        input.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Complete";
        li.appendChild(span);
        inputTally();
        removeTask();
    }
}



/**
 * This function will remove the users list item
 * once they have completed a task.
 */
let completeGoal = document.getElementsByTagName("span").addEventListener("click");

function removeTask() {
    completeGoal.remove();
    completeTasks();
}

/**
 * This function will tally up the users inputs 
 * and show the results on the webapp (This was taken from "Love Maths" walkthrough on CI.)
 */
function inputTally() {
    let outstanding = parseInt(document.getElementById("outstanding").innerHTML);
    document.getElementById("outstanding").innerHTML = ++outstanding;

}

/**
 * This function will take the inputTally() function
 * and show the users completed tasks (This was taken from "Love Maths" walkthrough on CI.)
 */
function completeTasks() {
    let outstanding = parseInt(document.getElementById("completed").innerHTML);
    document.getElementById("completed").innerHTML = ++outstanding;
}
