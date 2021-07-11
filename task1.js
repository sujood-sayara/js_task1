//loading CSS file
let link = document.createElement("link");
link.href = "task1.css";
link.rel = "stylesheet";
link.type = "text/css";

link.onload = function () {
  console.log("success");
};

link.onerror = function () {
  console.log("error");
};


const tbody = document.getElementById("tbody");
const rowsPerPage = 10;
const data1 = [];
let data2 = {};
let numbers = $("#numbers");
//api URL
const url = "https://restcountries.eu/rest/v2/all";

function getData(requestUrl) {
  fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      makepagination(data);
      for (let i = 0; i < data.length; i++) {
        createRow(data[i]);
      }
      displayRows(1);
      data2 = data;
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
  data1.push(row_2);
}

function makepagination(data) {
  const rowsCount = data.length;
  const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
  for (let i = 0; i < pageCount; i++) {
    numbers.append('<li><a href="#">' + (i + 1) + "</a></li>");
  }

  $("#numbers li:first-child a").addClass("active");
  $("#numbers li a").click(function (e) {
    let $this = $(this);
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
  let start = (index - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  $(data1).hide();
  $(data1).slice(start, end).show();
}

function save_data() {
  let c_name = document.forms["form1"]["name"].value;
  let C_code = document.forms["form1"]["code"].value;
  let c_population = document.forms["form1"]["popu"].value;
  let c_capital = document.forms["form1"]["capital"].value;
  const new_data = {
    name: c_name,
    alpha3Code: C_code,
    population: c_population,
    capital: c_capital,
  };

  data2.push(new_data);
  document.getElementById("numbers").innerHTML = "";
  makepagination(data2);
  createRow(data2[data2.length - 1]);
  displayRows(1);

  return false;
}

getData(url);