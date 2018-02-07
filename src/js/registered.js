/* 
* @Author: Marte
* @Date:   2018-02-06 21:45:47
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 21:46:19
*/

require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery'],function($){
        // 哪个文件调用它他的基础路径就是谁，这里是index.html调用它，所以他的基础路径是index.html所在目录
        $('header').load('header_nosearch');
        $('footer').load('footer');
        $('#floatmenu').load('floatmenu');
    })

});