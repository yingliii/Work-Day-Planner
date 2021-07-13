var timeDisplayEl = $('#time-display');
var hourEl = $('.hour');
var textEl = $('#description');
var saveBtn = document.querySelector('.saveBtn')
var pastColor = $('.past');
var presentColor = $('.present');
var futureColor = $('.future');

//get current date on the header
function getDate() {
    var currentDate = moment().format('MMMM Do, dddd');
    $('#currentDay').textContent(currentDate);
}
getDate();
console.log(getDate());