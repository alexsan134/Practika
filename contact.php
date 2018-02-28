<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$dest = "as62971@gmail.com"; 

$headers = "From: $nombre <$email>\r\n";  
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$asunto = "Contacto";
$cuerpo = "Nombre: ".$nombre."<br>";
$cuerpo .= "Email: ".$email."<br>";
$cuerpo .= "Telefono: ".$telefono."<br>";
$cuerpo .= "Mensaje: ".$mensaje;

if($nombre != '' && $email != '' && $telefono != '' && $mensaje != ''){
    mail($dest,$asunto,$cuerpo,$headers);
}
?>