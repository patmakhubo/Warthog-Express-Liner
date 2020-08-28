<?php require_once("session.php"); ?>
<?php require_once("DBController.php"); ?> 
<?php require_once("timestamp.php");?>  
<?php
    if(!isset($_POST['submit'])) {
        // Escape user inputs for security
        $DB = DBController::getInstance();
        $connection = $DB->getConnection();
        $idNum = $connection->real_escape_string($_REQUEST['idnumber']);
        $title = $connection->real_escape_string($_REQUEST['title-dropdown']);
        $firstname = $connection->real_escape_string($_REQUEST['firstname']);
        $lastname = $connection->real_escape_string($_REQUEST['lastname']);
        $address = $connection->real_escape_string($_REQUEST['address']);
        $city = $connection->real_escape_string($_REQUEST['city']);
        $code = $connection->real_escape_string($_REQUEST['zipcode']);
        $email = $connection->real_escape_string($_REQUEST['email']);
        $mobile =  $connection->real_escape_string($_REQUEST['mobile-number']);
        $home =  $connection->real_escape_string($_REQUEST['home-language']);
        $additional =  $connection->real_escape_string($_REQUEST['additional-language']);
        $message = $connection->real_escape_string($_REQUEST['subject']);
        // Attempt insert query execution
        $sqli = 'INSERT INTO `registrationform` 
        (`idNumber`, `title`, `firstName`, 
        `lastName`, `address`, `city`, 
        `zipCode`, `emailAddress`, `mobileNumber`, 
        `homeLanguage`, `additionalLanguage`, `message`) VALUES 
        (   ?,?,?,
            ?,?,?,
            ?,?,?,
            ?,?,?)';
            $stmt = mysqli_stmt_init($connection);    
        if(mysqli_stmt_prepare($stmt, $sqli)){
            mysqli_stmt_bind_param($stmt, "ssssssssssss", $idNum, $title, $firstname, $lastname, $address, $city, $code, $email, $mobile, $home, $additional, $message);
            mysqli_stmt_execute($stmt);
            $_SESSION["SuccessMessage"] ="Records inserted successfully.";
            setcookie("SuccessMessage",$_SESSION["SuccessMessage"], time()+86400/24, "/");
            header("Location: ../html/Registrationform.html");
            exit();
        } else{
            $_SESSION["ErrorMessage"] ="ERROR: Could not execute"; //$sql. " . $connection->error;
            setcookie("ErrorMessage",$_SESSION["ErrorMessage"], time()+86400/24, "/");
            header("Location: ../html/Registrationform.html");
            exit();
        }
        // Close connection
        $connection->close();
    }
?>