function page () {
	$("<h1>").append($("<a>").attr("href", "./files/questionnaire.pdf").attr("target", "_blank").text(str_questionnaire_intro)).appendTo($(".starter-template"));
	$(".starter-template").css("text-align", "center");
}

