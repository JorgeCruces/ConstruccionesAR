<?php


    $destino = $_POST['email'];
    $asunto = "comentario"; 
    //lol
    $comentario = "
        EMAIL: $_POST[email]
        Comentario = $_POST[mensaje];
    
    ";

    $headers = 'From: '.$destino."\r\n".
    'Reply-To:'.$destino."\r\n".
    'X-Mailer: PHP/'.phpversion();

    mail($destino,$asunto,$comentairo,$headers);

?>