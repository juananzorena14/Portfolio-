$(document).ready(function() {
     $("#form_contacto").validVal({
         //  configuration goes here
          fields: {
            onInvalid: function( $form, language ) {
			  $(this).next().stop().fadeIn();
			  $(this).css("color","#A1A1A1");

            },
            onValid: function( $form, language ) {
              $(this).next().stop().fadeOut();
			  $(this).css("color","#000000");

            },
          },
          form: {
            onInvalid: function( $fields, language ) {
              alert( $fields.first().next().text() );
            }
          }
     });
 });