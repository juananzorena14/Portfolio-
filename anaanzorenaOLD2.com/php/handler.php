<?php
/*
THIS FILE USES PHPMAILER INSTEAD OF THE PHP MAIL() FUNCTION
*/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
// require 'PHPMailer-master/src/SMTP.php';

/*
*  CONFIGURE EVERYTHING HERE
*/

// an email address that will be in the From field of the email.
$fromEmail = 'hola@anaanzorena.com';
$fromName = 'Formulario de contacto de http://anaanzorena.com';

// an email address that will receive the email with the output of the form
$sendToEmail = 'hola@anaanzorena.com';
$sendToName = 'Formulario de contacto de http://anaanzorena.com';

// subject of the email
$subject = 'Nuevo mensaje desde Contacto - Ana Anzorena';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Nombre', 'email_real' => 'Email', 'tel' => 'Teléfono', 'info' => 'Más info sobre', 'message' => 'Mensaje');

// Replay To button
$rep_to = ($_POST['email_real']);

// message that will be displayed when everything is OK :)
$okMessage = 'Tu mensaje fue enviado correctamente. Gracias, te responderemos a la brevedad!';

// If something goes wrong, we will display this message.
$errorMessage = 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.';

/*
*  LET'S DO THE SENDING
*/

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try
{
    
    if(count($_POST) == 0) throw new \Exception('Form is empty');

    // robot detection
      $honeypot = trim($_POST["email"]);     

      if(!empty($honeypot)) {
        echo "BAD ROBOT!"; 
        exit;
      }
    
    $emailTextHtml = "<h2>Tienes un nuevo mensaje desde Contacto en tu sitio</h2><hr>";
    $emailTextHtml .= "<table>";
    
    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email
        if (isset($fields[$key])) {
            $emailTextHtml .= "<tr><th>$fields[$key]</th><td>$value</td></tr>";
        }
    }
    $emailTextHtml .= "</table><hr>";
    // $emailTextHtml .= "<p>Have a nice day,<br>Best,<br>Ondrej</p>";
    
    $mail = new PHPMailer(true);
    
    $mail->addReplyTo($rep_to);
    // $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($sendToEmail, $sendToName); // you can add more addresses by simply adding another line with $mail->addAddress();
    $mail->setFrom($fromEmail, $fromName);
    // $mail->addReplyTo($rep_to);
    
    $mail->isHTML(true);
    
    $mail->Subject = $subject;
    $mail->msgHTML($emailTextHtml); // this will also create a plain-text version of the HTML email, very handy
    
    
    if(!$mail->send()) {
        throw new \Exception('I could not send the email.' . $mail->ErrorInfo);
    }
    
    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    // $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
// else just display the message
else {
    echo $responseArray['message'];
}