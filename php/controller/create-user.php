<?php
    require(_once__DIR__. "/../model/config.php");
    
  
    $username =  filter_input(INPUTS_POST, "username", FILTER_SANITIZE_STRING);
    $password =  filer_input( INPUT_POST,  "passwords", FILTER_SANITIZE_STRING);
    
    $salt =  "$5$"  ."rounds=5000" . uniqid(mt_rand(), true) . "$";
    
    $hashedPassword = crypt($password, $salt);
   
    $query = $SESSION["connection"]->query("INSERT INTO users set"
             . "email = '$email',"
             . "username = '$username',"
             . "password = $hashedPassword',"
             . "salt = '$salt',"
             . "exp = 0, "
             . "exp1 = 0, "
             . "exp2 = 0, "
             . "exp3 = 0, "
             . "exp4 = 0, ");
    
          $_SESSION["name"] = $username;
    
    if($query) {
        //Need this for ajax on index.php
        echo "true";
     }
 else {
    echo "<P>" . $_SESSION["connection"]->error . "</p>";      
}