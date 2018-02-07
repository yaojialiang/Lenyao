<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 20:08:47
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-07 20:37:33
 */
require('connect.php');//include 'connect.php'


$sql = "select * from newproduct76 where id<9";

$res = $conn->query($sql);

$row = $res->fetch_all(MYSQLI_ASSOC);

echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>