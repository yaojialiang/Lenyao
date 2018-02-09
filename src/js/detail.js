/* 
* @Author: Marte
* @Date:   2018-02-05 19:25:23
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 16:45:55
*/

require(['config'],function(){

    require(['jquery','zoom','common'],function($){

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
            $.ajax({
                url:'../api/update.php',
                data:{
                    id:id
                    // des:data[0].des,
                    // name:data[0].name,
                    // price:data[0].price,
                    // size:data[0].size,
                    // img:data[0].img,
                    // type:data[0].type,
                    // sellnum:data[0].sellnum,
                    // save:data[0].save,
                    // time:data[0].time,
                    // qty:data[0].qty
                }
            })
            // 添加cookie
            // $.ajax({
            //     url:'../api/detail.php',
            //     data:{
            //         table:'goodlist',
            //         id:id
            //     },
            //     success:function(data){

            //         // 获取cookie,判断有无相同商品
            //         var goodslist = Cookie.get('goodlist');
            //         console.log(goodslist)
            //         // 判断获取的Cookie是否存在
            //         if(goodslist==''){
            //             goodslist = data;
            //             var now = new Date();
            //             now.setDate(now.getDate()+7);
            //             Cookie.set('goodlist',goodslist,{expires:now,path:'/'})
            //             console.log(JSON.parse(data)[0].id)
            //             $.ajax({
            //                 url:'../api/update.php',
            //                 data:{
            //                     id:JSON.parse(data)[0].id
            //                     // des:data[0].des,
            //                     // name:data[0].name,
            //                     // price:data[0].price,
            //                     // size:data[0].size,
            //                     // img:data[0].img,
            //                     // type:data[0].type,
            //                     // sellnum:data[0].sellnum,
            //                     // save:data[0].save,
            //                     // time:data[0].time,
            //                     // qty:data[0].qty
            //                 }
            //             })
                        
            //         }

            //         else{
            //             goodslist = JSON.parse(goodslist);
            //             // 判断当前商品是否已经存在cookie当中
            //             for(var i=0;i<goodslist.length;i++){
            //                 if(goodslist[i].id === id){
            //                     goodslist[i].qty++;
            //                     break;
            //                 }
            //             }
            //             if(i===goodslist.length){
                            
            //                 goodslist.push(data[0]);

            //                 var now = new Date();
            //                 now.setDate(now.getDate()+7);


            //             }
            //             goodslist = JSON.stringify(goodslist)
            //             Cookie.set('goodlist',goodslist,{expires:now,path:'/'})
                        
            //         }
            //         // 更新数据库
                    
                    
                    
                    

            //     }
            // })
            
        })

        

    })

});