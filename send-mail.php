<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);
    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'das108.truehost.cloud';
        $mail->SMTPAuth = true;
        $mail->Username = 'admin@trppcm.com';
        $mail->Password = 'v1ps6rnAde+-';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('admin@trppcm.com', 'TRPPCM Queries');
        $mail->addAddress('adeayoajoba777@gmail.com');

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = "New Inquiry: $subject";
        $mail->Body = "
            <h2>New Question Received</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong> $message</p>
        ";
        $mail->AltBody = "New Question from $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

        $mail->send();
        echo "Your question has been submitted successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
