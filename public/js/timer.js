function makeTimeString(deciSeconds) {
  var d = "." + (deciSeconds % 10);
  var seconds = parseInt(deciSeconds / 10);

  var s = ("0" + seconds % 60).slice(-2);
  var minutes = parseInt(seconds / 60);

  var m = ("0" + minutes % 60).slice(-2) + ":";
  var h = parseInt(minutes / 60) + ":";

  // Put each part together to make the actual time display
  var timeString = h + m + s + d;

  // Remove all the leading 0s and : from the timestring, so we don't show hours
  // when we're down to 10 seconds
  while (timeString.length > 3 && (timeString[0] === "0" || timeString[0] === ":")) {
    timeString = timeString.slice(-1 * (timeString.length - 1));
  }

  return timeString;
}

function stopTimer() {
  // Clear the timeout and reset everything to 0s
  clearTimeout(window.timerTimeout);
  $("#pauseButton").css("color", "black");
  $("#pauseButton").attr("disabled", true);
  $("#timerBar").animate({width: "0"}, 1);
}

function continueTimer(deciSeconds) {
  if (deciSeconds === 0) {
    $("#timeLeft").html("Time's up!");
    stopTimer();
  } else {
    $("#timeLeft").html(makeTimeString(deciSeconds));

    // Each pass, we reduce this by 1
    var newDeciSeconds = window.lastTime = deciSeconds - 1;

    var percent = parseInt((1 - (newDeciSeconds / window.startCounter)) * 10000) / 100;
    $("#timerBar").animate({width: "" + percent + "%"}, 1);

    // Create the timeout outside the scope of this function (so we can stop it)
    window.timerTimeout = setTimeout(function(){continueTimer(newDeciSeconds);}, 100);
  }
}

function pauseTimer() {
  if (window.timerTimeout === null) {
    $("#pauseButton").css("color", "black");
    continueTimer(window.lastTime);
  } else {
    $("#pauseButton").css("color", "red");
    clearTimeout(window.timerTimeout);
    window.timerTimeout = null;
  }
}

function startTimer() {
  clearTimeout(window.timerTimeout); // Does nothing if not already set

  $("#pauseButton").attr("disabled", false);
  $("#timerBar").animate({width: "0%"}, 1);

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

  while (secondsDecimal > 10) {
    secondsDecimal = parseInt(secondsDecimal / 10);
  }

  // count up the number of deci-seconds for ease of calculating
  var deciSeconds = secondsDecimal + (seconds * 10) + (minutes * 600) + (hours * 36000);
  window.startCounter = deciSeconds;
  continueTimer(deciSeconds);
}
