
var sun = {};

sun.time = function(){
	var date = new Date();
	var h = date.getHours()
	var min = date.getMinutes();
	var ampm = (h >= 12) ? "pm" : "am";
	h = ((h + 11) % 12 + 1);
	min = min < 10 ? "0" + min : min;
	var time = h + ":" + min + " " + ampm;
	console.log(time);
	$('.timeDisplay').html(time);
}
setInterval(sun.time, 1000);
