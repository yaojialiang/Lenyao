/* 
* @Author: Marte
* @Date:   2018-02-06 19:21:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 15:49:23
*/

require(['config'],function(){

    require(['jquery'],function($){

        $('header').load('header_nosearch');
        $('footer').load('footer');
        $('#floatmenu').load('floatmenu');

        // tab标签切换
        $('.tabtitle').on('click',function(){
            var idx = $(this).index();
            $('.tabcontent').css({display:'none'}).eq(idx).css({display:'block'})
            $('.tabtitle').css({background:'#F5F8FA'}).eq(idx).css({background:'#fff'})
        })

        // 登录按钮
        
        $('.loginbtn').on('click',function(){
            var password = document.querySelector('.password').value;
            var username = document.querySelector('.username').value;
            $.ajax({
                url:'../api/login.php',
                data:{
                    username:username,
                    password:password
                },
                success:function(data){
                    if(data=='success'){
                        location.href='../index.html';
                    }else{
                        alert('用户名或密码不正确');
                    }
                }
            })
        })
    })

});