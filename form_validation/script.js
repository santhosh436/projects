let form = document.getElementById("form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let cpassword = document.getElementById("cpassword")
let uname = document.getElementById("uname")
let eml = document.getElementById("eml")
let pass = document.getElementById("pass")
let cpass = document.getElementById("cpass")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    Validate()
})

function Validate(){
		let umessage = "*username"
	if(checkTextEmpty(username,umessage,uname) && validateEmail(email,eml) && comparepasswords(password,cpassword,cpass)){
		return true
	}
	else
		 return false
    function checkTextEmpty(username,umessage,uname)
{
	if(username.value=="")
		{
			uname.innerHTML=umessage + " is required";
			username.focus();
			
			return false;
		}
	else
	uname.innerHTML="";
	return true;
}
function validateEmail(email,eml)
{
	str1=email.value.charAt(0);
	var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if(str1 == '.' || str1 == '_')
		{
			resstr="Email id should start with alphaNumeric";
			eml.innerHTML = resstr;
			email.value='';
			
			email.focus();
			return 0;
		}
	if(email.value.match(emailRegEx))
		{
			eml.innerHTML = "";
			return true;
		}
	else
		{
			eml.innerHTML="*Invalid email address [@ & . required]";
			email.focus();
			
			return false;
		}
}
function comparepasswords(password,cpassword,cpass)
{
	console.log("hello");
	if(password.value!=cpassword.value)
	{
		console.log("hello");
		html="";
		html+="*Password and confirm password should be same";
		cpass.innerHTML = html;	
		
		password.focus();
		return false;
	}
	cpass.innerHTML ="";
	return true;
}
}