function page () {
	console.log("do page Features");
	
	$("#membership-intro").text(str_membership_intro);

	$("#membership-silver").text(str_membership_silver);
	$("#membership-gold").text(str_membership_gold);
	$("#membership-platinum").text(str_membership_platinum);
	
	$("#membership_silver_right").text(str_membership_silver_right);
	$("#membership_gold_right").text(str_membership_gold_right);
	$("#membership_platinum_right").text(str_membership_platinum_right);
	$("#membership_platinum_special").text(str_membership_platinum_special);
	
	
//	$("<h2>").text(str_membership_silver).appendTo($(".starter-template"));
//	$("<h2>").text(str_membership_gold).appendTo($(".starter-template"));
//	$("<h2>").text(str_membership_platium).appendTo($(".starter-template"));
}




