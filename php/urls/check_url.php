<?php
    /*$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $link = $request->link;
    $id = json_decode($link)->id;
    $url = json_decode($link)->url;
    
    if($id != null && $url != null) {
        $inp = file_get_contents('urls.json');
        $tempArray = json_decode($inp);

        for ($i = 0; $i < count($tempArray); $i++) {
            if($tempArray[$i]->id == $id && $tempArray[$i]->url == $url) {
                echo "true";
                return;
            }
        }
    }
    echo "false";*/
    include("../database/connection.php");
    include("url.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $link = $request->link;
    $id = json_decode($link)->id;
    $url = json_decode($link)->url;
    $conn = connect();
    $urlObj = new Url($conn);
    $result = $urlObj->isExistingUrl($id, $url, true);
    echo $result;
?>