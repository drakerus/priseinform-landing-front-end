<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];


$message = "Имя: $name \nТелефон: $phone \nE-mail: $email";


// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70);

// Отправляем
mail('info@pinco.ru', 'Мой сайт', $message, "Content-type: text/plain; charset=utf-8");
?>