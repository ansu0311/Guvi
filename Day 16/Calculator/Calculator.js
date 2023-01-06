var result = "";
refreshResult();
function refreshResult() {
  document.getElementById("resultValue").innerText = result;
}
function buttonClear() {
  result = "";
  refreshResult();
}
function buttonOpenBrases() {
  result += "(";
  refreshResult();
}
function buttonCloseBrases() {
  result += ")";
  refreshResult();
}
function buttonModulus() {
  if (result.slice(-1) !== "%") {
    result += "%";
    refreshResult();
  }
}
function button7() {
  result += "7";
  refreshResult();
}
function button8() {
  result += "8";
  refreshResult();
}
function button9() {
  result += "9";
  refreshResult();
}
function buttonDivide() {
  if (result.slice(-1) !== "/") {
    result += "/";
    refreshResult();
  }
}
function button4() {
  result += "4";
  refreshResult();
}
function button5() {
  result += "5";
  refreshResult();
}
function button6() {
  result += "6";
  refreshResult();
}
function buttonMultiply() {
  if (result.slice(-1) !== "*") {
    result += "*";
    refreshResult();
  }
}
function button1() {
  result += "1";
  refreshResult();
}
function button2() {
  result += "2";
  refreshResult();
}
function button3() {
  result += "3";
  refreshResult();
}
function buttonAdd() {
  if (result.slice(-1) !== "+") {
    result += "+";
    refreshResult();
  }
}
function buttonBackSpace() {
  result = result.slice(0, -1);
  refreshResult();
}
function button0() {
  result += "0";
  refreshResult();
}
function buttonDot() {
  if (result.slice(-1) !== ".") {
    result += ".";
    refreshResult();
  }
}
function buttonSubstract() {
  if (result.slice(-1) !== "-") {
    result += "-";
    refreshResult();
  }
}
function buttonEquals() {
  result = eval(result);
  refreshResult();
}
document.addEventListener("keydown", (event) => {
  var name = event.key;
  var code = event.code;
  console.log(
    `name is = ${name}  and code is = ${code} \n ${parseInt(name)}`
  );
  if (!isNaN(parseInt(name))) {
    result += name;
    refreshResult();
  } else if (name == "+") {
    buttonAdd();
  } else if (name == "%") {
    buttonModulus();
  } else if (name == "-") {
    buttonSubstract();
  } else if (name == "/") {
    buttonDivide();
  } else if (name == "*") {
    buttonMultiply();
  } else if (name == ".") {
    buttonDot();
  }else if (name == "Enter") {
    buttonEquals();
  }else if (name == "Backspace") {
    buttonBackSpace();
  }
});
