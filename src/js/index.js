/* 
* @Author: Marte
* @Date:   2018-02-04 21:06:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 16:12:36
*/

require(['config'],function(){

    require(['jquery','banner'],function($){

        $('header').load('html/header');
        $('footer').load('html/footer');
        $('#floatmenu').load('html/floatmenu');
        
        // 改变跳转
        setTimeout(function(){console.log(666)
            $('.home').attr({href:'#'});
            $('.car').attr({href:'html/carlist.html'});
            $('.login').attr({href:'html/login.html'});
        },50)
        
        // 调用轮播图插件
        $('.banner').lxCarousel({
            width:800,
            height:400,
            index:0,
            page:true,
            autoPlay:true,
            duration:3000,
            type:'horizontal',//horizontal,fade
            marquee:true,
            imgs:['img/index_img/banner1.jpg','img/index_img/banner2.jpg','img/index_img/banner3.png','img/index_img/banner4.png','img/index_img/banner5.jpg','img/index_img/banner6.jpg','img/index_img/banner7.jpg']
        })

        // 三级菜单
        $('.erjilan').on('mouseenter',function(){
            var idx = $(this).index();
            $('.sanjilan').css({display:'none'}).eq(idx).css({display:'block'});
        })
        $('.erji').on('mouseleave',function(){
            $('.sanjilan').css({display:'none'})
        })

        $('.sanjilan').on('mouseenter',function(){
            var idx = $(this).index();
            $('.sanjilan').css({display:'none'}).eq(idx).css({display:'block'});
            $('.erjilan').css({backgroundColor:'#EEEEEE'}).eq(idx).css({backgroundColor:'#fff'});
        })
        $('.sanji').on('mouseleave',function(){
            $('.sanjilan').css({display:'none'});
            $('.erjilan').css({backgroundColor:'#EEEEEE'});
        })

        // 促销二级菜单
        $('.cuxiao').on('mouseenter',function(){console.log($(this).find('ul'))
            $(this).find('ul').css({display:'block',zIndex:1000});
        }).on('mouseleave',function(){
             $(this).find('ul').css({display:'none'});
        })



        // 适销二级菜单
        $('.shixiao').on('mouseenter',function(){console.log($(this).find('ul'))
            $(this).find('ul').css({display:'block',zIndex:1000});
        }).on('mouseleave',function(){
             $(this).find('ul').css({display:'none'});
        })

        //请求数据库生成新品列表
        $.ajax({
            url:'api/newproduct.php',
            dataType:'json',
            success:function(data){
                var $res = $.map(data,function(item,idx){console.log(item)
                    return '<li><a><img src="'+item.img+'"></a><a>'+item.des+'</a><a>'+item.price+'</a></li>'
                })

                $('.newproduct').html($res);
            }
        })

        //请求数据库生成平台爆款列表
        $.ajax({
            url:'api/newproduct.php',
            dataType:'json',
            success:function(data){
                var $res = $.map(data,function(item,idx){console.log(item)
                    return '<li><a><img src="'+item.img+'"></a><a>'+item.des+'</a><a>'+item.price+'</a></li>'
                })

                $('.hotstyle').html($res);
            }
        })

    })

});
