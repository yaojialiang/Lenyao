<?php
    require('connect.php');
    

    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    // $password = md5($password);

    $sql = "select * from user where username='$username' and password='$password'";



    $result = $conn->query($sql);



    if($result->num_rows > 0){
        echo 'success';
    }else{
        echo 'fail';
    }
    


    $result->free();

    $conn->close();
?>