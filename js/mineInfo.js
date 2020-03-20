define(["jquery","jquery-cookie"],function(){
    function mineImgBtn(){
        $(".header_right_bottom a").eq(3).click(function(){
            if($(".mine").css("display") == "none"){
                $(".mine").css("display","block");
            }else{
                $(".mine").css("display","none");
            }
            $(".goodsCar").css("display","none");
            return false;
        })
        var cookieStr = $.cookie("user");
        var cookieArr = JSON.parse(cookieStr);
        if(cookieStr){
            var node1 = $(`<div class="mine">
                <div class="jiantou21">
                    <div class="jiantou22"></div>
                </div>
                <p class="welcome">欢迎</p>
                <p class="welcomeEmail">${cookieArr[0].name}</p>
                <button class="back">退出</button>
            </div>`);
            node1.appendTo($(".header_right_bottom"));
            
        }else{
            var node2 = $(`<div class="mine">
                <div class="jiantou21">
                    <div class="jiantou22"></div>
                </div>
                <nav>
                    <span>我的账户</span>
                    <button id="loginHtml">登录</button>
                </nav>
                <nav>
                    <span>新客户</span>
                    <button id="registerHtml">创建新账户</button>
                </nav>
            </div>`);
            node2.appendTo($(".header_right_bottom"));
            $(".header_right_bottom").on("click","#registerHtml",function(){
                location.assign("http://localhost/register.html");
            })
            $(".header_right_bottom").on("click","#loginHtml",function(){
                location.assign("http://localhost/login.html");
            })
        }
        $(".header_right_bottom").on("click",".back",function(){
            $.cookie("user","",{
                expires: -1
            })
            location.reload();
        })
    }
    function regular(){
        var testEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        var ifName = 0;
        var ifEmail = 0;
        var ifTel = 0;
        var ifPwd = 0;
        var repeatPwd = 0;
        $("#username").blur(function(){
            if($("#username").val() == ""){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("请输入用户名。");
                ifName = 0;
            }else if($("#username").val().length > 18 || $("#username").val().length < 6){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("用户名长度为6~18个字符。");
                ifName = 0;
            }else{
                $(this).css({
                    backgroundColor:"#fff",
                    borderColor:"#c2c2c2"
                });
                $(this).siblings(".tishi").css("display","none");
                $(this).parent().siblings("div").css("display","block");
                ifName = 1;
            }
        }).focus(function(){
            $(this).css({
                backgroundColor:"#fff",
                borderColor:"#c2c2c2"
            });
            $(this).siblings(".tishi").css("display","none");
        })
        $("#useremail").blur(function(){
            if($("#useremail").val() == ""){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("这是一个必填字段。");
                ifEmail = 0;
            }else if(!testEmail.test($("#useremail").val())){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("请输入有效的电子邮件地址。");
                ifEmail = 0;
            }else{
                $(this).css({
                    backgroundColor:"#fff",
                    borderColor:"#c2c2c2"
                });
                $(this).siblings(".tishi").css("display","none");
                $(this).parent().siblings("div").css("display","block");
                ifEmail = 1;
            }
        }).focus(function(){
            $(this).css({
                backgroundColor:"#fff",
                borderColor:"#c2c2c2"
            });
            $(this).siblings(".tishi").css("display","none");
        })
        $("#phone").blur(function(){
            if($("#phone").val() == ""){
                ifTel = 0;
                $(this).parent().siblings("div").css("display","none");
            }else if(!(/^1[3456789]\d{9}$/.test($("#phone").val()))){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("请输入正确的手机号。");
                ifTel = 0;
            }else{
                $(this).css({
                    backgroundColor:"#fff",
                    borderColor:"#c2c2c2"
                });
                $(this).siblings(".tishi").css("display","none");
                $(this).parent().siblings("div").css("display","block");
                ifTel = 1;
            }
        }).focus(function(){
            $(this).css({
                backgroundColor:"#fff",
                borderColor:"#c2c2c2"
            });
            $(this).siblings(".tishi").css("display","none");
        })
        $("#password").blur(function(){
            if($("#password").val() == ""){
                $(this).css({
                    backgroundColor:"#fff",
                    borderColor:"#c2c2c2"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","none");
                ifPwd = 0;
            }else if($("#password").val().length < 6 || $("#password").val().length > 18){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("密码长度为6~18个字符。");
                ifPwd = 0;
            }else if(/^\d+$/g.test($("#password").val()) || /^[a-z]+$/g.test($("#password").val()) || /^[A-Z]+$/g.test($("#password").val())){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("密码不能为纯数字或字母。");
                ifPwd = 0;
            }else{
                $(this).css({
                    backgroundColor:"#fff",
                    borderColor:"#c2c2c2"
                });
                $(this).siblings(".tishi").css("display","none");
                $(this).parent().siblings("div").css("display","block");
                ifPwd = 1;
            }
        }).focus(function(){
            $(this).css({
                backgroundColor:"#fff",
                borderColor:"#c2c2c2"
            });
            $(this).siblings(".tishi").css("display","none");
        })
        $("#repeatpassword").blur(function(){
            if($("#repeatpassword").val() == ""){
                $(this).css({
                    backgroundColor:"#fff",
                    borderColor:"#c2c2c2"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","none");
                repeatPwd = 0
            }else if($("#repeatpassword").val() != $("#password").val()){
                $(this).css({
                    backgroundColor:"#FFCCCC",
                    borderColor:"red"
                });
                $(this).parent().siblings("div").css("display","none");
                $(this).siblings(".tishi").css("display","block").html("两次输入密码不一致。");
                repeatPwd = 0;
            }else{
                $(this).css({
                    backgroundColor:"#fff",
                    borderColor:"#c2c2c2"
                });
                $(this).siblings(".tishi").css("display","none");
                $(this).parent().siblings("div").css("display","block");
                repeatPwd = 1;
            }
        }).focus(function(){
            $(this).css({
                backgroundColor:"#fff",
                borderColor:"#c2c2c2"
            });
            $(this).siblings(".tishi").css("display","none");
        })
        $("#registerBtn").click(function(){
            if(ifName && ifEmail && ifTel && ifPwd && repeatPwd && $("#privacy").prop("checked") && $("#choice").prop("checked")){
                $.ajax({
                    type:"post",
                    url:"php/register.php",
                    data:{
                        username: $("#username").val(),
                        email: $("#useremail").val(),
                        phone: $("#phone").val(),
                        password: $("#password").val()
                    },
                    success:function(result){
                        var obj = JSON.parse(result);
                        alert(obj.message);
                        setTimeout(function(){
                            location.assign("login.html");
                        }, 1500);
                    },
                    error:function(msg){
                        alert(msg);
                    }
                })
            }
        })
    }

    function loginUser(){
        $("#loginName").keyup(function(){
            $(this).css({
                fontStyle:"normal",
                color:"#000"
            })
        })
        $("#loginPassword").keyup(function(){
            $(this).css({
                fontStyle:"normal",
                color:"#000"
            })
        })
        $("#loginBtn").click(function(){
            $.ajax({
                type:"post",
                url:"php/login.php",
                data:{
                    username:$("#loginName").val(),
                    password:$("#loginPassword").val()
                },
                success:function(result){
                    var obj = JSON.parse(result);
                    alert(obj.message);
                    var arr = [{name : $("#loginName").val()}];
                    $.cookie("user",JSON.stringify(arr),{
                        expires: 7
                    })
                    setTimeout(function(){
                        location.assign("index.html");
                    }, 1500);
                },
                error:function(msg){
                    alert(msg);
                }
            })
        })
        $(".column_main_right_new").find("button").click(function(){
            location.assign("register.html")
        })
        
    }

    return{
        mineImgBtn:mineImgBtn,
        regular:regular,
        loginUser:loginUser
    }
})