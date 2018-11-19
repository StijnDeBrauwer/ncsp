<?php
    function connect() {
        $servername = "localhost";
        $username = "newcrfs310_ncsp";
        $password = "Puurs2017!";
        $dbname = "newcrfs310_ncsp";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }
?>