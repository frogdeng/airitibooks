
$( document ).ready(function() {

	
	$(".aside_left .close").click(function(){

		$('.forposition_left').toggleClass("switch_go_left");
		$('.aside_left').toggleClass("hamburg-close-left");
		$('.switch_left').toggleClass("gone")
	
  	});	

  	$(".aside_right .close").click(function(){
		$('.forposition_right').toggleClass("switch_go_right");
		$('.aside_right').toggleClass("hamburg-close-right");
		$('.switch_right').toggleClass("gone")

  	});


  	// search_dropdown
  	$(".search_dropdown").click(function(){

  		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$('.search_dropdown_content').slideUp(300);
		} else{
			$(this).addClass("open");
			$('.search_dropdown_content').slideDown(300);
		}

  	});



  	// title_1
  	$(".title_1").click(function(){
  		if($(this).hasClass("open_aside")){
			$(this).removeClass("open_aside");
			$('.editmemo').slideUp(300);
		} else{
			$(this).addClass("open_aside");
			$('.editmemo').slideDown(300);
		}
  	});

  	// title_2
  	$(".title_2").click(function(){
  		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$('.analysis_1').slideUp(300);
		} else{
			$(this).addClass("open");
			$('.analysis_1').slideDown(300);
		}
  	});

  	// title_3
  	$(".title_3").click(function(){
  		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$('.analysis_2').slideUp(300);
		} else{
			$(this).addClass("open");
			$('.analysis_2').slideDown(300);
		}
  	});

  	// title_4
  	$(".title_4").click(function(){
  		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$('.analysis_3').slideUp(300);
		} else{
			$(this).addClass("open");
			$('.analysis_3').slideDown(300);
		}
  	});


  	// edittag
  	$(".title_5").click(function(){
  		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$('.edittag').slideUp(300);
		} else{
			$(this).addClass("open");
			$('.edittag').slideDown(300);
		}
  	});




  	// display_paper
  	$(".display_paper").click(function(){
  		if($(this).hasClass("showcontent")){
			$(this).removeClass("showcontent");
			$('.paper_switch').slideDown(300);
			$('.updown').removeClass("updown_rotate");

		} else{
			$(this).addClass("showcontent");
			$('.paper_switch').slideUp(300);
			$('.updown').addClass("updown_rotate");

		}
  	});


 	// output_display
  // 	$(".output").click(function(){
  // 		if($(this).hasClass("showcontent")){
		// 	$(this).removeClass("showcontent");
		// 	$('.dropdown_1').slideUp(300);
		// } else{
		// 	$(this).addClass("showcontent");
		// 	$('.dropdown_1').slideDown(300);
		// }
  // 	});

  // 	$(".addtag").click(function(){
  // 		if($(this).hasClass("showcontent")){
		// 	$(this).removeClass("showcontent");
		// 	$('.dropdown_2').slideUp(300);
		// } else{
		// 	$(this).addClass("showcontent");
		// 	$('.dropdown_2').slideDown(300);
		// }
  // 	});





});





