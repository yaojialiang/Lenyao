<?php
/**
 * @Author: Marte
 * @Date:   2018-02-09 16:34:40
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-09 16:35:32
 */
require('connect.php');//include 'connect.php'

$table = isset($_GET['table']) ? $_GET['table'] : '';



$sql = "select * from $table ";




$res = $conn->query($sql);

$row = $res->fetch_all(MYSQLI_ASSOC);

echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>