function setDateTwoDaysPrior(dateString) {
  if (dateString == undefined) {
    var d = new Date();
  } else {
    var d = new Date(dateString);
  }
    
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  d.setDate(d.getDate() - 2);

  var month = d.getMonth();
  var date = d.getDate();
  var year = d.getFullYear();

  var fullDate = months[month] + " " + date + ", " + year;
  return fullDate;
}

console.log(setDateTwoDaysPrior());
console.log(setDateTwoDaysPrior("10/1/2019"));
console.log(setDateTwoDaysPrior("5/1/2043"));
console.log(setDateTwoDaysPrior("1/1/2011"));
console.log(setDateTwoDaysPrior("3/1/2014"));
console.log(setDateTwoDaysPrior("9/23/2013"));