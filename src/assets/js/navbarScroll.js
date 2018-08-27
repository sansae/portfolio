$(document).ready(function() {
  $("ul > li > a, #brand > a").click(function() {
    // get "a" element that was clicked on
    // see location hash property at w3schools
    var hash = this.hash;

    // w3schools.com/jquery/jquery_animate
    // see jQuery scrollTop() method
    // $(selector).animate({params}, speed, callback)
    $("html, body").animate({ scrollTop: $(hash).position().top }, 1000);
  })
})
