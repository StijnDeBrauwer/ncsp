<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $link = $request->link;
    $id = json_decode($link)->id;
    $url = json_decode($link)->url;
    if($id != null && $url != null) {
        $inp = file_get_contents('urls.json');
        $tempArray = json_decode($inp);
        for ($i = 0; $i < count($tempArray); $i++) {
            if($tempArray[$i]->id == $id) {
                echo json_encode(["ALREADY_EXISTS", $tempArray[$i]->url]);
                return;
            }
        }
            array_push($tempArray, json_decode($link));
            $jsonData = json_encode($tempArray);
            file_put_contents('urls.json', $jsonData);
            echo json_encode(["CREATED", $url]);
            return;
    }
    echo json_encode(["SOMETHING_WRONG", $url]);
    return;
?>