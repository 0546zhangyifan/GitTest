<?php
    header('content-type:text/html;charset="utf-8"');
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    $responseData = array("code" => 0, "message" => "");
    
    $link = mysql_connect("localhost","root","123456");
    if(!$link){
        $responseData["code"] = 1;
        $responseData["message"] = "服务器繁忙";
        echo json_encode($responseData);
        exit;
    }

    mysql_set_charset("utf8");
    mysql_select_db("hpShop");
    
    $sql1 = "select * from user where username='{$username}'";
    $res1 = mysql_query($sql1);
    $row1 = mysql_fetch_assoc($res1);
    if($row1){
        $responseData["code"] = 2;
        $responseData["message"] = "用户名已存在，请直接登录";
        echo json_encode($responseData);
        exit;
    }
    $sql2 = "select * from user where email='{$email}'";
    $res2 = mysql_query($sql2);
    $row2 = mysql_fetch_assoc($res2);
    if($row2){
        $responseData["code"] = 3;
        $responseData["message"] = "该邮箱已注册！";
        echo json_encode($responseData);
        exit;
    }
    $str = md5(md5($password)."加密");
    $sql3 = "insert into user(username,email,phone,password) values('{$username}','{$email}',{$phone},'{$str}')";
    $res3 = mysql_query($sql3);
    if(!$res3){
        $responseData["code"] = 4;
        $responseData["message"] = "用户名注册失败！";
        echo json_encode($responseData);
        exit;
    }
    $responseData["message"] = "用户名注册成功！";
    echo json_encode($responseData);
    mysql_close($link);
?>