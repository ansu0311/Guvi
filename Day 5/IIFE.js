(function () {
  var arr = [2, 3, 4, 65, 3, 343, 5345, 6, 365];
  var l = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      l.push(arr[i]);
    }
  }
  console.log(l);
})();

(function () {
  var word = "SoNiC the Hedge Hog";
  var newWord = word[0].toUpperCase();
  for (var x = 1; x < word.length; x++) {
    if (word[x - 1] == " " && word[x] != " ") {
      newWord = newWord + word[x].toUpperCase();
    } else {
      newWord = newWord + word[x].toLowerCase();
    }
  }
  console.log(newWord);
})();

(function () {
  var arr = [2, 3, 4, 65, 3, 343, 5345, 6, 365];
  var a = 0;
  for (var i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  console.log(a);
})();

(function () {
  var arr = [2, 3, 6, 8, 7, 9, 12, 11];
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
})();

(function () {
  var arr = [101, 22, 44, 12, 43, 23];
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
})();

(function () {
  arr1 = [101, 22, 44, 12, 43, 23];
  arr2 = [54, 123, 67, 43, 78, 22, 12];
  var i = arr1.length;
  var j = arr2.length;
  var n = i + j;
  var arr3 = [];
  for (var x = 0; x < i; x++) {
    arr3[x] = arr1[x];
  }
  for (var x = i; x < i + j; x++) {
    arr3[x] = arr2[x - i];
  }
  arr3.sort(function (a, b) {
    return a - b;
  });

  if (n % 2 == 0) {
    var z = n / 2;
    var e = arr[z];
    var q = arr[z - 1];
    var ans = (e + q) / 2;
    console.log(ans);
  } else {
    var z = parseInt(n / 2);
    console.log(arr3[z]);
  }
})();

(function () {
  arr = [101, 22, 44, 12, 12, 43, 23, 54, 123, 67, 43, 78, 123, 22, 12];
  arr.sort(function (a, b) {
    return a - b;
  });
  var dup = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      i++;
    } else {
      dup.push(arr[i]);
    }
  }
  console.log(dup);
})();

(function () {
  arr = [101, 22, 44, 12, 12, 43, 23, 54, 123, 67, 43, 78, 123, 22, 12];
  k = 4;
  while (k != 0) {
    arr.reverse();
    k--;
  }
  console.log(arr);
})();
