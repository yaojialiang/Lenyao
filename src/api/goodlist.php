<?php
/**
 * @Author: Marte
 * @Date:   2018-02-08 11:24:17
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 15:37:17
 */
require('connect.php');//include 'connect.php'

$table = isset($_GET['table']) ? $_GET['table'] : '';

$pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : '';

$pageFirst = 1 + ($pageNo-1)*12;

$pageLast = $pageFirst + 11;

if($pageNo){
    $sql = "select * from $table where id BETWEEN $pageFirst AND $pageLast";
}else{
    $sql = "select * from $table";
}

$res = $conn->query($sql);

$row = $res->fetch_all(MYSQLI_ASSOC);

echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>