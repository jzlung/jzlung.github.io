/* SCRIPTS.JS for Jerry Lung's website <www.jerrylung.com> */

// TODO: make the scrollTop() a percentage
$(window).scroll(function(){
	console.log($(document).scrollTop());
  if ($(document).scrollTop() <= 200) {
    $('#main').removeClass('invisible');
  } else {
    $('#main').addClass('invisible');
  }
});


function changePic() {
  document.getElementById("profilePic").src = "resources/kubrick.jpg";
}

function normalPic() {
  document.getElementById("profilePic").src = "resources/dinojerr.jpg";
}

