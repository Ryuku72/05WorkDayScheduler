var timeEl = document.getElementById("time");

var date = new Date();
var currentHour = date.getHours();
//console.log(currenthour);

function updateClock () {
  var currentTime = new Date ();

  var currentDay = currentTime.getDay ();
  
  //Convert the day component to day abbreviation
  currentDay = ( currentDay == 0 ) ? "Sunday" : currentDay;
  currentDay = ( currentDay == 1 ) ? "Monday" : currentDay;
  currentDay = ( currentDay == 2 ) ? "Tuesday" : currentDay;
  currentDay = ( currentDay == 3 ) ? "Wednesday" : currentDay;
  currentDay = ( currentDay == 4 ) ? "Thursday" : currentDay;
  currentDay = ( currentDay == 5 ) ? "Friday" : currentDay;
  currentDay = ( currentDay == 6 ) ? "Saturday" : currentDay;
  
  var currentMonth = currentTime.getMonth(); 
  
  //Convert the month component to text month
  currentMonth = ( currentMonth == 0 ) ? "January" : currentMonth;
  currentMonth = ( currentMonth == 1 ) ? "February" : currentMonth;
  currentMonth = ( currentMonth == 2 ) ? "March" : currentMonth;
  currentMonth = ( currentMonth == 3 ) ? "April" : currentMonth;
  currentMonth = ( currentMonth == 4 ) ? "May" : currentMonth;
  currentMonth = ( currentMonth == 5 ) ? "June" : currentMonth;
  currentMonth = ( currentMonth == 6 ) ? "July" : currentMonth;
  currentMonth = ( currentMonth == 7 ) ? "August" : currentMonth;
  currentMonth = ( currentMonth == 8 ) ? "September" : currentMonth;
  currentMonth = ( currentMonth == 9 ) ? "October" : currentMonth;
  currentMonth = ( currentMonth == 10) ? "November" : currentMonth;
  currentMonth = ( currentMonth == 11) ? "December" : currentMonth;
  
  var currentDate = currentTime.getDate();
  
  // Add suffix to the date
  currentDate = ( currentDate == 1 || currentDate == 21 || currentDate == 31 ) ? currentDate + "st" : currentDate;
  currentDate = ( currentDate == 2 || currentDate == 22 ) ? currentDate + "nd" : currentDate;
  currentDate = ( currentDate == 3 ) || currentDate == 23 ? currentDate + "rd" : currentDate;
  currentDate = ( currentDate > 3 || currentDate < 21 || currentDate > 23 || currentDate < 31 ) ? currentDate + "th" : currentDate;
  
  
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();


  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentDay + ", " + currentMonth +  " " + currentDate + " " + currentHours + ":" + currentMinutes + ":"+ currentSeconds +" "+ timeOfDay;

  // Update the time display
  document.getElementById("clock").innerText = currentTimeString;
}

//compare the dayplanner IDs to the Current house

$(document).ready(function(){

  var currentHour = date.getHours();

  var timeOne = $("#time1");
    timeOne = 1;

    if (timeOne === currentHour) {
    timeOne.addClass("present");
    
  } else if (timeOne > currentHour) {
    timeOne.addClass("future");
    }
    else {
      $("#time1").addClass("past")
    }

var timeTwo = $("#time2");
timeOne = 2;

if (timeTwo === currentHour) {
timeTwo.addClass("present");

} else if (timeTwo > currentHour) {
timeTwo.addClass("future");
}
else {
  $("#time2").addClass("past")
}

var timeThree = $("#time3");
timeOne = 3;

if (timeThree === currentHour) {
timeThree.addClass("present");

} else if (timeThree > currentHour) {
timeThree.addClass("future");
}
else {
  $("#time3").addClass("past")
}



var timeTwoThree = $("#time23");

if (23 === currentHour) {
  timeTwoThree.addClass("present");

} else if (23 > currentHour) {
  timeTwoThree.addClass("future");
}
else {
  $("#time23").addClass("past")
}

var timeTwoFour = $("#time24");

if (24 === currentHour) {
  timeTwoFour.addClass("present");

} else if (24 > currentHour) {
  timeTwoFour.addClass("future");
}
else {
  $("#time24").addClass("past")
}

});