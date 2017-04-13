/**
Programming question3
Print all possible combinations from a given input number
**/
(function() {
  var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  var input = "555";

  function print(s, number) {
    if(number === '') {
      console.log(s);
      return;
    };
    var n = number.charAt(0);
    var letters = map[n];
    for(var i = 0; i < letters.length; i++) {
      print(s + letters[i], number.substring(1));
    }
  }

  print('', input);
})();
