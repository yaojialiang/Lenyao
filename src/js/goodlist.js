/* 
* @Author: Marte
* @Date:   2018-02-05 08:55:28
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 16:39:30
*/

require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery'],function($){
        // 哪个文件调用它他的基础路径就是谁，这里是index.html调用它，所以他的基础路径是index.html所在目录
        $('header').load('header');
        $('footer').load('footer');
        $('#floatmenu').load('floatmenu');
        $('#sortnav').load('nav');

        var pageNo = 1;
        // 数据生成列表
        function show(){
            $.ajax({
                        url:'../api/goodlist.php',
                        dataType:'json',
                        data:{
                            table:'goodlist',
                            pageNo:pageNo
                        },
                        success:function(data){
                            console.log(666)
                            // 生成商品列表
                            var $res = $.map(data,function(item,idx){
                                return `<li data-id=${item.id}>
                                                    
                                            <a>
                                                <img src="${item.img}" alt="" />
                                            </a>
                                            
                                            <ul>
                                                <li><a><img src="../img/goodlist_img/goodlist1.jpg" alt="" /></a></li>
                                                <li><a><img src="../img/goodlist_img/goodlist1.jpg" alt="" /></a></li>
                                                <li><a><img src="../img/goodlist_img/goodlist1.jpg" alt="" /></a></li>
                                                <li><a><img src="../img/goodlist_img/goodlist1.jpg" alt="" /></a></li>
                                                <li><a><img src="../img/goodlist_img/goodlist1.jpg" alt="" /></a></li>
                                            </ul>

                                            <div>
                                                <p>
                                                    <span>${item.price}</span>
                                                    <span>
                                                        已售出
                                                        <span>${item.sellnum}</span>件
                                                    </span>
                                                </p>
                                                <a href="">
                                                    <i></i> 
                                                    ${item.name}
                                                </a>
                                                <div>
                                                    <a href="">数据包</a>
                                                    <a href="">加入进货单</a>
                                                </div>
                                                <div>
                                                    更适销：美国&nbsp;&nbsp;aliexpress  
                                                </div>
                                                <p>
                                                    现货销售
                                                </p>
                                            </div>
                                            
                                        </li>`
                            })
                            
                            $('.goodlist').html($res);

                            var goodlist = document.querySelector('.goodlist');
                            for(var i=0;i<goodlist.children.length;i++){
                                if(i%2==1){
                                    goodlist.children[i].style.marginLeft = '31px';
                                }
                            }

                            
                            
                        }
                    })
        }
        
        // 初始化
        show();

        // 最大页
        var maxpage;
        //生成分页
        $.ajax({
            url:'../api/goodlist.php',
            dataType:'json',
            data:{
                table:'goodlist'
            },
            success:function(data){
                console.log(666)
                console.log(data.length)
                var pages = document.querySelector('.pages');
                maxpage = Math.ceil(data.length/12);
                for(var i=0;i<Math.ceil(data.length/12);i++){
                    pages.innerHTML += '<li>'+(i+1)+'</li>';
                }
                
                
            }
        })
        
        // 点击数字页
        $('.selectpage').on('click','li',function(){
            pageNo = this.innerText;
            $(this).css({backgroundColor:'#bc338b',color:'#fff'}).siblings().css({backgroundColor:'#ccc',color:'#000'})
            show();
            console.log(pageNo);
        })
        // 点击上一页
        $('.prev').on('click',function(){
            pageNo--;
            if(pageNo>=1){
                $('.pages').children().eq(pageNo-1).css({backgroundColor:'#bc338b',color:'#fff'}).siblings().css({backgroundColor:'#ccc',color:'#000'})
                show();
            }
            
        })
        // 点击下一页
        $('.next').on('click',function(){
            pageNo++;
            if(pageNo<=maxpage){
                $('.pages').children().eq(pageNo-1).css({backgroundColor:'#bc338b',color:'#fff'}).siblings().css({backgroundColor:'#ccc',color:'#000'})
                show();
            }
            
            
        })

        //点击商品传参
        $('.goodlist').on('click','img',function(){
            var id = this.parentNode.parentNode.dataset.id;
            location.href = 'detail.html?'+id;
            console.log(id);
        })  
    })

});