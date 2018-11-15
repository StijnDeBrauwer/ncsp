<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $prod = $request->product;
    
    if($prod != null) {
        $id = json_decode($prod)->id;
        $inp = file_get_contents('products.json');
        $tempArray = json_decode($inp);

        for ($i = 0; $i < count($tempArray); $i++) {
            if($tempArray[$i]->id == $id) {
                $tempArray[$i] = json_decode($prod);
                break;
            }
        }
        
        $jsonData = json_encode($tempArray);
        file_put_contents('products.json', $jsonData);
    }
?>