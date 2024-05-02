document.addEventListener("DOMContentLoaded", function() {
  console.log("Chino capo")
})

/*document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(e) {
        e.preventDefault();
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          var offset = targetElement.getBoundingClientRect().top;
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }
      });
    }
  });

  /*$(function() {
    $('nav-item a').click(function(e) {
      e.preventDefault();
      var id = $(this).attr('href');
      $('html, body, footer').animate({
        scrollTop: $(id).offset().top
      }, 500);
    });
  });*/

  /*$(function() {
    $('.nav-link').click(function(e) {
      e.preventDefault();
      var id = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 500);
    });
  });*/

  document.querySelectorAll('a[data-id]').forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
          event.preventDefault();
          document.getElementById(this.getAttribute('data-id')).scrollIntoView();
      });
  });