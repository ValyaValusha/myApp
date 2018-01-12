window.onload = function() {
	var w = window.innerWidth;
	if (w > 993) {
		sliderFunction();
	}

	if(navigator.userAgent.match(/Trident\/7\./)) {
	  document.body.addEventListener("mousewheel", function() {
	    event.preventDefault();
	    var wd = event.wheelDelta;
	    var csp = window.pageYOffset;
	    window.scrollTo(0, csp - wd);
	  });
	}

	hideBanner();
}


//----------EXPANDING THE MENU WHEN YOU CLICK ON A SMALL SCREEN------------//
function toggleFunction() {
    var navDemo = document.getElementById("navDemo");
    if (navDemo.className.indexOf("show") == -1) {
        navDemo.className += " show";
    } else {
        navDemo.className = navDemo.className.replace(" show", "");
    }
}


//-----------------------------HIDE BANNER--------------------------------//
function hideBanner() {
	var banner = document.getElementById("banner");
	if ((window.location == "http://localhost:63342/MyApp/index.html?_ijt=4onl0djg09h867t5tkhmre0p8q#!/login") || 
		(window.location == "http://localhost:63342/MyApp/index.html?_ijt=4onl0djg09h867t5tkhmre0p8q#!/application") ||
		(window.location == "http://localhost:63342/MyApp/index.html?_ijt=4onl0djg09h867t5tkhmre0p8q#!/admin") ||
		(window.location == "http://localhost:63342/MyApp/index.html?_ijt=4onl0djg09h867t5tkhmre0p8q#!/login#signUp")){
		banner.style.display = "none";
	}
	else {
		banner.style.display = "block";
	}
}

//-------------------------SLIDER FOR BANNER -------------------------------//
function sliderFunction() {
	var arr = ['img/banner/banner1.jpg', 'img/banner/banner2.jpg', 'img/banner/banner3.jpg'],
		el = document.getElementsByClassName("bgimg-1"),
		navbar = document.getElementById("myNavbar"),
		currentSlide;
	el = el[0];
	var slideInterval = setInterval(nextSlide,3000);
	currentSlide = 0;
	function nextSlide() {
	    el.style.backgroundImage = "url(' " + arr[currentSlide] + " ')";
	    currentSlide = (currentSlide+1)%arr.length;
	}
}

//-------------CHANGING THE NAVGATION MENU ON SCROLLING-----------------------//
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "bar" + " item-card" + " animate-top";
    } else {
        navbar.className = navbar.className.replace(" item-card animate-top", "");
    }
}


//--------------ON CLICK ON THE PICTURE OF THE GALLERY-----------------------//
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


//----------------------ADDING GOOGLE MAPS----------------------------------//
function myMap() {
	  myCenter=new google.maps.LatLng(50.4501, 30.5234);
	  var mapOptions= {
	    center:myCenter,
	    zoom:15, scrollwheel: false, draggable: false,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

	  var marker = new google.maps.Marker({
	    position: myCenter,
	  });
	  marker.setMap(map);
}


//----------------------SHARING ON SOCIAL NETWORKS----------------------------------//
Share = {
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},

	pinterest: function(purl) {
		url  = "https://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.addthis."+
		"com%2Fsocial-plugin%2Fpinterest%23.WlJQSbxdLgU.pinterest&media=http%3A%2F%2Fwww.addthis.com%2Fcms-content%2Fimages"+
		"%2Ffeatures%2Fpinterest-lg.png&description=Make+it+easy+for+your+website+visitors+to+pin+your+content+to+Pinterest"+
		"+with+the+Pinterest+Pin+It+Button.+Start+driving+new+engagement+for+your+brand+today.";
		Share.popup(url);
	},

	linkedin: function(purl) {
		url  = "https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&title=LinkedIn"+
		"%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn";
		Share.popup(url);
	},	

	instagram: function(purl) {
		url  = "https://www.instagram.com/valushatuparieva/";
		Share.popup(url);
	},

	snapchat: function(purl) {
		url  = "https://www.snapchat.com/";
		Share.popup(url);
	},


	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};