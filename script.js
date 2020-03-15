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

  renderLastRegisted();
  eventPlaceholder();

  function renderLastRegisted(){
    $("#time01").val(localStorage.Time01AM);
    $("#time02").val(localStorage.Time02AM);
    $("#time03").val(localStorage.Time03AM);
    $("#time04").val(localStorage.Time04AM);
    $("#time05").val(localStorage.Time05AM);
    $("#time06").val(localStorage.Time06AM);
    $("#time07").val(localStorage.Time07AM);
    $("#time08").val(localStorage.Time08AM);
    $("#time09").val(localStorage.Time09AM);
    $("#time10").val(localStorage.Time10AM);
    $("#time11").val(localStorage.Time11AM);
    $("#time12").val(localStorage.Time12PM);
    $("#time13").val(localStorage.Time01PM);
    $("#time14").val(localStorage.Time02PM);
    $("#time15").val(localStorage.Time03PM);
    $("#time16").val(localStorage.Time04PM);
    $("#time17").val(localStorage.Time05PM);
    $("#time18").val(localStorage.Time06PM);
    $("#time19").val(localStorage.Time07PM);
    $("#time20").val(localStorage.Time08PM);
    $("#time21").val(localStorage.Time09PM);
    $("#time22").val(localStorage.Time10PM);
    $("#time23").val(localStorage.Time11PM);
    $("#time24").val(localStorage.Time12AM);
  }

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

    if (24 === currentHour) {
      $("#time24").addClass("present");
    } else if (24 > currentHour) {
      $("#time24").addClass("future");
    } else {
      $("#time24").addClass("past")
    }

    //Local Storage
 
    $(".btn01").click(function() {
      if ($('#time01').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time01AM = $('#time01').val();
      };
    });

    $(".btn02").click(function() {
      if ($('#time02').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time02AM = $('#time02').val();
      };
    });

    $(".btn03").click(function() {
      if ($('#time03').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time03AM = $('#time03').val();
      };

      $(".btn04").click(function() {
        if ($('#time04').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time04AM = $('#time04').val();
        };
      });
    });

    $(".btn05").click(function() {
      if ($('#time015').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time05AM = $('#time05').val();
      };
    });

    $(".btn06").click(function() {
      if ($('#time06').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time06AM = $('#time06').val();
      };
    });

    $(".btn07").click(function() {
      if ($('#time07').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time07AM = $('#time07').val();
      };
    });

    $(".btn08").click(function() {
      if ($('#time08').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time08AM = $('#time08').val();
      };
    });

    $(".btn09").click(function() {
      if ($('#time09').val() === '') {
      alert("No plans has been entered...")
      return
      } 
      else {
        localStorage.Time09AM = $('#time09').val();
      };
    });

      $(".btn10").click(function() {
        if ($('#time10').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time10AM = $('#time10').val();
        };
      });

      $(".btn11").click(function() {
        if ($('#time10').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time11AM = $('#time11').val();
        };
      });

      $(".btn12").click(function() {
        if ($('#time12').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time12PM = $('#time12').val();
        };
      });

      $(".btn13").click(function() {
        if ($('#time13').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time01PM = $('#time13').val();
        };
      });

      $(".btn14").click(function() {
        if ($('#time14').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time02PM = $('#time14').val();
        };
      });

      $(".btn15").click(function() {
        if ($('#time15').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time03PM = $('#time15').val();
        };
      });
      
      $(".btn16").click(function() {
        if ($('#time16').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time04PM = $('#time16').val();
        };
      });

      $(".btn17").click(function() {
        if ($('#time17').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time05PM = $('#time17').val();
        };
      });

      $(".btn18").click(function() {
        if ($('#time18').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time06PM = $('#time18').val();
        };
      });

      $(".btn19").click(function() {
        if ($('#time19').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time07PM = $('#time19').val();
        };
      });

      $(".btn20").click(function() {
        if ($('#time20').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time08PM = $('#time20').val();
        };
      });

      $(".btn21").click(function() {
        if ($('#time21').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time09PM = $('#time21').val();
        };
      });

      $(".btn22").click(function() {
        if ($('#time22').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time10PM = $('#time22').val();
        };
      });

      $(".btn23").click(function() {
        if ($('#time23').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time11PM = $('#time23').val();
        };
      });

      $(".btn24").click(function() {
        if ($('#time24').val() === '') {
        alert("No plans has been entered...")
        return
        } 
        else {
          localStorage.Time12AM = $('#time24').val();
        };
      });

      //change placeholder text at different width

function eventPlaceholder() {
      if ($(window).width() < 768 ) {
        $(".description").attr("placeholder","events details");
    }
    else $(".description").attr("placeholder","event planner description");
  }  
})