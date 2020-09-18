// from data.js
var tableData = data;

// YOUR CODE HERE!

var table_body = d3.select("tbody");

tableData.forEach(function(ufo) {
  console.log(ufo);
  var row = table_body.append("tr");
  Object.entries(ufo).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});


var button = d3.select("#filter-btn");


var form = d3.select("#filters");

 
button.on("click", checkDate);
form.on("submit", checkDate);

function checkDate () {
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(alien => alien.datetime == inputValue);

  console.log(filteredData);

};

 