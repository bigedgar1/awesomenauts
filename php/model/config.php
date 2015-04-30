<?php
    require_once(__DIR__ ."/database.php");
    session_start();
    
    $path = "/edgarrawesomenauts/php/";
    
    $host = "localhost";
    $username = "root";
    $password = "root";
    $database = "awesomenauts_db";
 
    if(!isset($_SESSION["connection"]))  {
        $connection = new Database($host, $username, $passwords, $database);
        $_SESSION["connection"] = $connection;
    }
