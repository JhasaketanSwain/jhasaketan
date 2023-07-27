$(document).ready(function () {
  // smooth scrolling 
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },
      500,
      'linear'
    );
  });
});

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.filter').show('1000');
    }
    else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }
  });
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});
//clear the input field
let form = document.getElementById('my_form');
form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
}); 

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}