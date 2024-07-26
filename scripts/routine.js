function page () {
	console.log("do page Routine");
	
	
	var mon_h1 = $("<h1>").text(str_routine_mon + " " + str_routine_mon_hours + " ");
	var wed_h1 = $("<h1>").text(str_routine_wed + " " + str_routine_wed_hours + " ");
	var fri_h1 = $("<h1>").text(str_routine_fri + " " + str_routine_fri_hours + " ");
	
	var mon_content = $("<p>").text(str_routine_mon_content);
	var wed_content = $("<p>").text(str_routine_wed_content);
	var fri_content = $("<p>").text(str_routine_fri_content);
	
	var routine_speaker_div1 = $("<div>");
	var routine_speaker_div2 = $("<div>");
	var routine_speaker_div3 = $("<div>");
	
	var routine_speaker1 = $("<b>").text(str_routine_speaker).css("float", "left").css("margin-right","10px").appendTo(routine_speaker_div1);
	var routine_speaker2 = $("<b>").text(str_routine_speaker).css("float", "left").css("margin-right","10px").appendTo(routine_speaker_div2);
	var routine_goal = $("<b>").text(str_routine_goal).css("float", "left").css("margin-right","10px").appendTo(routine_speaker_div3);
	
	var mon_speaker_speakerNgoal = $("<p>").text(str_routine_mon_speakerNgoal).appendTo(routine_speaker_div1);
	var wed_speaker_speakerNgoal = $("<p>").text(str_routine_wed_speakerNgoal).appendTo(routine_speaker_div2);
	var fri_speaker_speakerNgoal = $("<p>").text(str_routine_fri_speakerNgoal).appendTo(routine_speaker_div3);
	
	var mon_participant = $("<p>").text(str_routine_mon_participant);
	var wed_participant = $("<p>").text(str_routine_wed_participant);
	var fri_participant = $("<p>").text(str_routine_fri_participant);
	
	
	$(".starter-template").append(mon_h1);
	$(".starter-template").append(mon_content);
	$(".starter-template").append(routine_speaker_div1);
	$(".starter-template").append(mon_participant);
	
	
	$(".starter-template").append(wed_h1);
	$(".starter-template").append(wed_content);
	$(".starter-template").append(routine_speaker_div2);
	$(".starter-template").append(wed_participant);
	
	
	$(".starter-template").append(fri_h1);
	$(".starter-template").append(fri_content);
	$(".starter-template").append(routine_speaker_div3);
	$(".starter-template").append(fri_participant);
	
}

