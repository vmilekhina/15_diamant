<?php 

//======================================================================
// Variables
//======================================================================

//E-mail address. Enter your email
//define("__TO__", "zakaz@diamantzatirka.ru");
$to = "zakaz@diamantzatirka.ru";

//Success message
//define('__SUCCESS_MESSAGE__', "Your message has been sent. We will reply soon. Thank you!");
$success = "Ваше сообщение отправлено. Спасибо!";

//Error message 
//define('__ERROR_MESSAGE__', "Your message hasn't been sent. Please try again.");
$err = "Ваше сообщение не отправлно. Попробуйте позже.";

//Messege when one or more fields are empty
//define('__MESSAGE_EMPTY_FIELDS__', "Please fill out  all fields");
$empty = "Заполните все поля";

//======================================================================
// Do not change
//======================================================================

//E-mail validation
function check_email($email){
	if(!@eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
		return false;
	} else {
		return true;
	}
}

//Send mail
function send_mail($to,$subject,$message,$headers){
	if(@mail($to,$subject,$message,$headers)){
		echo json_encode(array('info' => 'success', 'msg' => $success));
	} else {
		echo json_encode(array('info' => 'error', 'msg' => $err));
	}
}

//Get data form and send mail - Thank you Rafael for your contribution.
if(isset($_POST['name']) and isset($_POST['emaild']) and isset($_POST['message'])){
	$name = $_POST['name'];
	$mail = $_POST['emaild'];
	$subjectForm = $_POST['subject'];
	$messageForm = $_POST['message'];
	$fromMail = 'mail@'.$_SERVER['SERVER_NAME'];
	if($name == '') {
			echo json_encode(array('info' => 'error', 'msg' => "Please enter your name."));
			exit();
		} else if($mail == '' ){
			echo json_encode(array('info' => 'error', 'msg' => "Please enter valid e-mail."));
			exit();
		} else if($messageForm == ''){
			echo json_encode(array('info' => 'error', 'msg' => "Please enter your message."));
			exit();
		} else {
			$to = $to;
			$subject = $subjectForm . ' ' . $name;
		$subject = "=?utf-8?b?". base64_encode($subject) ."?=";
		$message = '
		<html>
		<head>
			<title>Mail from '. $name .'</title>
		</head>
		<body>
			<table style="width: 500px; font-family: arial; font-size: 14px;" border="1">
				<tr style="height: 32px;">
					<th align="right" style="width:150px; padding-right:5px;">Имя:</th>
					<td align="left" style="padding-left:5px; line-height: 20px;">'. $name .'</td>
				</tr>
				<tr style="height: 32px;">
					<th align="right" style="width:150px; padding-right:5px;">Почта:</th>
					<td align="left" style="padding-left:5px; line-height: 20px;">'. $mail .'</td>
				</tr>
				<tr style="height: 32px;">
					<th align="right" style="width:150px; padding-right:5px;">Телефон:</th>
					<td align="left" style="padding-left:5px; line-height: 20px;">'. $subjectForm .'</td>
				</tr>
				<tr style="height: 32px;">
					<th align="right" style="width:150px; padding-right:5px;">Сообщение:</th>
					<td align="left" style="padding-left:5px; line-height: 20px;">'. $messageForm  .'</td>
				</tr>
			</table>
		</body>
		</html>
		';

		$headers = "From: Обратная связь<$fromMail>\n";
		$headers .= 'Content-type: text/html; charset="utf-8"\r\n';
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

		send_mail($to,$subject,$message,$headers);
	}
} else {
	echo json_encode(array('info' => 'error', 'msg' => $empty));
}
?>