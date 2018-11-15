<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $prod = $request->product;
    if($prod != null) {
        $inp = file_get_contents('products.json');
        $tempArray = json_decode($inp);
        array_push($tempArray, json_decode($prod));
        $jsonData = json_encode($tempArray);
        file_put_contents('products.json', $jsonData);
    }
?>