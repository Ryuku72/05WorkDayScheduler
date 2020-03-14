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
  console.log(currentHour);

    if (1 === currentHour) {
      $("#time1").addClass("present");
    } else if (1 > currentHour) {
      $("#time1").addClass("future");
    } else {
      $("#time1").addClass("past")
    }

    if (2 === currentHour) {
      $("#time2").addClass("present");
    } else if (1 > currentHour) {
      $("#time2").addClass("future");
    } else {
      $("#time2").addClass("past")
    }

    if (3 === currentHour) {
      $("#time3").addClass("present");
    } else if (1 > currentHour) {
      $("#time3").addClass("future");
    } else {
      $("#time3").addClass("past")
    }

    if (4 === currentHour) {
      $("#time4").addClass("present");
    } else if (1 > currentHour) {
      $("#time4").addClass("future");
    } else {
      $("#time4").addClass("past")
    }

    if (5 === currentHour) {
      $("#time5").addClass("present");
    } else if (5 > currentHour) {
      $("#time5").addClass("future");
    } else {
      $("#time5").addClass("past")
    }

    if (6 === currentHour) {
      $("#time6").addClass("present");
    } else if (6 > currentHour) {
      $("#time6").addClass("future");
    } else {
      $("#time6").addClass("past")
    }

    if (7 === currentHour) {
      $("#time7").addClass("present");
    } else if (7 > currentHour) {
      $("#time7").addClass("future");
    } else {
      $("#time7").addClass("past")
    }

    if (8 === currentHour) {
      $("#time8").addClass("present");
    } else if (8 > currentHour) {
      $("#time8").addClass("future");
    } else {
      $("#time8").addClass("past")
    }

    if (9 === currentHour) {
      $("#time9").addClass("present");
    } else if (9 > currentHour) {
      $("#time9").addClass("future");
    } else {
      $("#time9").addClass("past")
    }

    if (10 === currentHour) {
      $("#time10").addClass("present");
    } else if (10 > currentHour) {
      $("#time10").addClass("future");
    } else {
      $("#time10").addClass("past")
    }

    if (11 === currentHour) {
      $("#time11").addClass("present");
    } else if (11 > currentHour) {
      $("#time11").addClass("future");
    } else {
      $("#time11").addClass("past")
    }

    if (12 === currentHour) {
      $("#time12").addClass("present");
    } else if (12 > currentHour) {
      $("#time12").addClass("future");
    } else {
      $("#time12").addClass("past")
    }
    
    if (13 === currentHour) {
      $("#time13").addClass("present");
    } else if (13 > currentHour) {
      $("#time13").addClass("future");
    } else {
      $("#time13").addClass("past")
    }

    if (14 === currentHour) {
      $("#time14").addClass("present");
    } else if (14 > currentHour) {
      $("#time14").addClass("future");
    } else {
      $("#time14").addClass("past")
    }

    if (15 === currentHour) {
      $("#time15").addClass("present");
    } else if (15 > currentHour) {
      $("#time15").addClass("future");
    } else {
      $("#time15").addClass("past")
    }

    if (16 === currentHour) {
      $("#time16").addClass("present");
    } else if (16 > currentHour) {
      $("#time16").addClass("future");
    } else {
      $("#time16").addClass("past")
    }

    if (17 === currentHour) {
      $("#time17").addClass("present");
    } else if (17 > currentHour) {
      $("#time17").addClass("future");
    } else {
      $("#time17").addClass("past")
    }

    if (18 === currentHour) {
      $("#time18").addClass("present");
    } else if (18 > currentHour) {
      $("#time18").addClass("future");
    } else {
      $("#time18").addClass("past")
    }

    if (19 === currentHour) {
      $("#time19").addClass("present");
    } else if (19 > currentHour) {
      $("#time19").addClass("future");
    } else {
      $("#time19").addClass("past")
    }

    if (20 === currentHour) {
      $("#time20").addClass("present");
    } else if (20 > currentHour) {
      $("#time20").addClass("future");
    } else {
      $("#time20").addClass("past")
    }

    if (21 === currentHour) {
      $("#time21").addClass("present");
    } else if (21 > currentHour) {
      $("#time21").addClass("future");
    } else {
      $("#time21").addClass("past")
    }

    if (22 === currentHour) {
      $("#time22").addClass("present");
    } else if (22 > currentHour) {
      $("#time22").addClass("future");
    } else {
      $("#time22").addClass("past")
    }

    if (23 === currentHour) {
      $("#time23").addClass("present");
    } else if (23 > currentHour) {
      $("#time23").addClass("future");
    } else {
      $("#time23").addClass("past")
    }

    if (0 === currentHour) {
      $("#time24").addClass("present");
    } else if (0 > currentHour) {
      $("#time24").addClass("future");
    } else {
      $("#time24").addClass("past")
    }

});