<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    // 获取前端数据
    $cat = isset($_GET['category']) ? $_GET['category'] : null;
    // $id = isset($_GET['id']) ? $_GET['id'] : null;

    // 编写sql语句
    $sql = "select * from goods where";

    // if($id){
    //  $sql .= " id='$id' and";
    // }

    // 根据分类改变sql语句
    if($cat){
        $sql .= " category='$cat' and"; //select * from goods where category=nike
    }

    $sql .= ' 1=1';

    // echo "$sql";

    // 查询sql语句
    // 得到查询结果集合（对象）
    $res = $conn->query($sql);

    // 使用查询结果集
    // 得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);

    $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
    $qty = isset($_POST['qty']) ? $_POST['qty'] : 20;
    // 根据分页截取数据
    $res = array(
        'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
        'total'=>count($row),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );
    // 输出json字符串
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>