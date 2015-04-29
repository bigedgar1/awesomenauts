<?php  
class Database {
    
    
    private $connection;
    private $host;
    private $username;
    private $password;
    private $database;
    
    public function __construct($host, $username , $password) {
     $this->host = $host;
     $this->username = $username;
     $this->password = password;
     $this->database =$database;
    }

    public function openConnection(){
        $this->connection = new mysqli($this->host, $this->username, $this->password); 
    
        if($this->connection->connect_error) { {      
          die("<P>error:  " . $this->connection->connect_error . "</p>");   }
          
     }
    }
    
    public function closeConnection(){
        if(isset($this->connection)){
          $this->connection->close();
    }
    }
    
    
    public function query($string){
     $this->openConnection();
     
     $query = $this->connection->query($string);
     
     $this->closeConnection();
     
     return $query;
    }
}