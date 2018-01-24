<?php

	$name= $_POST["name"];
	$email= $_POST["email"];
	$message= $_POST["message"];
	
	$formcontent= "From: $name \nMessage: $message";
	$receiver= "anitahu113@gmail.com";
	$subject= "Email from personal website";
	$mailheader= "From: $email \r\n";
	
	mail($receiver,$subject,$formcontent,$mailheader) or die ("Error");
	echo "Thank you!";
?>