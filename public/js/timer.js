function makeTimeString(secondsDecimal, seconds, minutes, hours) {
  // Default state is to not show the hours, so the empty string is used
  var hoursString = "";
  if (hours > 0) {
    hoursString = hours + ":";
  }

  var minutesString = "";
  // Don't show the minutes unless there are some, or the hours are set
  if (hoursString === "" && minutes > 0) {
    minutesString = "" + minutes + ":"
  } else if ((minutes > 0 && minutes < 10) || hoursString != "") {
    // slightly more advanced code below: Start with an empty string, then "add"
    // a 0 followed by the number (which is automatically changed to a string to
    // match types), then take the last two characters.
    //
    // This means that 5 becomes 05, and 25 becomes 025, which is cut down to 25
    // Forcing the display to always have two characters
    minutesString = ("" + 0 + minutes).slice(-2) + ":";
  }

  var secondsString = "" + seconds;
if (seconds < 10 && minutesString != "") {
    secondsString = ("" + 0 + seconds).slice(-2);
  }

  // As above, but add the decimal point before it as well
  var secondsDecimalString = "." + secondsDecimal;

  // Put each part together to make the actual time display
  return hoursString + minutesString + secondsString + secondsDecimalString;
}

function continueTimer(secondsDecimal, seconds, minutes, hours) {
  if (secondsDecimal + seconds + minutes + hours === 0) {
    $("#timeLeft").html("Time's up!");
    stopTimer();
  } else {
    $("#timeLeft").html(makeTimeString(secondsDecimal, seconds, minutes, hours));

    // Each pass, we reduce this by 1
    var newSecondsDecimal = secondsDecimal - 1;

    var newSeconds = seconds;
    // if this is less than 0, it means we've looped to the next second
    if (newSecondsDecimal < 0) {
      newSecondsDecimal = 9;
      newSeconds -= 1;
    }

    var newMinutes = minutes;
    // if this is less than 0, it means we've looped to the next minute
    if (newSeconds < 0) {
      newSeconds = 59;
      newMinutes -= 1;
    }

    var newHours = hours;
    // if this is less than 0, it means we've looped to the next hour
    if (newMinutes < 0) {
      newMinutes = 59;
      newHours -= 1;
    }

    // Create the timeout outside the scope of this function (so we can stop it)
    window.timerTimeout = setTimeout(function(){continueTimer(newSecondsDecimal, newSeconds, newMinutes, newHours);}, 100);
  }
}

function startTimer() {
  clearTimeout(window.timerTimeout); // Does nothing if not already set
  $("#playIcon").show();
  $("#stopIcon").hide();

  // Split XX:XX:XX into it's component parts
  var timeArr = $("#timer").val().split(":").reverse();

  // The last part might have decimal places, so split it further
  var secsArr = timeArr[0].split(".");

  // Convert (parse) the string that was typed into numbers (Int = integer)
  var secondsDecimal = parseInt(secsArr[1]);
  var seconds = parseInt(secsArr[0]);
  var minutes = parseInt(timeArr[1]);
  var hours = parseInt(timeArr[2]);

  // isNaN() checks the variable for something that isn't a number (NaN = Not a Number)
  // Set each component to it's default of 0 if not set
  if (isNaN(secondsDecimal)) {secondsDecimal = 0;}
  if (isNaN(seconds)) {seconds = 0;}
  if (isNaN(minutes)) {minutes = 0;}
  if (isNaN(hours)) {hours = 0;}

  // Only allow 1 decimal place - remove everything after that:
  while (secondsDecimal > 10) {secondsDecimal = parseInt(secondsDecimal/10)}

  // Round up times that aren't correctly formatted (eg 300 minutes -> 5 hours)
  while (seconds > 59) {
    minutes += 1;
    seconds -= 60;
  }
  while (minutes > 59) {
    hours += 1;
    minutes -= 60;
  }

  continueTimer(secondsDecimal, seconds, minutes, hours);
}

function stopTimer() {
  // Clear the timeout and stop the timer from counting down
  clearTimeout(window.timerTimeout);
  $("#stopIcon").show();
  $("#playIcon").hide();
}
