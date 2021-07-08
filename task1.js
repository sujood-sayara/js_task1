var link = document.createElement("link");
//loading CSS file
// Loading failedvar link = document.createElement("link");
//loading CSS file
// set properties of link tag
link.href = "task1.css";
link.rel = "stylesheet";
link.type = "text/css";

// Loaded successfully
link.onload = function () {
  console.log("load success");
};

// Loading failed
link.onerror = function () {
  console.log("error");
};

//create table

const tbody = document.getElementById("tbody");

const rowsPerPage = 10;
const data1 = [];
var data2={};
//api URL
const requestOne = "https://restcountries.eu/rest/v2/all";
makeRequest(requestOne);
function makeRequest(requestUrl) {
  fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      makepagination(data);
      for (let i = 0; i <data.length; i++) {
        createRow(data[i]);
      }
      displayRows(1);
      data2=data;
    });
 
    
}
var i=0;
function createRow(cityObj) {
  i++;
  console.log(i);
  let row_2 = document.createElement("tr");
  let row_2_name = document.createElement("td");
  row_2_name.innerHTML = cityObj.name;
  let row_2_code = document.createElement("td");
  row_2_code.innerHTML = cityObj.alpha3Code;
  let row_2_population = document.createElement("td");
  row_2_population.innerHTML = cityObj.population;
  let row_2_capital = document.createElement("td");
  row_2_capital.innerHTML = cityObj.capital;
  row_2.appendChild(row_2_name);
  row_2.appendChild(row_2_code);
  row_2.appendChild(row_2_population);
  row_2.appendChild(row_2_capital);
  tbody.appendChild(row_2);
  data1.push(row_2);
}
var numbers = $("#numbers");
function makepagination(data) {
  
  const rowsCount = data.length;
  const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
 
  for (var i = 0; i < pageCount; i++) {
    numbers.append('<li><a href="#">' + (i + 1) + "</a></li>");
  }
  
  
  $("#numbers li:first-child a").addClass("active");
  $("#numbers li a").click(function (e) {
  var $this = $(this);

    e.preventDefault();

    // Remove the active class from the links.
    $("#numbers li a").removeClass("active");

    // Add the active class to the current link.
    $this.addClass("active");
  
    // Show the rows corresponding to the clicked page ID.
    displayRows($this.text());
  });
  
}
function displayRows(index) {
  var start = (index - 1) * rowsPerPage;
  var end = start + rowsPerPage;
  $(data1).hide();
  $(data1).slice(start, end).show();
}
function readdata(){
 
  var c_name=document.forms["form1"]["name"].value;
  let C_code=document.forms["form1"]["code"].value;
  var c_population=document.forms["form1"]["popu"].value;
  var c_capital=document.forms["form1"]["capital"].value;
  

if(c_name==null || c_name=='' || C_code==null || c_name=='' || c_population==null || c_population==''){
   launch_toast();
}
else if(C_code.length!=3){
  alert("code must contain 3 character");}
else {
  C_code.toUpperCase();
  const new_data = {name:c_name,alpha3Code:C_code,population:c_population,capital:c_capital};
  data2.push(new_data);
  
  document.getElementById('numbers').innerHTML = "";
  makepagination(data2);
 createRow(data2[data2.length-1]);
 displayRows(1);
   
}
}
function launch_toast() {
  var x = document.getElementById("toast")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}
link.onerror = function () {
  console.log("error");
};

//create table
var divFortable = document.getElementById("table");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
table.style.width = "100%";
table.appendChild(thead);
table.appendChild(tbody);
document.getElementById("table").appendChild(table);
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Name ";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "alpha3Code";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "population";
let heading_4 = document.createElement("th");
heading_4.innerHTML = "capital";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);
const rowsPerPage = 10;
const data1 = [];
//api URL
const requestOne = "https://restcountries.eu/rest/v2/all";
function makeRequest(requestUrl) {
  fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      makepagination(data);
    });
}
function createRow(cityObj) {
  let row_2 = document.createElement("tr");
  let row_2_name = document.createElement("td");
  row_2_name.innerHTML = cityObj.name;
  let row_2_code = document.createElement("td");
  row_2_code.innerHTML = cityObj.alpha3Code;
  let row_2_population = document.createElement("td");
  row_2_population.innerHTML = cityObj.population;
  let row_2_capital = document.createElement("td");
  row_2_capital.innerHTML = cityObj.capital;
  row_2.appendChild(row_2_name);
  row_2.appendChild(row_2_code);
  row_2.appendChild(row_2_population);
  row_2.appendChild(row_2_capital);
  tbody.appendChild(row_2);
  tbody.style.width = "100%";
  tbody.style.textAlign = "center";
  data1.push(row_2);
}

function makepagination(data) {
  const rowsCount = data.length;
  const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
  const numbers = $("#numbers");
  for (var i = 0; i < pageCount; i++) {
    numbers.append('<li><a href="#">' + (i + 1) + "</a></li>");
  }
  $("#numbers li:first-child a").addClass("active");
  for (let i = 0; i < rowsCount; i++) {
    createRow(data[i]);
  }
  displayRows(1);
  $("#numbers li a").click(function (e) {
    var $this = $(this);

    e.preventDefault();

    // Remove the active class from the links.
    $("#numbers li a").removeClass("active");

    // Add the active class to the current link.
    $this.addClass("active");

    // Show the rows corresponding to the clicked page ID.
    displayRows($this.text());
  });
}
function displayRows(index) {
  var start = (index - 1) * rowsPerPage;
  var end = start + rowsPerPage;
  $(data1).hide();
  $(data1).slice(start, end).show();
}
makeRequest(requestOne);
