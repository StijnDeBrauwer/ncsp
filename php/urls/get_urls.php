<?php
    /*
    $inp = file_get_contents('urls.json');
    $tempArray = json_decode($inp);
    $jsonData = json_encode($tempArray);
    echo $jsonData;*/
    include("../database/connection.php");
    include("url.php");
    $conn = connect();
    $url = new Url($conn);
    $result = $url->read();
    echo json_encode($result);
?>