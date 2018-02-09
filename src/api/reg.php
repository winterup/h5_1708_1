<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;

    // 判断用户名是否存在
    $data = $conn->query("select * from user where username='$username'");


    if($data->num_rows == 0){
        // // 密码md5加密
        // $password = md5($password);
        
        // 写入数据sql语句
        $sql = "insert into user(username,password) values('$username','$password')";

        $res = $conn->query($sql);
        var_dump($sql);
        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }
?>