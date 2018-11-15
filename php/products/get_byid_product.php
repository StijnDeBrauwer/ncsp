<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $id = $request->product;
    
    if($id != null) {
        $inp = file_get_contents('products.json');
        $tempArray = json_decode($inp);
        $output = null;

        for ($i = 0; $i < count($tempArray); $i++) {
            if($tempArray[$i]->id == $id) {
                echo json_encode($tempArray[$i]);
            }
        }
    }
?>