const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

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

function closeModal(modal) {
    if (modal == null ) return
   modal.classList.remove('active')
  overlay.classList.remove('active')
}

const userInput = document.getElementById("user-input");
const input = document.getElementById("goal-input");

/**
 * This will take the users input and display the text to the webapp
 * in form of a ul list.
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
    

}

/**
 * This function will take the inputTally() function
 * and show the users outstanding/completed tasks
 */
function completeTasks() {

}
