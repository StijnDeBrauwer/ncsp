<?php
    class Url {
        private $connection;

        public function __construct($connection){
            $this->connection = $connection;
        }

        public function create($id, $name, $url, $checkUrl){
            $output = $this->isExistingUrl($id, $url, $checkUrl);
            if($output === null) {
                $sql = "INSERT INTO Url (productid, productname, url) VALUES ($id, '$name', '$url')";
                $this->connection->query($sql);
                $this->connection->close();
                return json_encode(["CREATED", $url]);
            } else {
                return json_encode(["ALREADY_EXISTS", $output]);
            }
        }

        public function read(){
            $sql = "SELECT productid, productname, url from Url";
            $result = $this->connection->query($sql);
            $array = array();
            while($row = mysqli_fetch_assoc($result)) {
                array_push($array, $row);
            }
            $this->connection->close();
            return $array;
        }

        public function delete($id){
            $sql = "DELETE from Url WHERE productid = {$id}";
            $this->connection->query($sql);
            $this->connection->close();
            return "true";
        }

        public function isExistingUrl($id, $url, $checkUrl) {
            $sql = null;
            if($checkUrl) {
                $sql = "SELECT productid, productname, url from Url
                WHERE productid = {$id} AND url LIKE '{$url}'";
                $result = $this->connection->query($sql);
                $output = mysqli_fetch_assoc($result) != null ? "true" : "false";
                $this->connection->close();
                return $output;
            } else {
                $sql = "SELECT productid, url from Url
                WHERE productid = {$id}";
                $result = $this->connection->query($sql);
                $url = null;
                while($row = mysqli_fetch_assoc($result)) {
                    $url = $row["url"];
                    break;
                }
                return $url;
            }
        }
    }
?>