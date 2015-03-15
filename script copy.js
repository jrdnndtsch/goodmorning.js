
var sun = {};
var geocoder;

sun.time = function(){
	var date = new Date();
	// console.log(date);
	sun.hh = date.getHours()
	sun.min = date.getMinutes();
	var month = date.getUTCMonth() + 1;
	month = month < 10 ? '0' + month : month;
	var day = date.getUTCDate();
	var year = date.getUTCFullYear();
	sun.dateFull = year + '-' + month + '-' + day
	// console.log(sun.dateFull);
	var ampm = (sun.hh >= 12) ? "pm" : "am";
	sun.h = ((sun.hh + 11) % 12 + 1);
	sun.min = sun.min < 10 ? "0" + sun.min : sun.min;
	var time = sun.h + ":" + sun.min + " " + ampm;
	// console.log(time);
	$('.timeDisplay').html(time);
}
setInterval(sun.time
	, 1000);


// sun.geo = function(){
// var deferred = $.Deferred();
// navigator.geolocation.getCurrentPosition(function(position) {
// 	  console.log(position);
	  // sun.lat = position.coords.latitude;
	  // sun.lon = position.coords.longitude;
// 	 deferred.resolve,
// 	 deferred.reject
// 	});
// 	return deferred.promise();
// };

var geo = function(options){
	var deferred = $.Deferred();
	navigator.geolocation.getCurrentPosition(
		deferred.resolve,
		options,
		console.log(options)
		);
	sun.lat = options.coords.latitude;
	sun.lon = options.coords.longitude;
	return deferred.promise();
};

	
sun.rise = function(){
	console.log("I am happening")
	mycallback= {};
	$.ajax({
		url:'http://api.sunrise-sunset.org/json?&callback=mycallback',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			lat: sun.lat,
			lng: sun.lon,
			date: sun.dateFull
		
		},
		success: function(data){
			console.log(data);
			sun.getDiff(data)
			// sun.toEST(data)

		}

	})
}

var deferred = $.Deferred();

deferred.done(function(geo) {
   alert(geo);
});

deferred.resolve("hello world");


// sun.startRise = function(){
	// $.when(sun.geo())
	// .then(sun.rise())
// }

sun.getDiff = function(data){
	var dayLightOffset = (new Date()).getTimezoneOffset(); // num of mins between UTC and current user
	sun.sunrise = data.results.sunrise;
	sun.test = sun.sunrise.split(':');
	sun.set = data.results.sunset;
	sun.test2 = sun.set.split(':');

	// sun.test[0] = parseInt(sun.test[0]);
		
	// sun.test[1] = parseInt(sun.test[1]);
	// sun.riseMins = (sun.test[0]*60) + sun.test[1];
		

	// sun.diffTime = sun.riseMins - dayLightOffset;
	// sun.diffTimeMins = ((sun.diffTime % 60) > 10) ? (sun.diffTime % 60) : "0" + (sun.diffTime % 60);
	// sun.riseEST = (Math.floor((sun.diffTime/60))) + ":" + (sun.diffTimeMins % 60);
		
	// sun.curTime = sun.hh + ":" + sun.min;
	// console.log('the cur time' + sun.curTime);

	// sun.test2[0] = parseInt(sun.test2[0]);
	// sun.test2[1] = parseInt(sun.test2[1]);

	// sun.setMins = (sun.test2[0]*60) + (12*60) + sun.test2[1];

	// sun.diffTime2 = sun.setMins - dayLightOffset;
	// sun.diffTime2Mins = ((sun.diffTime2 % 60) > 10) ? (sun.diffTime2 % 60) : "0" + (sun.diffTime2 % 60);
	// sun.setEST = (Math.floor((sun.diffTime2/60))) + ":" + sun.diffTime2Mins;
	// console.log('look at this' + sun.setEST);


}



sun.sunriseAnimation = function(){
	console.log('am i logging' + sun.hh);
	if (sun.hh > 7) {
			// alert('meep');
		var sunrise = $('<img src="sun.svg" alt = "sun">');
		$('.sunriseIcon').html(sunrise);

	} 
	else{
		// alert('merp');
		var sunset = $('<img src="moon.svg" alt = "moon">');
		$('.sunriseIcon').append(sunset);
	}
}
		
	

$(function(){
	sun.geo();
	$.when(sun.geo()).then(sun.rise());
	
});



	