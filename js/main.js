// If you're poking around in here, understand that all of this was written in 2012. 
var TE = {};

$(document).ready(function(){

	// Carousels
	$('.carousel').carousel({
		interval:9000,
		pause:"hover"
	});

	
	// track the rotation of the 3d box
	var deg = 0;	

	
	// enable 3d flip for screens larger than a phone
	// iOS can't 3d transform iframes at this size
	if( $(".poster-embed").length > 0 ){
		if( Modernizr.csstransforms3d && screen.availWidth > 767 ){	
			$(".poster-embed").wrapInner("<div class=\"flipper\">");
			$(".poster-embed").addClass("flip3d").removeClass("poster-embed");
			//
			responsive3DPositioning();
			window.onresize = responsive3DPositioning;
					
			$(".flip-button").click(function(){
				
				// Transitions are enabled here to avoid an anoying
				// animation where we don't want it. 
				$(".flipper").css({
					"-webkit-transition": 	"all 0.75s ease-out",
					"-moz-transition": 		"all 0.75s ease-out",
					"-ms-transition": 		"all 0.75s ease-out",
					"-o-transition": 		"all 0.75s ease-out",
					"transition": 			"all 0.75s ease-out",
				});
	
				deg += 90;
				var z =  parseFloat( $(".flipper")[0].offsetHeight) / 2 ;
				$(".flipper").css({
					
					"-webkit-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
					"-moz-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
					"-ms-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
					"-o-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
					"transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)"
					
				});
			});
			
		}else if( screen.availWidth < 767 ) {
			
			$(".panel.front").css("display", "none");
			$(".panel.bottom").css("background-color", "#000")
			
		// Desktops such as IE
		}else{
			
			$(".flip-button").click(function(){
				$(this).closest(".front").fadeOut();
			});
			
		}
	}
	
	// the z position of 3d elements is based on their width. When the
	// widow resizes, the width changes, so we need to track it.
	function responsive3DPositioning(){
		var z =  parseFloat( $(".flipper")[0].offsetHeight) / 2 ;
		
		$(".flipper").css({
			 "-webkit-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
			 "-moz-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
			 "-ms-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
			 "-o-transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)",
			 "transform": "translateZ(-"+z+"px) rotateX("+deg+"deg)"
		});
		
		$(".panel.front").css({
			 "-webkit-transform": "rotateX(0deg) translateZ("+z+"px)",
			 "-moz-transform": "rotateX(0deg) translateZ("+z+"px)",
			 "-ms-transform": "rotateX(0deg) translateZ("+z+"px)",
			 "-o-transform": "rotateX(0deg) translateZ("+z+"px)",
			 "transform": "rotateX(0deg) translateZ("+z+"px)"
		});
		$(".panel.bottom").css({
			 "-webkit-transform": "rotateX(-90deg) translateZ("+z+"px)",
			  "-moz-transform": "rotateX(-90deg) translateZ("+z+"px)",
			   "-ms-transform": "rotateX(-90deg) translateZ("+z+"px)",
			    "-o-transform": "rotateX(-90deg) translateZ("+z+"px)",
			     "transform": "rotateX(-90deg) translateZ("+z+"px)"
		});
	}
	
});