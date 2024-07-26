function page () {
	console.log("do page About");
	
	var h1 = $("<h1>").text(str_about_us_title);
	
	var p1 = $("<p>").text(str_about_us_para1);
	var p2 = $("<p>").text(str_about_us_para2);
	var p3 = $("<p>").text(str_about_us_para3);
	var p4 = $("<p>").text(str_about_us_para4);
	var p5 = $("<p>").text(str_about_us_para5);
	
	
	$(".starter-template").append(h1);
	$(".starter-template").append(p1);
	$(".starter-template").append(p2);
	$(".starter-template").append(p3);
	$(".starter-template").append(p4);
	$(".starter-template").append(p5);
	
	
	var h1 = $("<h1>").text(str_about_us_address).appendTo($(".starter-template"));
	
	
	var address = $("<address>");
	
	var address_segments = str_about_us_address_detail.split(";");
	if (address_segments.length == 1) {
		address.text(address_segments[0]);
	} else {
		for (var i = 0; i < address_segments.length; i++) {
			address.append(address_segments[i]);
			address.append("<br>");
		}
	}
	address.appendTo($(".starter-template"));
	
	
	$("<h2>").text(str_about_us_transport).appendTo($(".starter-template"));
	$("<p>").text(str_about_us_transport_detail).appendTo($(".starter-template"));
	
	
	$("<h2>").text(str_about_us_tele).appendTo($(".starter-template"));
	$("<p>").text(str_about_us_tele_detail).appendTo($(".starter-template"));
	
}

