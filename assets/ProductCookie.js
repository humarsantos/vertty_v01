function setCookie (name, value, expiringDays) {
	var date = new Date();
	date.setTime(date.getTime() + (expiringDays*1000));
	var expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie (name) {
	var name = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}

if (window.location.href.indexOf('home') < 0) {
	switch(getCookie('isFromHome')) {
		case 'true': 
			var distanceY = document.getElementsByClassName('product')[0].offsetTop;
			window.scrollBy(0, distanceY); 
		break;
		case false: ''; 
		break;
	} 	
}