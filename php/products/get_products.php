<?php
    $inp = file_get_contents('products.json');
    $tempArray = json_decode($inp);
    $jsonData = json_encode($tempArray);
    echo $jsonData;
?>