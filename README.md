
##GOOD MORNING!
goodmorning.js is a jQuery plugin that makes use of the user's server location to retrieve the time and date and display messages accordingly.

##THE SETUP
Implementing goodmorning.js is simple. Include the goodmorning.js plugin script before the closing body tag of your HTML document, as displayed below. Make sure the script is included after the jQuery script and you have called the correct file path. If you plan on including icons with your message make sure the assets folder is included and located in the same file as the goodmorning.js script.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="goodMorning.js"></script> 
</body>
```
##THE INITIALIZATION
To run goodmorning.js call the function in your main scripts file as outlined below. Note that .wrapper is referring to a div in the HTML markup. You can replace this with the name of the div where you would like to display your goodmorning.js messsage.
```
$(function(){
	$('.wrapper').goodMorning({

	});
});
```				
##THE CUSTOMIZATION
Goodmorning.js can be styled in your css files targeting the time with a class of timeDisplay and the icon with a class of sunriseIcon. I have included a .css file with some default styling as well if you like. You can also customize your goodmorning.js plugin by choosing the time of day at which you would like to display each message. You can also choose to turn icons on or off and implement Friday or Monday modes. The following chart outlines the different options to personalize your goodmorning.js.

```
$(function(){
	$('.wrapper').goodMorning({
		morning: 8,
		noon: 13,
		evening:17,
		night:20,
		icon: true,
		monday: true,
		tgif: true
	});
});
```				
##AND GOOD NIGHT
Goodmorning.js was made possible thanks to the glorious SVG images of Luboš Volkov, hunotika, icons mind, and YEJIN!

Thank you for checking out goodmorning.js.

Happy coding!

- J

jordandeutsch.com
