if (CountryCookie == undefined) {
    
    var CountryCookie = {
        setCookie: function (name, value, expiringDays) {
            var date = new Date();
            date.setTime(date.getTime() + (expiringDays*24*60*60*1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        },
        getCookie: function (name) {
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
    }

    switch(CountryCookie.getCookie('location')) {
        case 'Oceania': window.location.href = 'http://au.tryvertty.com/pages/home'; 
        break;
        case 'Europe': window.location.href = 'https://www.tryvertty.com/pages/home'; 
        break;
        case 'Asis': window.location.href = 'http://www.tryvertty.com/pages/home'; 
        break;
        case 'America': window.location.href = 'http://us.tryvertty.com/pages/home'; 
        break;
        case 'Africa': window.location.href = 'http://us.tryvertty.com/pages/home'; 
        break;
    }        
}