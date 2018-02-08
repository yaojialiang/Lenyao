/* 
* @Author: Marte
* @Date:   2018-02-05 19:25:23
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 20:03:27
*/

require(['config'],function(){

    require(['jquery','zoom'],function($){

        $('header').load('header');
        $('footer').load('footer');
        $('#floatmenu').load('floatmenu');
        $('#sortnav').load('nav');

        // 获取参数
        var id = location.search.slice(1);
        
        $.ajax({
            url:'../api/detail.php',
            data:{
                table:'goodlist',
                id:id
            },
            dataType:'json',
            success:function(data){
                console.log(data);
                $('.showzoom').find('img').attr({src:data[0].img});
                $('.showzoom').find('img')[0].dataset.big=data[0].img.slice(0,-4)+'_big.jpg';
                $('.showzoom').gdsZoom({position:'right'});
                $('.goodsname').text(data[0].des);
                $('.goodsprice').text(data[0].price);
                console.log(data[0].des)
            }
        })

        // 加入购物车效果
        var floatmenu = document.querySelector('#floatmenu');
        
        
        $('.addcar').on('click',function(){
            var left = floatmenu.offsetLeft+5;
            var top = floatmenu.offsetTop+window.scrollY+40;
            var copyImg = document.querySelector('.showzoom').children[0].cloneNode(true);
            copyImg.className = 'copyImg';
            copyImg.style.position = 'absolute';
            copyImg.style.left = '35px';
            copyImg.style.top = '364px';
            document.body.appendChild(copyImg);
            $('.copyImg').animate({width:30,height:30,left:left,top:top},function(){
                copyImg.parentNode.removeChild(copyImg);
            })
        })


    })

});