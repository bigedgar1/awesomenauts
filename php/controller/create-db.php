<?php
   require_once (__DIR__ . "/../model/config.php");
     
   $query = $_SESSION["connection"]->query("CREATE TABLE posts ("
            . "id int(11) NOT NULL AUTO_INCREMENT,"
            . "title varchar(255) NOT NULL,"
            . "post text NOT NULL,"
            . "PRIMARTY KEY (id)");
   
     if($query) {
         echo "<p>succesfully created table: post</p>";
     }
 else {
         echo "<P>". $_SESSION["connection"]->error ."</p>";
}
           