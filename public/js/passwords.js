function pickRandom(array, length) {
  var toReturn = "";
  for (var i = 0; i < length; i++) {
    toReturn += array[Math.floor(Math.random()*array.length)];
  }
  return toReturn;
}

function createPassword() {
  var lower  = ($("#lowerCase").is(':checked') ? 'abcdefghijklmnopqrstuvwxyz'.split('') : []);
  var upper  = ($("#upperCase").is(':checked') ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') : []);
  var num    = ($("#numbers").is(':checked') ? '1234567890'.split('') : []);
  var symbol = ($("#symbols").is(':checked') ? "!@#$%^&*()_+-={}:\"|<>?~`,./;'\\[]'".split('') : []);
  var custom = ($("#custom").is(':checked') ? $("#customArray").val().split('') : []);

  console.log("lowerCase: " + $("#lowerCase").is(':checked'));
  console.log("upperCase: " + $("#upperCase").is(':checked'));
  console.log("numbers: "   + $("#numbers").is(':checked'));
  console.log("symbols: "   + $("#symbols").is(':checked'));
  console.log("custom: "    + $("#custom").is(':checked'));

  var items = lower.concat(upper).concat(num).concat(symbol).concat(custom);

  if (items.length === 0) {
    var newPassword = "P4ssW0rd!"
  } else {
    var newPassword = pickRandom(items, 16);
  }

  console.log(newPassword);
  $("#result").val(newPassword);
}
