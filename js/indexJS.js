

var widthcheck = $( window ).width();
	console.log(widthcheck);




/*
$(document).ready(function(){
var tl = new TimelineLite();
	if (widthcheck > 1024) {
	$(document).on("mouseenter","#skypeDiv",function(){
		tl.to("#skypeDiv", 1.2, {height: "26%"})
		.to(".skypeinfo", 0.2, {display: "block"})
		.to(".skypeinfo", 0.5, {opacity:1});
	});
	}
	$(document).on("mouseleave", "#skypeDiv", function(){
		tl.to(".skypeinfo", 0.5, {opacity:0})
		.to(".skypeinfo", 0.2, {display:"none"})
		.to("#skypeDiv", 1.1, {height: "8%"});
	});
}); 
*/

$(document).ready(function(){
var tl = new TimelineLite();
	if (widthcheck > 1025) {
	$(document).on("mouseenter","#skypeDiv",function(){
		tl.reversed(false);
		tl.to("#skypeDiv", 1.2, {height: "30%", yPercent: "-65%"})		
		.to(".skypeinfo", 0.2, {display: "block"})
		.to(".skypeinfo", 0.5, {opacity:1});
	});
	}
	$(document).on("mouseleave", "#skypeDiv", function(){
		tl.reversed(true);
	/*	tl.to(".skypeinfo", 0.5, {opacity:0})
		.to(".skypeinfo", 0.2, {display:"none"})
		.to("#skypeDiv", 1.2, {top: "80%"})
		.to("#skypeDiv", 1.2, {height: "3%"}, -1.2); */
	});
});


$(document).ready(function(){
var tl = new TimelineLite();
	$("#skypeDiv").click(function(){
		if (widthcheck < 1124) {
			tl.reversed(false);
			tl.to("#skypeDiv", 1.2, {height: "30%", yPercent: "-65%"})		
			.to(".skypeinfo", 0.2, {display: "block"})
			.to(".skypeinfo", 0.5, {opacity:1});
		}	
	});
	$("#skypeDiv").click(function(){
		if (widthcheck < 1124) {
			tl.reversed(true);
		}
	});
});



/* tooltipster initialize */
$(document).ready(function() {
    $('.tooltip').tooltipster();
});

$('#REattorney').tooltipster({
	theme: '.tooltipster-light',
	animation: 'grow',
	interactive: true,
    content: $('<a href="http://www.w3.org/html/wiki/FAQs" style="text-decoration: none;">What is HTML?</a>')

});


var controller;
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
});

$(document).ready(function($) {
	if (widthcheck > 1024) {
    htmlLogo = document.getElementById("htmlLogo");
    cssLogo = document.getElementById("cssLogo");
    javascriptLogo = document.getElementById("javascriptLogo");
	TweenLite.to($("#loading"), 2, {opacity:0, delay: 2, onComplete: myFunction});
	function myFunction() {
	TweenLite.to($("#loading"), 0.2, {display:"none"})
	    TweenMax.staggerFromTo([htmlLogo, cssLogo, javascriptLogo], 3,  {scale:1.6, opacity:0}, {scale: 1, opacity: 1}, 1.0);        
	}
	}
});

/*
$(document).ready(function($) {
		TweenMax.to(scrollArrow, 1.5, {opacity: 0, repeat:-1, yoyo:true}, 3);
});
*/
/* For these animations, add 	scene.addIndicators(); 	at end of var scene to debug */



/*
$(document).ready(function($) {
	// build tween 		
	var tween = TweenLite.from(".tools-proficiencies", 0.9, {backgroundColor: "white"});

	// build scene
	var scene = new ScrollScene({triggerElement: "#toolsTrigger", duration: 250})
		.setTween(tween)
		.addTo(controller);
});	


$(document).ready(function($) {
	// build tween 		
	var tween = TweenLite.from(leftIcons, 1, {opacity: 0});

	// build scene
	var scene = new ScrollScene({triggerElement: "#iconTrigger1", duration: 250})
		.setTween(tween)
		.addTo(controller);
});	

/* to bring back movement of icons, include this after opacity -> right:"4%" left:"4%" , respectively 
$(document).ready(function($) {
	// build tween 		
	var tween = TweenLite.from(rightIcons, 1, {opacity: 0});

	// build scene
	var scene = new ScrollScene({triggerElement: "#iconTrigger1", duration: 250})
		.setTween(tween)
		.addTo(controller);
});
*/



/* Stagger tools li fade in. */
$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = TweenMax.staggerFrom($(".toolname"), 0.5, {color:"black"}, 0.25)
	// build scene
	var scene = new ScrollScene({triggerElement: "#toolListTrigger"})
		scene.reverse(false)
		scene.setTween(tween)
		scene.addTo(controller);
		var enabled = scene.enabled();
		console.log("tools"+enabled);
	} else {
		console.log("under 1024");
	}
});





$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = new TimelineMax()
		/*
		.add (
			TweenMax.from("#ptdiv", 1, {display: "none"})
		)

		
		.add (
			TweenMax.from("#ptdiv", 0.75, {height: "0px"})
		)

		.add (
			TweenMax.from("#portfoliotitle", 1, {display: "none"})
		)
		*/

		.add (
			TweenMax.to("#portfoliotitle", 0.5, {backgroundColor: "#000000", color: "#FF6600", textShadow:"2px 2px 15px #FF6600"})

		);

	// build scene
	var scene = new ScrollScene({triggerElement: "#portfolioTrigger"})
		.setTween(tween)
		.addTo(controller);
	} else {
		console.log("under 1024");
	}
});


// Changes fixed pic from group shot to mica shot


/* Timeline synergin
$(document).ready(function($) {
	// build tween
	var tween = new TimelineMax()
		.add (
			TweenLite.to(synerginFixedPic, 0.01, {backgroundImage: "url('mediaFolder/indexRemakeMedia/justmica1366.jpg')"})
		)

		.add (
			TweenLite.from(micaCaption, 0.01, {opacity: 0, top:"5%"})
		)

		.add (
			TweenLite.to(teamCaption, 1, {opacity: 0, top:"-5%"})
		)

	// build scene
	var scene = new ScrollScene({triggerElement: "#synerginTrigger"})
		.setTween(tween)
		.addTo(controller);
});	 
*/

/* original synerginTrigger function */
$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = TweenLite.to(synerginFixedPic, 0.00001, {backgroundImage: "url('mediaFolder/indexRemakeMedia/justmica1366.jpg')"});

	// build scene
	var scene = new ScrollScene({triggerElement: "#synerginTrigger"})
		scene.setTween(tween)
		scene.addTo(controller);
	} else {
		console.log("under 1024");
	}
});	 

$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = TweenLite.from(micaCaption, 0.00001, {opacity: 0, top:"5%"});

	// build scene
	var scene = new ScrollScene({triggerElement: "#synerginTrigger", duration: 200})
		scene.setTween(tween)
		scene.addTo(controller);
	} else {
		console.log("under 1024");
	}
});	

$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = TweenLite.to(teamCaption, 1, {opacity: 0, top:"-5%"});

	// build scene
	var scene = new ScrollScene({triggerElement: "#synerginTrigger", duration: 200})
		scene.setTween(tween)
		scene.addTo(controller);
		var enabled = scene.enabled();
		console.log(enabled);
	} else {
		console.log("under 1024");
	}
});	



$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = TweenLite.to(synerginFixedPic, 0.5, {opacity: 0});

	// build scene
	var scene = new ScrollScene({triggerElement: "#elevatorTriggerHeight"})
		scene.setTween(tween)
		scene.addTo(controller);
	} else {
		console.log("under 1024");
	}
});

$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = TweenLite.to(bodyID, 0.5, {backgroundColor: "#000000"});

	// build scene
	var scene = new ScrollScene({triggerElement: "#elevatorTriggerHeight"})
		scene.setTween(tween)
		scene.addTo(controller);
	} else {
		console.log("under 1024");
	}
});	 











$(document).ready(function($) {
	if (widthcheck > 1024) {
	// build tween
	var tween = new TimelineMax()
		.add (
			TweenLite.from(elevatorDiv, 0.5, {height: 0})
		)

		.add (
			TweenLite.from(elevatorPitch, 1, {opacity: 0}, -1)
		)

		.add (
			TweenLite.from(preziDiv, 0.5, {visibility:"none", opacity: 0, scale: 0.7})
		)
	var scene = new ScrollScene({triggerElement: "#elevatorTriggerHeight"})
		.setTween(tween)
		.addTo(controller);	
	} else {
		console.log("under 1024");
	}
}); 






/* original elevatorTiggerHeight function 
$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from(elevatorDiv, 1, {height: 0});
	// build scene
	var scene = new ScrollScene({triggerElement: "#elevatorTriggerHeight", duration: 130})
		.setTween(tween)
		.addTo(controller);	
}); 




$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from(elevatorPitch, 1, {opacity: 0});
	// build scene
	var scene = new ScrollScene({triggerElement: "#elevatorTriggerContent", duration: 130})
		.setTween(tween)
		.addTo(controller);	
}); 

$(document).ready(function($) {
	// build tween
	var tween = TweenLite.from(preziDiv, 1, {marginTop: 600});
	// build scene
	var scene = new ScrollScene({triggerElement: "#galleryDivMarginTrigger", duration: 90})
		.setTween(tween)
		.addTo(controller);	
});
*/


/*
$(document).ready(function($) {
	// build tween
	var tween = TweenLite.to(indesignBrochure, 0.00001, {backgroundImage: "url('mediaFolder/indexRemakeMedia/indesign_elevatorB480.png')"});
	// build scene
	var scene = new ScrollScene({triggerElement: "#changeIndesignTrigger"})
		.setTween(tween)
		.addTo(controller);	
}); */








