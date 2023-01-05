function tableTransfer() {
  const fName = document.getElementById("first-name").value;
  console.log(fName);
  const lName = document.getElementById("last-name").value;
  console.log(lName);
  const address = document.getElementById("address").value;
  console.log(address);
  const pinCode = document.getElementById("pincode").value;
  console.log(pinCode);
  var genderlist = document.getElementsByName("gender");
  let gender;
  for (i = 0; i < genderlist.length; i++) {
    if (genderlist[i].checked) {
      gender = genderlist[i].value;
    }
  }
  console.log(gender);
  var selected = [];
  for (var option of document.getElementById("food").options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  let foodList = selected.join(",");
  console.log(foodList);
  const state = document.getElementById("state").value;
  console.log(state);
  const country = document.getElementById("country").value;
  console.log(country);
  
  // Get the table element in which you want to add row
  let table = document.getElementById("myTable");

  // Create a row using the inserRow() method and
  // specify the index where you want to add the row
  let row = table.insertRow(-1); // We are adding at the end
  var rowCount = table.rows.length;
  // Create table cells
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);
  let c5 = row.insertCell(4);
  let c6 = row.insertCell(5);
  let c7 = row.insertCell(6);
  let c8 = row.insertCell(7);
  let c9 = row.insertCell(8);

  // Add data to c1 and c2
  c1.innerText = rowCount - 1;
  c2.innerText = fName;
  c3.innerText = lName;
  c4.innerText = address;
  c5.innerText = pinCode;
  c6.innerText = gender;
  c7.innerText = foodList;
  c8.innerText = state;
  c9.innerText = country;

  var minCheckedCount = 2;
  var minCheckedAlertMessage = "Woops! Select min of 2 element!";
  if(selected.length<minCheckedCount){
    alert(minCheckedAlertMessage);
    document.getElementById("myTable").deleteRow(-1);
  }
}
