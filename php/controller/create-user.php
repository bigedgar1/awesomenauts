<?php
    require(_once__DIR__. "/../model/config.php");
    
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $username =  filter_input(INPUTS_POST, "username", FILTER_SANITIZE_STRING);
    $password =  filer_input( INPUT_POST,  "passwords", FILTER_SANITIZE_STRING);
    
    $salt =  "$5$"  ."rounds=5000" . uniqid(mt_rand(), true) . "$";
    
    $hashedPassword = crypt($password, $salt);
   
    $query = $SESSION["connection"]->query("INSERT INTO users set"
             . "email = '$email',"
             . "username = '$username',"
             . "password = $hashedPassword',"
             . "salt = '$salt'");
    
    if($query) {
        echo "Successfullly created user: $username";
     }
 else {
    echo "<P>" . $_SESSION["connection"]->error . "</p>";      
}