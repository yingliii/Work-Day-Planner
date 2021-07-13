var timeDisplayEl = $('#time-display');
var hourEl = $('.hour');
var textEl = $('#description');
var saveBtn = document.querySelector('.saveBtn')
var pastColor = $('.past');
var presentColor = $('.present');
var futureColor = $('.future');

//get current date on the header
function getDate() {
    var currentDate = moment().format('dddd, MMMM Do, h:mm:ss a');
    $('#currentDay').text(currentDate);
}
getDate();
console.log(getDate);