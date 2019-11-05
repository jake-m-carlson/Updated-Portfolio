$(document).ready(function(){
console.log("Hello");
$('.sidenav').sidenav();
console.log("sidenav");
$('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
  console.log("carousel");
  $('.parallax').parallax();
console.log("parallax");
});