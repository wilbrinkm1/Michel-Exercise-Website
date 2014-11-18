

var widthcheck = $( window ).width();
	console.log(widthcheck);

/* tooltipster initialize */
$(document).ready(function() {
    $('.tooltip').tooltipster();
});


var controller;
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
});

$(document).ready(function($) {
        htmlLogo = document.getElementById("htmlLogo"),
        cssLogo = document.getElementById("cssLogo"),
        javascriptLogo = document.getElementById("javascriptLogo"),
	
	//The last parameter with value of .25 is the stagger amount. Try changing it to 1 see how it impacts the animation.
    TweenMax.staggerFrom([htmlLogo, cssLogo, javascriptLogo], 4,  {scale:1.6, opacity:0}, 1.0);        
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
		/*.reverse(false)*/
		.setTween(tween)
		.addTo(controller);
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
	// build tween
	var tween = new TimelineMax()
		.add (
			TweenLite.from(elevatorDiv, 0.5, {height: 0})
		)

		.add (
			TweenLite.from(elevatorPitch, 1, {opacity: 0}, -1)
		)

		.add (
			TweenLite.from(preziDiv, 0.5, {marginTop: 600}, -2)
		)
	var scene = new ScrollScene({triggerElement: "#elevatorTriggerHeight"})
		.setTween(tween)
		.addTo(controller);	
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








