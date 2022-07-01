var nine = localStorage.getItem('1');
document.getElementById('block9').value = JSON.parse(nine);
var ten = localStorage.getItem('2');
document.getElementById('block10').value = ten;
var eleven = localStorage.getItem('3');
document.getElementById('block11').value = eleven;
var twelve = localStorage.getItem('4');
document.getElementById('block12').value = twelve;
var thirteen = localStorage.getItem('5');
document.getElementById('block13').value = thirteen;
var fourteen = localStorage.getItem('6');
document.getElementById('block14').value = fourteen;
var fifteen = localStorage.getItem('7');
document.getElementById('block15').value = fifteen;
var sixteen = localStorage.getItem('8');
document.getElementById('block16').value = sixteen;
var seventeen = localStorage.getItem('9');
document.getElementById('block17').value = seventeen;

// function that grabs current date and time

function getDay() {
  var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').append(currentDay);
}

getDay();

//color code time blocks
//first get current time
var now = new Date();
var time = now.getHours();
console.log(time);
console.log(now);

$(document).ready(function () {
  //input boxes as an array get index of each item you loop
  $('.my-input').each(function (input) {
    //take the data attribute and read the time value to change from string to number
    var dataAttTime = $('.time-slot')[input].id;
    var dataAttNum = Number(dataAttTime);

    var colorBlock = $(`.my-input`)[input];

    //conditional adding color/class
    if (dataAttNum < time) {
      colorBlock.classList.add('past');
    } else if (dataAttNum === time) {
      colorBlock.classList.add('present');
    } else if (dataAttNum > time) {
      colorBlock.classList.add('future');
    }
  });
});

//add data to local storage!
$('.saveBtn').click(function () {
  var nine = document.getElementById('block9').value;
  localStorage.setItem('1', JSON.stringify(nine));
  JSON.parse(localStorage.getItem(nine));
  var ten = document.getElementById('block10').value;
  localStorage.setItem('2', ten);
  var eleven = document.getElementById('block11').value;
  localStorage.setItem('3', eleven);
  var twelve = document.getElementById('block12').value;
  localStorage.setItem('4', twelve);
  var one = document.getElementById('block13').value;
  localStorage.setItem('5', one);
  var two = document.getElementById('block14').value;
  localStorage.setItem('6', two);
  var three = document.getElementById('block15').value;
  localStorage.setItem('7', three);
  var four = document.getElementById('block16').value;
  localStorage.setItem('8', four);
  var five = document.getElementById('block17').value;
  localStorage.setItem('9', five);
});
