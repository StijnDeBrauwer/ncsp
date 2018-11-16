<?php
    $inp = file_get_contents('urls.json');
    $tempArray = json_decode($inp);
    $jsonData = json_encode($tempArray);
    echo $jsonData;
?>