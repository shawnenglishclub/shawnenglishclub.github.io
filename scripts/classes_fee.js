/*
 * TODO
 * 2. pop up on coop section
 * 3. make table!
 */



function page () {
	$(".rate-p").text(str_per_person);
	$(".rate-h").text(str_per_hour);
	
	$("#online-title").text(str_cf_online);
	$("#online-char").text(str_cf_online_char);
	$("#size-online-l").text(str_cf_online_l_size);
	$("#size-online-s").text(str_cf_online_s_size);
	
	$("#class-title").text(str_cf_ftf);
	$("#class-char").text(str_cf_ftf_char);
	$("#size-class-l").text(str_cf_ftf_l_size);
	$("#size-class-m").text(str_cf_ftf_m_size);
	$("#size-class-s").text(str_cf_ftf_s_size);
	
	$("#coop-title").text(str_cf_coop);
	$("#coop-char").text(str_cf_coop_char);
	$("#size-coop-s").text(str_cf_coop_s_size);
	$("#size-coop-m").text(str_cf_coop_m_size);
	$("#size-coop-l").text(str_cf_coop_l_size);
	
}

