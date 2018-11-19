<?php
    /*$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $id = $request->id;
    
    if($id != null) {
        $inp = file_get_contents('urls.json');
        $tempArray = json_decode($inp);

        for ($i = 0; $i < count($tempArray); $i++) {
            if($tempArray[$i]->id == $id) {
                unset($tempArray[$i]);
                $jsonData = json_encode($tempArray);
                file_put_contents('urls.json', $jsonData);
                echo "true";
                return;
            }
        }
    }
    echo "false";*/
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $id = $request->id;
    include("../database/connection.php");
    include("url.php");
    $conn = connect();
    $url = new Url($conn);
    $result = $url->delete($id);
    echo $result;
?>