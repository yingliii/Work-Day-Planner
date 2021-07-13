//get current date on the header
function getDate() {
    var currentDate = moment().format('dddd, MMMM Do, h:mm:ss a');
    $('#currentDay').text(currentDate);
}
//display the function getDate on website
getDate();
console.log(getDate);

var hour7 = $('#7');
var hour8 = $('#8');
var hour9 = $('#9');
var hour10 = $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour1 = $('#13');
var hour2 = $('#14');
var hour3 = $('#15');
var hour4 = $('#16');
var hour5 = $('#17');
var hour6 = $('#18');

function hourColor() {
    hour = moment().hour();
    $('.time-block').each(function() {
        var currentHour = parseInt($(this).attr('id'));

        if (currentHour > hour) {
            $(this).addClass('future');
        } if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
}
//call the function
hourColor();

//set local storage for description using save button
$('.saveBtn').on('click', function(event) {
    var time = $(this).parent().attr('id');
    console.log(time);

    var description = $(this).siblings('.description').val();
    console.log(description);

    localStorage.setItem(time, description);
})


function setPlanner() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var description = localStorage.getItem(id);

        if (description !== null) {
            $(this).children(".description").val(description);
        }
    });
}
setPlanner();