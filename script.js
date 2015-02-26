
var sun = {};

sun.revolve = function(){

};
//find out the time. 
//based on the time of day position sun in sky
// move sun 4.16% every 3600sec (an hour)


sun.time = function(){
	var date = new Date();
	sun.h = date.getHours()
	sun.min = date.getMinutes();
	var ampm = (sun.h >= 12) ? "pm" : "am";
	sun.h = ((sun.h + 11) % 12 + 1);
	sun.min = sun.min < 10 ? "0" + sun.min : sun.min;
	var time = sun.h + ":" + sun.min + " " + ampm;
	console.log(time);
	$('.timeDisplay').html(time);
}
setInterval(sun.time
	, 1000);

// sun.circle = function(icon, degree){
// 		 $(icon).attr('transform', 'rotate('+ degree +' 50 50)');
// 		 console.log(icon)
// 	}

// sun.circle($('.sun'), 30*(sun.h%12) + sun.min/2);	


setInterval(
	function(){
		sun.circle = function(icon, degree){
				icon.css({WebkitTransform: 'rotate('+ (degree + 90) +'deg)'});
				 console.log(icon)
			}
		sun.circle($('.sunrise'), 30*(sun.h%12) + sun.min/2);	
		console.log(30*(sun.h%12) + sun.min/2);
	}
	// function circle(icon, degree){
	// 	 icon.setAttribute('transform', 'rotate('+ degree +' 50 50)');
	// 	 console.log('merp')
	// }
	// var sunIcon = $('.sun')
	// var timing = 30*(sun.h%12) + sun.min/2;
	// circle(sunIcon, timing);
	// console.log('meep');
	, 1000)

	