
function validateLogin()
{
	var user=document.login.username.value;
	var user=user.trim();
	var pass=document.login.password.value;
 
	if(user == '')
	{
		document.getElementById('error').innerHTML="Please Enter Username";
		return false;
	}
 
	if(pass == '')
	{
		document.getElementById('error').innerHTML="Please Enter Password";
		return false;
	} 
	if(user == "dipti" && pass == "pass")
	{
	window.location.href = "1.html"
	}
}



function calculateScore() {
	
	var score = 0;
	var radios = document.getElementsByName('a1');
	for (var i = 0, length = radios.length; i < length; i++) {
	    if (radios[i].checked) {
	        
	      //  alert(radios[i].value);
			if(radios[i].value == 'true')
				{
				score = 1;
				}
	       // alert(score);
	        break;
	    }
	}
	sessionStorage.setItem("math1", score);
	//answer1(score);
    
}

function fillOption(myRadio) {
    var currentValue = myRadio.value;
    var name = myRadio.name;
    $("#" + name).html(currentValue);
}