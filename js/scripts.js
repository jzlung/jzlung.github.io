/* SCRIPTS.JS for Jerry Lung's website <www.jerrylung.com> */

// TODO: make the scrollTop() a percentage
$(window).scroll(function(){
	console.log($(document).scrollTop());
  if ($(document).scrollTop() <= 200) {
    $('#main').removeClass('invisible');
    $('#projects').addClass('invisible');
  } else {
    $('#main').addClass('invisible');
  } 

  if ($(document).scrollTop() >= 450) {
    $('#projects').removeClass('invisible');
  }
});


function changePic() {
  document.getElementById("profilePic").src = "resources/dinojerr.jpg";
}

function normalPic() {
  document.getElementById("profilePic").src = "resources/kubrick.jpg";
}

var frmvalidator  = new Validator("contactform");	// TODO: Not sure if its _ or no _
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email", "Please enter a valid email address");