function pickRandom(array, length) {
  var toReturn = "";
  for (var i = 0; i < length; i++) {
    toReturn += array[Math.floor(Math.random()*array.length)];
  }
  return toReturn;
}

function createPassword() {

  var items = [];
  $(".charOption:checked").each(function(i) {
    items = items.concat($(this).val().split(""));
  });

  var newPassword = "P4ssW0rd!";

  if (items.length > 0) {
    newPassword = pickRandom(items, parseInt($("#length").val()));
  }

  $("#result").val(newPassword);
}
