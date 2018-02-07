<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 18:59:47
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-07 20:16:35
 */

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pfhoo";

    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    }

    $conn->set_charset('utf8');
?>