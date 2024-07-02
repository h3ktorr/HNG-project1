window.onload = function(){
 const utcTimeElement = document.getElementById("time");
 const dayOfWeekElement = document.getElementById("day");

 function updateTime(){
  const newDate = new Date();
  utcTimeElement.textContent = newDate.toUTCString().split(' ')[4];
  dayOfWeekElement.textContent = newDate.toLocaleString('en-NG', {weekday: 'long'})
 }

 updateTime();
 setInterval(updateTime, 1000)
}