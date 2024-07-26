function page () {
	console.log("Loading features page...");
	
	var feature_ul = $("<ul>").addClass("feature_list");
	
	
	var feature_content = str_feature_content;
	
	for (var i = 0; i < feature_content.length; i++) {
		var feature_li = $("<li>").text(feature_content[i]).appendTo(feature_ul);
	}
	
	$(".feature_div").append(feature_ul);
	
	$(".feature_list").css("font-size","20px");
	
}

