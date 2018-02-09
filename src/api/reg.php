<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 19:14:00
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-09 14:48:45
 */
require('connect.php');//include 'connect.php'

$username = isset($_GET['username']) ? $_GET['username'] : null;
$password = isset($_GET['password']) ? $_GET['password'] : null;
$qq = isset($_GET['qq']) ? $_GET['qq'] : null;
$phone = isset($_GET['phone']) ? $_GET['phone'] : null;

// 判断用户名是否存在
$data = $conn->query("select * from user where username='$username'");


if($data->num_rows == 0){
    // 密码md5加密
    $password = md5($password);
    
    // 写入数据sql语句
    $sql = "insert into user(username,password,phone,qq) values('$username','$password','$phone','$qq')";

    $res = $conn->query($sql);

}

?>