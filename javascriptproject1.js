var blackcolor = document.getElementById('blackW');
var redcolor = document.getElementById('red');
var bluecolor = document.getElementById('blue');
var purplecolor = document.getElementById('purple');
var screenStr = document.getElementById('displayscreen');
var heartRate = document.getElementById('heartrate');
var heartLbl = document.getElementById('heartlabel');
var smartwatch = document.getElementById("smartwatch");
var currentTime = document.getElementById('timedisplay');

blackcolor.addEventListener('click',function() {
	 smartwatch.src = "https://i.imgur.com/iOeUBV7.png";
})
redcolor.addEventListener('click',function() {
	 smartwatch.src = "https://i.imgur.com/PTgQlim.png";
});
bluecolor.addEventListener('click',function() {
	 smartwatch.src = "https://i.imgur.com/Mplj1YR.png";
});
purplecolor.addEventListener('click',function() {
	 smartwatch.src = "https://i.imgur.com/xSIK4M8.png";
});
function myTimer(){
	var currentDate=new Date();
	var displayTime = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
	screenStr.innerHTML = displayTime;
	heartLbl.style.display="none";
}
heartRate.addEventListener('click',function(){
	screenStr.innerHTML='<i id="heartBeat" class="fas fa-heartbeat"></i>'
	heartLbl.style.display="block";
});