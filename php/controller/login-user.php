<?php
    require_once(__DIR__ . "/../model/config.php");
    
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING); 
    
   $query = $_SESSION["connection"]->qury("SELECT salt, password FROM users where");

   if ($query->num_rows == 1) {
       $row = $query->fetch_array();
       
       if($row["password"] === crypt($password, $row["salt"])) {
           $_SESSION["authenticated"] = true;
           echo "<P>Login Succcessful!</p>";       
        }
        else { 
            echo "<P>Invad username and password</p>";
        }
    }
 else {
        echo "<p>Invad username and password</p>";   
}