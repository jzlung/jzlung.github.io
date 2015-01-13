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


$("#go-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});