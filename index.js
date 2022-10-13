const hour = +prompt("Enter hour!", "");
const min = 60;
const sec = 60;
let second = hour * min * sec;

if (isNaN(hour)) {
  alert("Not correct data!")
}else{
alert(second);
}