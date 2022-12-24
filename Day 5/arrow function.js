var odd = (arr) => {
  var l = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      l.push(arr[i]);
    }
  }
  console.log(l);
};
odd([2, 3, 4, 65, 3, 343, 5345, 6, 365]);

var titleCase = (word) => {
  var newWord = word[0].toUpperCase();
  for (var x = 1; x < word.length; x++) {
    if (word[x - 1] == " " && word[x] != " ") {
      newWord = newWord + word[x].toUpperCase();
    } else {
      newWord = newWord + word[x].toLowerCase();
    }
  }
  console.log(newWord);
};
titleCase("SoNiC the Hedge Hog");

var add = (arr) =>{
  var a = 0;
  for (var i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  console.log(a);
};
add([2, 3, 4, 65, 3, 343, 5345, 6, 365]);

var prime =(arr)=> {
  var number = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
      number.push(arr[i]);
    } else {
      var factor = 0;
      for (var x = 2; x <= Math.pow(arr[i], 0.5); x++) {
        if (arr[i] % x == 0) {
          factor++;
        }
      }
      if (factor == 0) {
        number.push(arr[i]);
      }
    }
  }
  console.log(number);
};
prime([2, 3, 6, 8, 7, 9, 12, 11]);

var palindrome = (arr) => {
  var number = [];
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var rev = 0;
    while (num != 0) {
      rev += num % 10;
      rev *= 10;
      num = parseInt(num / 10);
    }
    rev /= 10;
    if (rev == arr[i]) {
      number.push(arr[i]);
    }
  }
  console.log(number);
};
palindrome([101, 22, 44, 12, 43, 23]);
