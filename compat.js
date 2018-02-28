$(document).ready(function () {
    var wNav = $(window).width();
    var s = $(window).scrollTop();
    var topS = $(".navbar").offset();
    var w = $(window).width();
    var x;
    var ffs = $("header").offset();
    var h = $("nav > div > ul").height();
    var p = h*0.48;
    var t = h+p;
    var m = -(s * 0.3);
    var ms = s * 0.008;
    var x = 4 - (s*0.01);
    var menu = false;
    var xe = $("header").offset();

compat();
$(".navbar-toggler").click(function(){
	s = $(window).scrollTop();
	
	$("#shadow").fadeToggle(300);
	if(menu == false){
		$(".navbar > .collapse").css({
			"left" : "0"	
		});
		if(s > topS.top){
		$(".navbar").css({
			"box-shadow" : "30px 0px 20px rgba(0,0,0,1)"		
		})}
		menu = true;
	}else{
		$(".navbar > .collapse").css({
			"left" : "-100%"	
		});
		$(".navbar").css({
			"box-shadow" : "10px -10px 20px rgba(0,0,0," + s*0.6 + ")"		
		})
		menu = false;	
	}
});

$("#shadow").click(function(){
	$("#shadow").fadeToggle(300);
	if(menu == false){
		$(".navbar > .collapse").css({
			"left" : "0"	
		});
		menu = true;
	}else{
		$(".navbar > .collapse").css({
			"left" : "-100%"	
		});
		$(".navbar").css({
			"box-shadow" : "10px -10px 20px rgba(0,0,0," + s*0.6 + ")"		
		})
		menu = false;	
	}
});

$("#upBt").click(function(){
	wS = $(window).scrollTop();
	$("html, body").animate({
		scrollTop : 0	
	}, s*0.6)
})

function compat(){
    if(x < 1.5){
	x = 1.5;
    }
	$("nav > #brandFixed").css({
	"height" : t + "px"
    })
    if(s > topS.top){
       $("header").css({
           "margin-top" : ffs.top + "px"
       })
    }else{
       $("header").css({
           "margin-top" : "0"
       })
    }
    if(s > topS.top){
        $(".navbar").css({
        "position" : "fixed",
        "margin-top" : "0" ,
        "width" : wNav + "px",
	"box-shadow" : "10px -10px 20px rgba(0,0,0," + s*0.6 + ")"
      })
    }

    $("nav > #subnav").css({
        "top" : m*3,
        "opacity" : (1  - ms/0.6)
    })
    
    $("nav > #brandFixed").css({
        "opacity" : ms*0.5
    })
if(wNav > 990){
	
    $(".navbar > div > ul").css({
	"margin-right" : x + "rem"
    });
	
    $(".navbar > #brandFixed").css({
	"margin-left" : x + "rem"
    });
$("nav div ul li #contactUl li #telT").attr("href", "");
$("nav div ul li #contactUl li #telM").attr("href", "");
}else{
$("nav div ul li #contactUl li #telT").attr("href", "tel:24788004");
$("nav div ul li #contactUl li #telM").attr("href", "tel:55338294");
}
}
	$(window).resize(function(){
	h = $("nav > div > ul").height();
 p = h*0.48;
    t = h+p;
		wNav = $(window).width();
		compat();
$("nav > #brandFixed").css({
	"height" : t + "px"
    })
if(wNav >= 990){
	$("#shadow").hide();
	menu = false;
$(".navbar > .collapse").css({
			"left" : "-100%"	
		});
}

if(s < topS.top){
$(".navbar").css({
            "position" : "relative",
            "margin" : "2.5% 0%",
            "width" : wNav + "px",
	    "box-shadow" : "0px 0px 0px rgba(0,0,0,0)"
         })
         $("header").css({
            "margin-top" : "0"
         })
         $(".navbar > div > ul").css({
	    "margin-right" : "4rem"
         });
         $(".navbar > #brandFixed").css({
	    "margin-left" : "4rem"
         });
}
});

    $("nav > #brandFixed").css({
	"height" : t + "px"
    })
    if(s > topS.top){
       $("header").css({
           "margin-top" : ffs.top + "px"
       })
        $(".navbar").css({
        "position" : "fixed",
        "margin-top" : "0" ,
        "width" : wNav + "px",
	"box-shadow" : "10px -10px 20px rgba(0,0,0," + s*0.6 + ")"
      })
    }else{
       $("header").css({
           "margin-top" : "0"
       })
	compat();
    }
  

    $(".navbar-nav > li").hover(function(){
        $(this).find("ul").toggleClass("hover");
    });

    $(".navbar-nav > #contactList").hover(function(){
        $(this).find("ul").toggleClass("hover2");
    })

    $("nav > #subnav").css({
        "top" : m*3,
        "opacity" : (1  - ms/0.6)
    })
    
    $("nav > #brandFixed").css({
        "opacity" : ms*0.5
    })
	
    $(".navbar > div > ul").css({
	"margin-right" : x + "rem"
    });
	
    $(".navbar > #brandFixed").css({
	"margin-left" : x + "rem"
    });

    $(window).scroll(function(){
       s = $(window).scrollTop();
       m = -(s * 0.3);
       ms = s * 0.008;
       x = 4 - (s*0.01);
	if(s >= xe.top){
		$("#upBt").slideDown(300);	
	}else{
		$("#upBt").slideUp(300);
	}
if(wNav >= 1200){
	$("#upBt").css({
		"margin-bottom" : 30+(s*0.013)+"px"	
	})
}
	
       if(x < 1.5){
         x = 1.5;
       }
    
       $("nav > #subnav").css({
         "top" : m*3,
         "opacity" : (1  - ms/0.6)
       })

       $("nav > #brandFixed").css({
         "opacity" : ms*0.5
       })

       if(s > topS.top){
      	 $(".navbar").css({
            "position" : "fixed",
            "margin-top" : "0" ,
            "width" : wNav + "px",
	    "box-shadow" : "10px -10px 20px rgba(0,0,0," + ms*0.6 + ")" 
         })
		if(w > 990){
         $(".navbar > div > ul").css({
	    "margin-right" : x + "rem"
         });
         $(".navbar > #brandFixed").css({
	    "margin-left" : x + "rem"
         });
}
         $("header").css({
            "margin-top" : ffs.top + "px"
         })
       }else{
         $(".navbar").css({
            "position" : "relative",
            "margin" : "2.5% 0%",
            "width" : wNav + "px",
	    "box-shadow" : "0px 0px 0px rgba(0,0,0,0)" 
         })
         $("header").css({
            "margin-top" : "0"
         })
         $(".navbar > div > ul").css({
	    "margin-right" : "4rem"
         });
         $(".navbar > #brandFixed").css({
	    "margin-left" : "4rem"
         });
       }
   })
  })
