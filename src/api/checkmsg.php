<?php
/**
 * @Author: Marte
 * @Date:   2018-02-09 13:32:42
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-09 14:06:15
 */
require('connect.php');//include 'connect.php'

$username = isset($_GET['username']) ? $_GET['username'] : null;


// 判断用户名是否存在
$data = $conn->query("select * from user where username='$username'");


if($data->num_rows == 0){
    // 密码md5加密
    // $password = md5($password);
    
    // 写入数据sql语句
    // $sql = "insert into user(username,password) values('$username','$password')";

    // $res = $conn->query($sql); 
    echo "success";
    
}else{
    echo "fail";
}

?>