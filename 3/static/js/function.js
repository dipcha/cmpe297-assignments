




window.addEventListener('load' , function(){
	var status = document.getElementById('status').value;
		window.addEventListener('online' , getStatus);
		window.addEventListener('offline' , getStatus);

		})
		
		
	function getStatus(event){
			alert('get status called ');
			var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
			alert(condition);
			var state = document.getElementById("state");
			var log = document.getElementById("log");
			log.appendChild(document.createTextNode("Event " +event+ "; status =" + condition + "\n"));	
		}
		
	function loaded(){
	getStatus("load");
	document.body.addEventListener("offline", function(){getstatus("offline")} , false);
	document.body.addEventListener("online", function(){getstatus("online")} , false);
	}
	
function SaveTolocalStorage()
{
if(typeof(Storage) != "undefined") 
{                                  
   try 
   {  
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var dob = document.getElementById('dob').value;
    var ldob = document.getElementById('ldob').value;
    var ssn = document.getElementById('ssn').value;
    var phone = document.getElementById('phone').value;
    var credit = document.getElementById('credit').value;
	
	
	var localStrObj ={

		"fname" : fname,
		"lname" : lname,
		"email" : email,
		"pass" : pass,
		"dob" : dob,
		"ldob" : ldob,
		"ssn" : ssn,
		"phone" : phone,
		"credit" : credit,
		
		};
	jsonlocalObj = JSON.stringify(localStrObj); 
	alert(jsonlocalObj);
	localStr = localStorage.setItem('jsonlocalObj',jsonlocalObj);
	
  }catch(e)
  {
    alert(e);
  }
}
else
{
  alert('Cannot store to localStorage');
}
}

function checkPassword(){
  var regexLow=/^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{2})([A-Za-z0-9\d#$@!%&*?]{7,24})/; // low strength
  var regexMedium= /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{3,5})([A-Za-z0-9\d#$@!%&*?]{8,24})/; //medium strength
  var regexGood = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{6,19})([A-Za-z0-9\d#$@!%&*?]{11,24})/; //high strength
  var pass = document.getElementById("pass").value; 
  if (!regexLow.test(pass)) {
    alert("Password does not match the given criteria for minimum 3 upper case, 2 lower case and 2 special chars");
        } else {
           document.getElementById("progress").value=25;
        }
 if (!regexMedium.test(pass)) {
       
        } else {
            document.getElementById("progress").value=50;
        }
 if (!regexgood.test(pass)) {
     
        } else {
            document.getElementById("progress").value=100;
        }
  }

function matchpasswords(){
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("cpass").value;
  if(pass == confirmpass){
    alert("passwords match");
  }
  else{
    alert("passwords do not match");
  }
}
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var objectJSONVariable = {
		
	};
   

function clearStorage() {
    console.log("Clearing local storage."); 
    localStorage.clear();
	sessionStorage.clear();
}


function toJSONString() 
{
	fname = document.myForm.fname.value;
	lname = document.getElementById('lname').value;
	email = document.getElementById('email').value;
	pass = document.getElementById('pass').value;
	dob = document.getElementById('dob').value;
	ldob = document.getElementById('ldob').value;
	ssn = document.getElementById('ssn').value;
	phone = document.getElementById('phone').value;
	credit = document.getElementById('credit').value;
	
	var obj ={

		"fname" : fname,
		"lname" : lname,
		"email" : email,
		"pass" : pass,
		"dob" : dob,
		"ldob" : ldob,
		"ssn" : ssn,
		"phone" : phone,
		"credit" : credit,
		
		};
	jsonObj = JSON.stringify(obj); 
	alert(jsonObj);
	localStr = localStorage.setItem('myJSONobject',jsonObj);
};



function readFromJSONString(){
	var myGetJsonobj = localStorage.getItem("myJSONobject");
	a = JSON.parse(myGetJsonobj);
	alert(JSON.stringify(a));
}


function isPhoneNumberFormatValid(){
	var re1 = /^(\([1-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
	var phone = document.getElementById('phone').value;
	if(!re1.test(phone)){
	span2.innerHTML = "Please enter a valid phone number i.e: xxx-xxx-xxxx";
	//alert("Please enter a valid phone number i.e: xxx-xxx-xxxx");
	}
}

function isValidEmail(){   
    var re = /^(([^<>()[\]\\:.,;\s@\"]+(\.[^<>()[\]\\,;:.\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById('email').value;
   if (!re.test(email)) {
    alert("Please enter a valid email id e.g xxx.xx@xxx.xx");
   }
} 

function SaveToSessionStorage(){
	fname = document.myForm.fname.value;
	lname = document.getElementById('lname').value;
	email = document.getElementById('email').value;
	pass = document.getElementById('pass').value;
	dob = document.getElementById('dob').value;
	ldob = document.getElementById('ldob').value;
	ssn = document.getElementById('ssn').value;
	phone = document.getElementById('phone').value;
	credit = document.getElementById('credit').value;
	
	var sessionObject ={
		"fname" : fname,
		"lname" : lname,
		"email" : email,
		"pass" : pass,
		"dob" : dob,
		"ldob" : ldob,
		"ssn" : ssn,
		"phone" : phone,
		"credit" : credit,
		
	};
	
	 sessionjsonObj = JSON.stringify(sessionObject); 
sessionStorage.setItem("sessionjsonObj", sessionjsonObj );

	var nm = sessionStorage.getItem("sessionjsonObj");
	alert(nm);
		
}

function ReadFromSessionStorage(){
	var myGetObjforSession = localStorage.getItem("sessionjsonObj");
	b = JSON.parse(myGetObjforSession);
	alert(JSON.stringify(b));
}

function SaveToStorages(){
	readFromJSONString();
	SaveTolocalStorage();
	SaveToSessionStorage();

}
