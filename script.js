
var sun = {};

sun.time = function(){
	var date = new Date();
	console.log(date);
	var h = date.getHours()
	var min = date.getMinutes();
	var time = h + ":" + min;
	console.log(time);
}
