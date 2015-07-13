/* SCRIPTS.JS for Jerry Lung's website <www.jerrylung.com> */

var numSections = 3;
var winHeight = $(window).height();
var docHeight = $(document).height();

function scrollPercent(){
  var scrollTop = $(document).scrollTop();
  var scrollPercent = (scrollTop) / (docHeight - winHeight);
  return scrollPercent;
}

// Set all divs to be invisible, revealed only by scrolls
$('#projects').addClass('invisible');
$('#contact').addClass('invisible');
// $('#projects').addClass('invisible');

// Start the page with a fade-in
setTimeout(function() {
  $('#main').removeClass('invisible');
}, 500);

$(window).scroll(function(){
	// console.log($(document).scrollTop());
  var scroll = scrollPercent();
  console.log(scroll);

  if (scroll >= 1/numSections) {
    $('#projects').removeClass('invisible');
  }

  if (scroll >= 2/numSections) {
    $('#contact').removeClass('invisible');
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