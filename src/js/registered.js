/* 
* @Author: Marte
* @Date:   2018-02-06 21:45:47
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 14:51:22
*/

require(['config'],function(){

    require(['jquery','common'],function($){

        $('header').load('header_nosearch');
        $('footer').load('footer');
        $('#floatmenu').load('floatmenu');

        // 判定用户名
        var checkname=0;
        var username; 
        $('.username').on('blur',function(){
            username = this.value;
            $.ajax({
                url:'../api/checkmsg.php',
                data:{
                    username:username,
                },
                success:function(data){
                    if(!/^[a-z][a-z0-9\-]{5,19}$/.test(username)){
                        $('.usernametip').text('用户名不合法');
                        checkname=0;
                    }else if(data === 'fail'){
                        $('.usernametip').text('用户名已存在');
                        checkname=0;
                    }else{
                        $('.usernametip').text('成功');
                        checkname=1;
                    }
                }
            })
        })

        // QQ判定
        var checkqq = 0;
        var qq ;
        $('.qq').on('blur',function(){
            qq = this.value;
            if(!/[0-9]{6,}/.test(qq)){
                $('.qqtip').text('qq不合法');
                checkqq = 0;
            }else{
                $('.qqtip').text('成功');
                checkqq = 1;
            }
        })

        // 判定密码
        var checkpassword = 0;
        var password;
        $('.password').on('blur',function(){
            password = this.value;
            if(!/^[^\s]{6,20}$/.test(password)){
                $('.passwordtip').text('密码不合法');
                checkpassword = 0;
            }else{
                $('.passwordtip').text('成功');
                checkpassword = 1;
            }
        })

        // 手机判定
        var checkphone = 0;
        var phone;
        $('.phone').on('blur',function(){
            phone = this.value;
            if(!/^1[34578]\d{9}$/.test(phone)){
                $('.phonetip').text('手机不合法');
                checkphone = 0;
            }else{
                $('.phonetip').text('成功');
                checkphone = 1;
            }
        })

        // 生成验证码
        $('.yanzhengma').on('click',function(){
            var yanzheng = vCode();
            var yan = document.querySelector('.yanzhengmashow');
            yan.value=yanzheng;
        })
        
        // 注册按钮
        $('.zhuche').on('click',function(){
            if(checkname&&checkqq&&checkpassword&&checkphone){
                alert('注册成功');
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:username,
                        qq:qq,
                        password:password,
                        phone:phone
                    }
                })
                location.href='../html/login.html';
            }else{
                var zhuchetip = document.querySelector('.zhuchetip');
                zhuchetip.innerText = '用户信息不合法'
            }
        })
        
    })

});