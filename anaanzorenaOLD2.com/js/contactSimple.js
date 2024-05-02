 $(function () {

  $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {

      e.preventDefault();

      $.ajax({
        type: 'post',
        url: '../php/contact.php',
        data: $('#contact-form').serialize(),
        success: function () {
          alert('form was submitted');
        }
      });

    });

  });