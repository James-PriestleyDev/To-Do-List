### TO-DO LIST

The To-Do List webapp is for anyone who is looking for a way to organise their daily goals. Users of this website will be able to enter their goals which they are
hoping to achieve on that given day and to help them track how many goals they have completed or have outstanding there is a tally on the webapp which counts
the users outstanding and completed goals.

The site is targeted towards people of any age, sex, gender, culture who are wanting to organise their day.

### Website Responsiveness

![Image of my website shown through varied view ports]()

### FEATURES

Webapp displaying page with no entries



![Image of the webapp with no user inputs]()

Webapp displaying listed items and tally of outstanding goals



![Image of the webapp with user inputs]()

Webapp displaying completed items and the tally of completed goals



![Image of the webapp with completed user inputs]()

Modal (warning pop-up)



![Image of the websites sign-up page (newsletter.html)]()

Footer

At the bottom of each page there is the footer.
The footer holds the text content which displays who created the webapp and also holds a link to my Github page if the user wanted
to see what other works me, the creator has made

![Image of the websites footer which holds the name of the creator and my Github link]()

### Testing

I have tested this page works on all browsers
I confirmed that this project works on all standard screen sizes using the devtools device toolbar
(Sizes were based off the dimentions given on the toolbar at the top of the 'device emulation' tool)
I confirm that all elements of the website are easy to read and easy to understand.
I have confirmed that the functions made in JS work by testing the website with different user inputs and with attempting to submit with no
user input to see if the pop-up warning works, which it does.

![Image of the modal warning the user that they have not entered a goal into the input box]()

### Bugs

Debugged an issue which I created when adding the google-fonts to my css. 
I had fogotten to add a ';' to the end of the input resulting in all my css styling 
to become ignored by the PC.

### Validator Testing

HTML
- There was an error when first validating the HTML as I left a '/' on line 29 and 2 floating </divs>.
 After removing this my HTML passed with no errors.
![Image of results from the webapp being ran through W3 validator](assets/docs/pp2-html-validated.PNG)
CSS
- No errors in the CSS when checking it with the offical W3C validator.
![Image of results from the webapp being ran through W3C validator](assets/docs/pp2-css-validated.PNG)
JSS
- The one warning which I got with my JS when putting it through JShint was for functions being declared within loops. However, I do not have loops
  and with that being said the JS has not provided any internal issues with the webapp nor is there any issues shown in the console of the devtools.
  Other than the warning which I have received for my JS I have also got one 'One undefined variable' and 'One unused variable' both of these are being
  used by the JS code. 
  The 'Undefiend variable' is the modal and it is used to open the modal if the user attempts to submit an empty input box.
  The 'Unused variable' is the goalInput() which is the main function on the webapp. This is also being used and works.
  I can prove this by the testing which I have done where I have removed both the 'modal' and the 'goalInput()' from my JS and the result
  of doing this was that neither the modal or the function worked. Putting the 'modal' and the 'goalInput()' back into my JS made the function
  and modal work as intended again.
![Image of the results from the js being checked through JShint](assets/docs/pp2-jshint.PNG)
Lighthouse tool check
- 
![Image of results from the webapp being ran through Lighthouse in devtools](assets/docs/pp2-lighthouse.PNG)

### Deployment

- The site was deployed to Github pages. The steps to deploy are as follows:
  - In the Github repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page provided the link to the completed website

The live link can be found here: https://james-priestleydev.github.io/pp2/

### CREDITS

Reference for favicon image:

The favicon image was taken from: https://favicon.io/emoji-favicons/

Footer:

- Code for styling the footer was taken from my PP1 submission and ammended to suit PP2.

README.md

- The structure and layout of the README.md was taken from the SAMPLE README.md provided by Code Institute in the PP1 module of the course. 