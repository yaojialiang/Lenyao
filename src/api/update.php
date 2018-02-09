<?php
/**
 * @Author: Marte
 * @Date:   2018-02-09 10:42:17
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-09 12:55:58
 */
// require('connect.php');//include 'connect.php'

// $table = isset($_GET['table']) ? $_GET['table'] : '';

// $id = isset($_GET['id']) ? $_GET['id'] : '';

// $name = isset($_GET['name']) ? $_GET['name'] : '';

// $price = isset($_GET['price']) ? $_GET['price'] : '';

// $des = isset($_GET['des']) ? $_GET['des'] : '';

// $size = isset($_GET['size']) ? $_GET['size'] : '';

// $img = isset($_GET['img']) ? $_GET['img'] : '';

// $type = isset($_GET['type']) ? $_GET['type'] : '';

// $sellnum = isset($_GET['sellnum']) ? $_GET['sellnum'] : '';

// $save = isset($_GET['save']) ? $_GET['save'] : '';

// $time = isset($_GET['time']) ? $_GET['time'] : '';

// $qty = isset($_GET['qty']) ? $_GET['qty'] : '';


// $sql = "INSERT INTO $table (id,name,price,des,size,img,type,sellnum,save,time,qty)
// VALUES ($id,$name,$price,$des,$size,$img,$type,$sellnum,$save,$time,$qty)";

// if ($conn->query($sql) === TRUE) {
//     echo "新记录插入成功";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }
// $res = $conn->query($sql);

// $row = $res->fetch_all(MYSQLI_ASSOC);

// echo json_encode($row,JSON_UNESCAPED_UNICODE);
// 

    require("connect.php");
     $id = isset($_GET['id']) ? $_GET['id'] : '';
     echo $id;
     // 判断商品是否存在购物车
    $data = $conn->query("select * from carlist where id='$id'");
    var_dump($data);
    
    if($data->num_rows === 0){
        // $sql = "select * from goodlist where id = '$id' " ;
        
        $qql = " insert into carlist select * from goodlist where id = '$id' " ;
        $res = $conn->query($qql);
        
    }else{
        $bbb ="select qty from carlist where id='$id'";
        $res = $conn->query($bbb);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        
        $num = $row[0]['qty']+1;
        echo($num);
        $bql = "update carlist set qty='$num'  where id ='$id'";
        $res = $conn->query($bql);
        
    }




   
?>