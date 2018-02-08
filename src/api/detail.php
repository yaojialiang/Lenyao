<?php
/**
 * @Author: Marte
 * @Date:   2018-02-08 16:43:47
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 16:49:33
 */
require('connect.php');//include 'connect.php'

$table = isset($_GET['table']) ? $_GET['table'] : '';

$id = isset($_GET['id']) ? $_GET['id'] : '';


$sql = "select * from $table where id = $id";


$res = $conn->query($sql);

$row = $res->fetch_all(MYSQLI_ASSOC);

echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>