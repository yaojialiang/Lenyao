/* 
* @Author: Marte
* @Date:   2018-02-06 14:06:05
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 16:59:09
*/

require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery','common'],function($){
        // 哪个文件调用它他的基础路径就是谁，这里是index.html调用它，所以他的基础路径是index.html所在目录
        $('header').load('header_progress');
        $('footer').load('footer');
        $('#floatmenu').load('floatmenu');

        //读取Cookie
        // var goodslist = Cookie.get('goodlist');

        // if(goodslist.length===0){
        //     goodslist = [];
        // }else{
        //     goodslist = JSON.parse(goodslist);
        // }
        // console.log(goodslist)
        // //根据Cookie数据生成列表
        // var goods = $.map(goodslist,function(item,idx){
        //     var total = item.price*item.qty;
        //     return `<li>
        //                 <div>
        //                     <p>
        //                         <input type="checkbox" />
        //                         <span>
        //                             ${item.des}
        //                         </span>
        //                         <span>
        //                             删除所有
        //                         </span>
        //                     </p>
        //                     <ul>
        //                         <li>
        //                             <img src=${item.img} alt="" />
        //                             <p>${item.name}</p>
        //                             <p>${item.type}</p>
        //                         </li>
        //                         <li>
        //                             <div>
        //                                 <span></span>
        //                                 <input type="text" value=${item.qty}>
        //                                 <span></span>
        //                             </div>
                                    
        //                         </li>
        //                         <li><p>${item.save}</p></li>
        //                         <li><p><span>${item.price}</span>￥</p></li>
        //                         <li><p><span>>1</span><span>28.99</span></p></li>
        //                         <li><p>￥<span>${total}</span></p></li>
        //                         <li><p>删除</p></li>
        //                     </ul>
        //                 </div>
        //             </li>`
        // })
        // $('.carlist').html(goods)
        var sum = 0;
        $.ajax({
            url:'../api/carlist.php',
            data:{
                table:'carlist',
            },
            dataType:'json',
            success:function(data){
                console.log(data);
                var goods = $.map(data,function(item,idx){
                    var total = item.price*item.qty;
                    sum += total;
                    return `<li>
                                <div>
                                    <p>
                                        <input type="checkbox" />
                                        <span>
                                            ${item.des}
                                        </span>
                                        <span>
                                            删除所有
                                        </span>
                                    </p>
                                    <ul>
                                        <li>
                                            <img src=${item.img} alt="" />
                                            <p>${item.name}</p>
                                            <p>${item.type}</p>
                                        </li>
                                        <li>
                                            <div>
                                                <span></span>
                                                <input type="text" value=${item.qty}>
                                                <span></span>
                                            </div>
                                            
                                        </li>
                                        <li><p>${item.save}</p></li>
                                        <li><p><span>${item.price}</span>￥</p></li>
                                        <li><p><span>>1</span><span>28.99</span></p></li>
                                        <li><p>￥<span>${total}</span></p></li>
                                        <li><p>删除</p></li>
                                    </ul>
                                </div>
                            </li>`
                })
                $('.carlist').html(goods);
                $('.total').text(sum);
            }
        })
        
    })
});