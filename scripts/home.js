function page () {
	console.log("do page Home");
	
	var h1 = $("<h1>");
	var h1link = $("<a>").attr("href", "/about").text(str_about_us_title);
	h1.append(h1link);
	
	var p1 = $("<p>").text(str_about_us_para1);
	var p2 = $("<p>").text(str_about_us_para2);
	var p3 = $("<p>").text(str_about_us_para3);
	var p4 = $("<p>").text(str_about_us_para4);
	var p5 = $("<p>").text(str_about_us_para5);
	
	
	$(".sidebar").append(h1);
	$(".sidebar").append(p1);
	$(".sidebar").append(p2);
	$(".sidebar").append(p3);
	$(".sidebar").append(p4);
	$(".sidebar").append(p5);
	
	$('.carousel').carousel();
	
	
	
	var window_height = $( window ).height();
	var navbar_height = $(".navbar").height();
	var carousel_height = window_height - navbar_height - 60;
	
	$(".carousel-inner").height(carousel_height);
	
	var carousel_width = $(".carousel-inner").width();
	
	var images = $(".carousel-inner").find("img");
	
	var carouselWHRatio = carousel_width/carousel_height;
	
	$.each(images, function(key, val){
		var img_width = val.width;
		var img_height = val.height;
		
		var imgWHRatio = img_width/img_height;
		
		var new_img_height, new_img_width, new_margin_left = 0, new_margin_top = 0;
		
		if (carouselWHRatio >= imgWHRatio) { // height fixed => set image height to carousel height, set margin_left
			new_img_height = carousel_height;
			new_img_width = img_width*new_img_height/img_height;
			
			margin_left = (carousel_width - new_img_width)/2;
			$(val).css("margin-left",margin_left);
		} else if (carouselWHRatio <= imgWHRatio) { // fixed width => set image width to carousel width, set margin_top
			new_img_width = carousel_width;
			new_img_height = new_img_width*img_height/img_width;
			
			new_margin_top = (carousel_height - new_img_height)/2;
			$(val).css("margin-top", new_margin_top);
		}
		
		$(val).width(new_img_width);
		$(val).height(new_img_height);
	});
	
	var recentEvents = $("<h2>");
	var recentEventsLink = $("<a>").attr("href", "/events").text(str_event);
	recentEvents.append(recentEventsLink).appendTo($(".recent-events"));
	
}
