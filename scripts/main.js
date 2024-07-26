$(document).ready(function(){
	var cookie = document.cookie;
	if (cookie) {
		var cookieParam = cookie.split(";");
		var lang = getCookie("lang");
		
		if (lang == "EN") {
			loadScript("./scripts/en_US.js");
			setCookie("lang","EN",30);
		} else {
			loadScript("./scripts/zh_CN.js");
			setCookie("lang","ZH",30);
		}
	} else {
		loadScript("./scripts/zh_CN.js");
		setCookie("lang","ZH",30);
	}
	
	$("#changeLanguage").click(function() {
        // load new language js
        if (lang == "EN") {
        	loadScript("./scripts/zh_CN.js");
            setCookie("lang","ZH",30);
        } else {
        	loadScript("./scripts/en_US.js");
            setCookie("lang","EN",30);
        }
		
        // refresh current page
        location.reload();
    });
});


/*
 * after language file is loaded, execute the rest.
 */
function langFileReady () {
	
	page(); // render page-specific content
	
	// language file has been loaded
	$("#test_a").text(str_ip);
	$("#changeLanguage").text(str_langChangeTo);
	$("#brand").text(str_brand);
	
	$("#btn_about").text(str_about_us);
	$("#btn_routine").text(str_routine_activity);
	$("#btn_classes").text(str_classes_fee);
	$("#btn_features").text(str_feature);
	$("#btn_events").text(str_event);
	$("#btn_courses").text(str_course);
	$("#btn_questionnaire").text(str_questionnaire);
	$("#btn_membership").text(str_membership);
	$("#btn_cooperation").text(str_cooperation);
	
	
}

function loadScript(url, callback){
	callback = langFileReady;
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.charset="gb2312"; // important for displaying Chinese characters

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
    	script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}


function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

/*
 * check cookie
 *  if no cookie => check lang
 *  if have cookie => use lang in cookie
 * 
 * if user changes language
 *  
 */


function page () {
	
}



