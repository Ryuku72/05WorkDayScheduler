![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/HomeworkW5?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/HomeworkW5?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/HomeworkW5?style=for-the-badge)

## HomeworkW5
Daily Planner


## Aim // Introduction
This week we looked further into how to manipulate the DOM but with JQuery. Like previous assignments this weeks Homework utilized leasons of the past coupled with the current week activities to assist in the creation of a Dayplanner App which used multiple inputs, local stoage and a clock.

### Key Concepts of Week 4
* JQuery simplification
* Additional targeting the DOM
* GetElementbyID JQuery
* Click events
* prepend
* animate
* keyup, keydown, swtcih, case, break
* ().empty
* Scoping
* .css
* this
* Rehash: loops and printing

##  Table of Content
* [Building the Dayplanner HTML](#HTML)
* [Impletement CSS](#CSS)
* [JavaScript and Jquery](#JS)
* [D.R.Y. and remaining issues](#extra)
* [Additional Information](#ref)

<a name="HTML">

### Building the DayPlanner HTML
Building upon from previous assignments the concept of a dayplanner seemed very simple. We were aleady provide with some HTML elements including a jumbotron elements, Jquery & Moment.js. However, the problem unlike previous weeks was the grid. Due to the number of elements (Time Element, TextArea Element and Submit Button) I was considering maybe to speed up the process by just using a loop to create all elements. However, upon trying this seemed futile as the attached attributes (id's & class's) become too integral to running the Javascript correctly.

Next I tried to implement a grid with bootstrap but I just could not have enough control to make the columns and rows act the way I intended. 

In the end I just made the entire table grid with only having the JumbroTron as a bootstrap element.

<a name="CSS">

### Implementing Score and Time

What first seemed like a good idea soon turned into hours of googling and consideration. I chose a 8bit looking style with matching font as it appeared to lend itself to the initial simplicity of the project. Colours choices were faint and bright, whilst background images were all pulled from Giphy. Note: I initially linked every img src in this project but only later downloaded the images after console started producing errors.

Media queries were added towards the end. This task was easier then previous projects because I started with responsive values for my object and window sizing. This is only 1 Media Query area for under 768px because below 600px things still looked fine.

To be fancy I did add a blinking element to the time-block.

<a name="JS">

### JavaScript and JQuery

This is where the bulk of my time theorizing began. This week we started JQuery and its intension is to make things easiser and faster to code. Whilst in theory this is fine it brought up many questions. When to use JQuery and when to use Vanilla Javascript. So far my answer is use JQuery for anything that exists in Document.Body and Javascript for the DOM. Whilst I am sure the clock could be done with JQuery thus Moments.js I just chose to go with Javascript

Next problem, there are really 6 main functions in the Script.js; updateClock, renderLastRegistered, colourHue, localStorage, eventPlaceholder, checkDates.

Whilst the clock was a very simple the next 4 elements had a lot of repetition. This is where I started thinking alot of bubbling, stoppropagation and loops. 

The easy stuff...

Colour Hue was a simple function that based a colour depending on the 'hour' of the day. To achieve this I made a simple if,else if, else statement based on currentHour which I had made global. EventPlaceholder function was used to maniopulate the textarea placeholder when the window size became below 768. The concept was found on stackoverflow forums as I was unable to achieve this via simple CSS. CheckDates function was about compares dates and clear local storage if dates are different.

The hard and integrated issue...

renderLastRegistered and localStorage is just repetition and thus I have a choice. Figure out how to correctly theorize and write up a loop that allows the function to print everything or write up every single line.

...In the end I wrote up every single line.

I spent a lot of time thoerizing and playing around with the code in this area. However, as usual I ran out of time


<a name="extra">

### D.R.Y and remaining issues

The theory for renderLastRegistered is create a loop that checks the local storage for every saved item and then append them to the corresponding textareas. Issue, if I added the ".time00" elements to an array that could be cycled with a loop then technically that should work but I couldnt figure it out.

The harder one is localStorage. The theory is this
1. use if (e.target !== e.currentTarget && e.target.nodeName === 'BUTTON') { var clickedItem = e.target.id;}
2. depending on which button was clicked the associated textarea will commit to storage.

I tried play around with this and I know stop propagation plays a roll here but I wasn't able to find it. 

The general issue with constant repeating is playing around with alot of id's and class's is very time consuming and painful. This became really annoying at times as each change I had to run a check to make sure everything correctly works.

I am sure not simplfying my code is going to result in a lose of points... I left the e.target code in the javascript incase I wanted to work on it later.

Will have to ask the teachers about these two

<a name="ref">

##### Additional references
W3 Schools
GIPHY
Google Font
Developer.mozilla.org
Getbootstrap.com
Stackoverflow.com
Resources provided in Slack
Youtube tutorials

## Technology
* HyperText Markup Language
* Cascading Style Sheets
* Visual Studio Code ver 1.42.0
* GitHub
* Google Chrome ver 79.0.3945.130

## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 5 / Day1 / Homework repository on GitLab (https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%205/Day%201/Homework)

## Contributor
Joshua K Bader
