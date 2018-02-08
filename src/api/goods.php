<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $id = isset($_GET['id']) ? $_GET['id'] : '';

    $sql = "select * from goods where id=$id";
    // echo $sql;
    $res = $conn->query($sql);

    $row = $res->fetch_assoc();
    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>