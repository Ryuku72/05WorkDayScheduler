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

console.log("#time1");

$(document).ready(function(){

  var currentHour = date.getHours();
  //console.log(currentHour);

  //Colour Hue
     
    if (1 === currentHour) {
      $("#time01").addClass("present");
    } else if (1 > currentHour) {
      $("#time01").addClass("future");
    } else {
      $("#time01").addClass("past")
    }


    if (2 === currentHour) {
      $("#time2").addClass("present");
    } else if (2 > currentHour) {
      $("#time02").addClass("future");
    } else {
      $("#time02").addClass("past")
    }

    if (3 === currentHour) {
      $("#time03").addClass("present");
    } else if (3 > currentHour) {
      $("#time03").addClass("future");
    } else {
      $("#time03").addClass("past")
    }

    if (4 === currentHour) {
      $("#time04").addClass("present");
    } else if (4 > currentHour) {
      $("#time04").addClass("future");
    } else {
      $("#time04").addClass("past")
    }

    if (5 === currentHour) {
      $("#time05").addClass("present");
    } else if (5 > currentHour) {
      $("#time05").addClass("future");
    } else {
      $("#time05").addClass("past")
    }

    if (6 === currentHour) {
      $("#time06").addClass("present");
    } else if (6 > currentHour) {
      $("#time06").addClass("future");
    } else {
      $("#time06").addClass("past")
    }

    if (7 === currentHour) {
      $("#time07").addClass("present");
    } else if (7 > currentHour) {
      $("#time07").addClass("future");
    } else {
      $("#time07").addClass("past")
    }

    if (8 === currentHour) {
      $("#time08").addClass("present");
    } else if (8 > currentHour) {
      $("#time08").addClass("future");
    } else {
      $("#time08").addClass("past")
    }

    if (9 === currentHour) {
      $("#time09").addClass("present");
    } else if (9 > currentHour) {
      $("#time09").addClass("future");
    } else {
      $("#time09").addClass("past")
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

    
    //Local Storage

    $(".btn01").click(function() {
      localStorage.btn01 = $('#time01').val();
      $("#time01").val(localStorage.btn01);
    });
    
    $(".btn02").click(function() {
      localStorage.btn02 = $('#time02').val();
      $("#time02").val(localStorage.btn02);
    });
    
    $(".btn03").click(function() {
      localStorage.btn03 = $('#time03').val();
      $("#time03").val(localStorage.btn03);
    });

    $(".btn04").click(function() {
      localStorage.btn04 = $('#time04').val();
      $("#time04").val(localStorage.btn04);
    });

    $(".btn05").click(function() {
      localStorage.btn05 = $('#time05').val();
      $("#time05").val(localStorage.btn05);
    });

    $(".btn06").click(function() {
      localStorage.btn06 = $('#time06').val();
      $("#time06").val(localStorage.btn06);
    });

    $(".btn07").click(function() {
      localStorage.btn07 = $('#time07').val();
      $("#time07").val(localStorage.btn07);
    });

    $(".btn08").click(function() {
      localStorage.btn08 = $('#time08').val();
      $("#time08").val(localStorage.btn08);
    });

    $(".btn09").click(function() {
      localStorage.btn09 = $('#time09').val();
      $("#time09").val(localStorage.btn09);
    });

    $(".btn10").click(function() {
      localStorage.btn10 = $('#time10').val();
      $("#time10").val(localStorage.btn10);
    });

    $(".btn11").click(function() {
      localStorage.btn11 = $('#time11').val();
      $("#time11").val(localStorage.btn11);
    });

    $(".btn12").click(function() {
      localStorage.btn12 = $('#time12').val();
      $("#time12").val(localStorage.btn12);
    });

    $(".btn13").click(function() {
      localStorage.btn13 = $('#time13').val();
      $("#time13").val(localStorage.btn13);
    });

    $(".btn14").click(function() {
      localStorage.btn14 = $('#time14').val();
      $("#time14").val(localStorage.btn14);
    });

    $(".btn15").click(function() {
      localStorage.btn15 = $('#time15').val();
      $("#time15").val(localStorage.btn15);
    });

    $(".btn16").click(function() {
      localStorage.btn16 = $('#time16').val();
      $("#time16").val(localStorage.btn16);
    });

    $(".btn17").click(function() {
      localStorage.btn17 = $('#time17').val();
      $("#time17").val(localStorage.btn17);
    });

    $(".btn18").click(function() {
      localStorage.btn18 = $('#time18').val();
      $("#time18").val(localStorage.btn18);
    });

    $(".btn19").click(function() {
      localStorage.btn19 = $('#time19').val();
      $("#time19").val(localStorage.btn19);
    });

    $(".btn20").click(function() {
      localStorage.btn20 = $('#time20').val();
      $("#time20").val(localStorage.btn20);
    });

    $(".btn21").click(function() {
      localStorage.btn21 = $('#time21').val();
      $("#time21").val(localStorage.btn21);
    });

    $(".btn22").click(function() {
      localStorage.btn22 = $('#time22').val();
      $("#time22").val(localStorage.btn22);
    });

    $(".btn23").click(function() {
      localStorage.btn23 = $('#time23').val();
      $("#time23").val(localStorage.btn23);
    });

    $(".btn24").click(function() {
      localStorage.btn24 = $('#time24').val();
      $("#time24").val(localStorage.btn24);
    });
});