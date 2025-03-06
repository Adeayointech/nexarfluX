<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Define email parameters
    $to = "girlswithcrownsregina@gmail.com,
    adeayoajoba777@gmail.com";
    $email_subject = "Contact Form Submission: $subject from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    // Use a fixed "From" address for sending the email
    $from = "no-reply@girlswithcrowns.com"; // Replace with your own domain or valid email address

    // Set additional headers
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $email_subject, $body, $headers)) {
        echo "Thank you for your message. It has been sent.";
        // Redirect to homepage after 3 seconds
        header("Refresh: 3; URL=index.html");
        echo "<p>You will be redirected to the homepage shortly. If not, <a href='index.html'>click here</a>.</p>";
        echo "<button onclick=\"window.location.href='index.html';\">Go Home</button>";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
